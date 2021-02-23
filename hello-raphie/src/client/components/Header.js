import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
// import Typography from '@material-ui/core/Typography'
// import Link from '@material-ui/core/Link'
// import { yellow } from '@material-ui/core/colors'
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
// import Badge from '@material-ui/core/Badge'
// import {Menu} from './index'


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

// const StyledBadge = withStyles(theme => ({
//   badge: {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: '0 4px'
//   }
// }))(Badge)

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