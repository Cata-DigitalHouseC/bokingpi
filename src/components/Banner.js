import { Button, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import backImg from "../imgs/img1.jpeg"

const Banner = () => {
   const classes=useStyle(); 
  return (   
    <div className={classes.root}>
        <div className={classes.info}>
            <Typography variant="h2">Plan your journey!!..</Typography>
            <Button variant = "contained">Check our space</Button>
        </div>
    </div>
  )
  }
const useStyle = makeStyles((theme)=>({
    root:{
        height:"80vh",
        position:"relative",
        backgroundImage: `url(${backImg})`,
        backgroundPosition:"center",
        backgroundSize:"cover"
    },
    info:{
        backgroundColor:"#000",
        color:"#fff",
        width:"350px",
        padding:theme.spacing(2),
        "& h2":{
            marginBottom:theme.spacing(2)
        },
        "& button":{
            backgroundColor:"rgba(255,103,31)",
            color:"#fff",
            textTransform:"inherit",
            fontSize:"1.2rem",
            fontWeight:"bold"
        },
        "& button:hover":{
            backgroundColor:"#fff",
            color: "rgba(255,103,31)"
        }

    }
}))

export default Banner