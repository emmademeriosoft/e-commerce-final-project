import { Box, Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import React from 'react'

const InformationForm = () => {
    return (
        <>
            <Grid container spacing={2}>

                <Grid item xs={4}>
                    <Box>
                        <TextField id="outlined-basic" label="outlined" variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <TextField id="outlined-basic" label="outlined" variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <TextField id="outlined-basic" label="outlined" variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <TextField id="outlined-basic" label="outlined" variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <TextField id="outlined-basic" label="outlined" variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <TextField id="outlined-basic" label="outlined" variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <TextField id="outlined-basic" label="outlined" variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <TextField id="outlined-basic" label="outlined" variant="outlined" fullWidth />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default InformationForm
