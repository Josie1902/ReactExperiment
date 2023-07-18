'use client'
import {Typography} from '@mui/material'
import { Grid } from '@mui/material'
import Navbar from './navbar'

import Options from "./options"

export default function Home() {
  return (
    <body>
      <Navbar></Navbar>
      <Grid container style={{width:"100vw",height:"100vh",justifyContent:"center",alignItems:"center"}}>
        <Grid item={true} xs={8}
        direction="column">
          <Typography variant="h4" fontWeight="bold" align='center' margin="0 0 1ch 0">What can we help you with?</Typography>
          <Options/>
        </Grid>
      </Grid>
    </body>
  )
}




