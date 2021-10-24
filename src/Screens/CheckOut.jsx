import { Box, Step, StepLabel, Stepper, Typography, Button, Container, Paper } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/styles'
import StepperIcon from '../components/StepperIcon';
import InformationForm from '../components/InformationForm';


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
      return <h1>step 2 mine</h1>
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


                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </Fragment>
            )}
          </Box>
        </Paper>
      </Container>
    </section>
  );
}

export default CheckOut
