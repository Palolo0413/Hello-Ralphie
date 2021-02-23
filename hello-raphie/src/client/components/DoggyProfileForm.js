import React from 'react'
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  Grid,
  Box,
  Typography
} from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'


let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#B69594',
      contrastText:'#fff',
    },
    secondary: {
      main: '#553636',
      contrastText: '#fff',
    },
  },
});
theme = responsiveFontSizes(theme)


class DoggyProfileForm extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <Grid container spacing={16} color='primary'>
      <Grid item xs='12' sm='8' display='inline' coor='primary' >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 10,
          padding: 10,
          color:'#B69594',
          backgroundColor:'#FCEFD5'
        }}
      >
        <form style={{width: '80%', height:'99%', color:'#B69594'}} >
          <h1 color="#B69594">Your Doggy Profile</h1>

          <FormControl margin="normal" fullWidth color="primary" focused='true'>
            <InputLabel htmlFor="name" color="primary">Name</InputLabel>
            <Input id="name" type="text" color="primary" />
          </FormControl>

          <FormControl margin="normal" fullWidth color="primary" focused='true'>
            <InputLabel htmlFor="breed" color="primary">Breed</InputLabel>
            <Input id="breed" type="text" color="primary"/>
          </FormControl>

          <FormControl margin="normal" fullWidth color="primary" focused='true' variant='outlined'>
          
          <TextField
                variant='outlined'
                variant='filled'
                focused='true'
                backgroundColor='primary'
                color="primary"
                id="birthday"
                label="Birthday"
                type="date"
                InputLabelProps={{shrink: true,}}
                InputProps={{color:"primary", backgroundColor:'primary' }}/>
      </FormControl>
      <Box 
        display="right" 
        alignItems="right"
        justifyContent="center"
        bgcolor="primary"
        paddingTop={4}
      >
          <Button variant="contained" color="secondary" size="large" textAlign="center" >
            Next
          </Button>
          </Box>
        </form>
      </div>
      </Grid>
      <Grid xs='12' sm='4' color='primary'>
      <Grid container direction="column" justify="center" alignItems="center">
      <Grid>
      <img alt=' ' src='DoggoBig.png' display='inline' height='150px' padding={20}/>
      </Grid>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid>
      <Typography variant="h4">
       FIDO
      </Typography >
      </Grid>
      <Typography variant="h5">
       Golden Lab
      </Typography>
      <Typography variant="h5">
       Five Years Old
      </Typography>
      </Grid>
      </Grid>
      </Grid>
      </Grid>
      </ThemeProvider>
    )
  }
}

export default DoggyProfileForm