import { Box, Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import React from 'react'
import { useFormContext, Controller } from "react-hook-form";




const InformationForm = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <>
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
                            helperText={errors.frm_fname?.message}
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
                            helperText={errors.frm_mname?.message}
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
                            helperText={errors.frm_lname?.message}
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
                            helperText={errors.frm_contact_no?.message}
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
                            helperText={errors.frm_address?.message}
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
                            helperText={errors.frm_famous_placed?.message}
                        />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default InformationForm
