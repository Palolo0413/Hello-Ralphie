import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'



const useStyles = makeStyles(theme => ({
  toolbar: {
    height:200,
    backgroundColor:'#FCEFD5'
  },
  image: {
    width: 500,
    position: 'left'
  }
}))


export function Header() {
  const classes = useStyles()


  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
         <img alt=' ' src='doggyDataNav.png' className={classes.image} />
      </Toolbar>
      
    </React.Fragment>
  )
}


export default Header