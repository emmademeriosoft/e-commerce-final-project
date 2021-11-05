import { Box, Step, StepLabel, Stepper, Typography, Button, Container, Paper } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/styles'
import StepperIcon from '../components/StepperIcon';
import InformationForm from '../components/InformationForm';
import StripeContainer from '../components/StripeContainer';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  frm_fname: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  frm_mname: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Midle name is a required field"),
  frm_lname: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
  frm_contact_no: yup
    .string()
    .matches(/^[0-9]*$/, "Phone Number should contain numbers")
    .required("Last name is a required field"),
  frm_address: yup
    .string()
    .required("Address is a required field"),
  frm_famous_placed: yup
    .string()
    .required("Famous Place is a required field"),
});

const steps = ['Information', 'Payment'];
const useStyles = makeStyles({
  "checkout_wrapper": {
    marginTop: "90px",
  }
})

const StepContent = ({ step }) => {
  switch (step) {
    case 0:
      return <InformationForm />
      break;
    case 1:
      return <StripeContainer />
      break;
    default:
      return <></>;
  }
}

export const CheckOut = () => {

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {


    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  const handleReset = () => {
    setActiveStep(0);
  };
  const style = useStyles()
  const methods = useForm({
    defaultValues: { frm_fname: '', frm_mname: '', frm_lname: '', frm_contact_no: '', frm_address: '', frm_famous_placed: '' },
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data)
    handleNext()
  }
  return (
    <section className={style.checkout_wrapper}>

      <Container>
        <Paper elevation={3} className="p-3">
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {


                return (
                  <Step key={index}>
                    <StepLabel StepIconComponent={StepperIcon} className="flex-column text-center"><Typography variant="caption">{label}</Typography></StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </Fragment>
            ) : (
              <Fragment>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <StepContent step={activeStep} />
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </Box>
                  </form>
                </FormProvider>

              </Fragment>
            )}
          </Box>
        </Paper>
      </Container>
    </section>
  );
}

export default CheckOut
