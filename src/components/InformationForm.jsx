import { Box, Grid, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from 'react-redux'
import { stepperIncrement } from '../redux/actions/stepperAction';
import { saveFormData } from '../redux/actions/formDataAction';


const ErrorMsg = ({ errMsg }) => {
    return (
        <span><i className="fas fa-exclamation-circle mx-1"></i>{errMsg}</span>
    )
}

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

const InformationForm = () => {
    const fromCount = useSelector(state => state.fromCount)
    const fromData = useSelector(state => state.fromData)
    const dispatch = useDispatch()
    const { count } = fromCount;
    // const { savedData } = fromData;
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: fromData ,
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    const handleNext = () => {
        dispatch(stepperIncrement())
    };
    const onSubmit = (data) => {
        console.log(data)
        dispatch(saveFormData(data))
        handleNext()
    }
    useEffect(() => {
        console.log(fromData)
        console.log(count)

    }, [])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box>
                            <TextField
                                id="frm_fname"
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                {...register("frm_fname", { required: true })}
                                error={Boolean(errors.frm_fname)}
                                helperText={errors.frm_fname && <ErrorMsg errMsg={errors.frm_fname.message} />}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box>
                            <TextField
                                id="frm_mname"
                                label="Midle Name"
                                variant="outlined"
                                fullWidth
                                {...register("frm_mname", { required: true })}
                                error={Boolean(errors.frm_mname)}
                                helperText={errors.frm_mname && <ErrorMsg errMsg={errors.frm_mname.message} />}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box>
                            <TextField
                                id="frm_lname"
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                {...register("frm_lname", { required: true })}
                                error={Boolean(errors.frm_lname)}
                                helperText={errors.frm_lname && <ErrorMsg errMsg={errors.frm_lname.message} />}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <TextField
                                id="frm_contact_no"
                                label="Contact No."
                                variant="outlined"
                                fullWidth
                                {...register("frm_contact_no", { required: true })}
                                error={Boolean(errors.frm_contact_no)}
                                helperText={errors.frm_contact_no && <ErrorMsg errMsg={errors.frm_contact_no.message} />}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box>
                            <TextField
                                id="frm_address"
                                label="Address"
                                variant="outlined"
                                fullWidth
                                {...register("frm_address", { required: true })}
                                error={Boolean(errors.frm_address)}
                                helperText={errors.frm_address && <ErrorMsg errMsg={errors.frm_address.message} />}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box>
                            <TextField
                                id="frm_famous_placed"
                                label="Famous Place"
                                variant="outlined"
                                fullWidth
                                {...register("frm_famous_placed", { required: true })}
                                error={Boolean(errors.frm_famous_placed)}
                                helperText={errors.frm_famous_placed && <ErrorMsg errMsg={errors.frm_famous_placed.message} />}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={count === 0}
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
                        Next
                    </Button>
                </Box>
            </form>
        </>
    )
}

export default InformationForm
