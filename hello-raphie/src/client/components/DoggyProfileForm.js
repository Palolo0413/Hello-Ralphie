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

  constructor(props){
    super (props)
    this.state={
      name:'',
      breed:'',
      birthday:''
    }
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()

  //   const birthday = new Date(this.state.date)
  //   let newDoggy = {
  //     name: this.state.name,
  //     breed: this.state.breed,
  //     birthday: birthday,
  //   }
    
  //   this.props.createDoggy(newDoggy)
  // }
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
        <form style={{width: '70%', height:'99%', color:'#B69594'}} >
          {/* <h1 color="#B69594">Your Doggy Profile</h1> */}
          <Typography >
          <Box  fontSize={30} letterSpacing={6} textAlign="left" fontWeight="fontWeightBold" margin={0} paddingBottom={6}>
          Your Doggy Profile
          </Box>
          </Typography >

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
      
          <Button variant="contained" color="secondary" size="large">
          <Box display="flex-end" textAlign="right">
            Next
          </Box>
          </Button>
          
        </form>
      </div>
      </Grid>
      <Grid xs='12' sm='4' color='primary'>
      <Grid container direction="column" justify="center" alignItems="center">
      <Grid>
      <img alt=' ' src='DoggoBig.png' display='inline' height='180px' padding={20}/>
      </Grid>
      <Grid container direction="column" justify="center" alignItems="center">
      <Typography >
      <Box letterSpacing={6} m={1} textAlign="center">
       FIDO
      </Box>
      <Box letterSpacing={6} m={1} textAlign="center">
       Golden Lab
      </Box>
      <Box letterSpacing={6} m={1} textAlign="center">
       Five Years Old
      </Box>
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