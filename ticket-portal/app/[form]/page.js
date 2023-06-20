'use client'
import {Typography} from '@mui/material'
import {Box} from '@mui/material'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'

export default async function OptionDetail(params){
    const form = params["form"]
    return(
        <body>
            <Typography variant="h4" fontWeight="bold" align='center' margin="5ch 0 0 0">{form}</Typography>
            <Typography variant="overline" align='center' display="block" gutterBottom>
            ServiceRequestID: SR00001
            </Typography>
            <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
                <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"/>
            </Box>
            <Button 
            href="/"
            variant="contained" 
            style={{borderRadius: 15,
            backgroundColor: "#38BC3B",
            padding:"12px 28px", margin:"40px 0 0 0"}}>
                Submit
            </Button>
        </body>
    )
}