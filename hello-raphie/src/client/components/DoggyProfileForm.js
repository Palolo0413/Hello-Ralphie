import React from 'react'
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from '@material-ui/core'

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 20,
          padding: 20,
          color:'#B69594',
          backgroundColor:'#FCEFD5'
        }}
      >
        <form style={{width: '50%', color:'#B69594'}} >
          <h1 color="#B69594">Your Doggy Profile</h1>

          <FormControl margin="normal" fullWidth color="primary">
            <InputLabel htmlFor="name" color="primary">Name</InputLabel>
            <Input id="name" type="text" color="primary" />
          </FormControl>

          <FormControl margin="normal" fullWidth color="primary">
            <InputLabel htmlFor="breed" color="primary">Breed</InputLabel>
            <Input id="breed" type="text" color="primary"/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <TextField
                color="primary"
                id="birthday"
                label="Birthday"
                type="date"
                InputLabelProps={{shrink: true,}}/>
          </FormControl>

          <Button variant="contained" color="secondary" size="medium">
            Next
          </Button>
        </form>
      </div>
      </ThemeProvider>
    )
  }
}

export default DoggyProfileForm