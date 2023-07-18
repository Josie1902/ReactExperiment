'use client'
import * as React from 'react'
import { Typography, Grid,Box,Paper,Stack } from "@mui/material"
import { createTheme, ThemeProvider,styled } from '@mui/material/styles';
import Navbar from "../navbar"
import SplitButton from './splitbutton';
import ToggleView from './toggleview';
import SearchField from './search';

const theme = createTheme({
    palette: {
      primary: {
        main: '#777777',
      },
      secondary: {
        main: '#6C63FF',
      },
    },
  });
  

export default function TrackCases(){
    return(
        <body>
            <ThemeProvider theme={theme}>
                <Grid container space={2}>
                    <Grid item xs={2}>
                        <Navbar></Navbar>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography margin="1ch 0 0.5ch 0" variant="h4">Service Tickets</Typography>
                        <Grid container direction={{ xs: 'column', sm: 'column', lg: 'row' }} spacing={{ xs: 1, sm: 1, lg: 0 }}>
                            <Grid item xs={7}>
                                <ToggleView />
                            </Grid>
                            <Grid item container xs={5}>
                                <Grid item marginRight={2}>
                                    <SplitButton />
                                </Grid>
                                <Grid item>
                                    <SearchField />
                                </Grid>
                             </Grid>
                        </Grid>
                        <Stack spacing={2} sx={{width: 250, height: "80vh", backgroundColor: '#ECECEC', margin:"1.5ch 0 0 0", borderRadius:1, display:"flex", alignItems:"center",flexDirection:"column"}}>
                            <Typography variant='subtitle2' margin="1ch 0 0 0">Electricity</Typography>
                            <Box sx={{display: 'flex', flexWrap: 'wrap', '& > :not(style)': {width: 220,height: 160,}}}>
                                <Paper />
                            </Box>
                            <Box sx={{display: 'flex', flexWrap: 'wrap',  '& > :not(style)': {width: 220,height: 160,}}}>
                                <Paper />
                            </Box>
                            <Box sx={{display: 'flex', flexWrap: 'wrap',  '& > :not(style)': {width: 220,height: 160,}}}>
                                <Paper />
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </body>
    )
}