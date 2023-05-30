import { Paper, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import accounting from "accounting"

const Results = ({url_image,name,description,price,availability}) => {
    const classes = useStyle()
    return (
    <Paper className={classes.root}>
        <div className={classes.left}>
            <img src={url_image} className={classes.image} alt={name}/>
        </div>
        <div className={classes.right}> 
            <Typography variant="h6" gutterBottom>{name}</Typography>
            <Typography variant="body1" gutterBottom>{description}</Typography>
            <Typography variant="body1" gutterBottom>Price per hour {"    "}</Typography>
            <span className={classes.number}>{accounting.formatMoney(price)}</span>
            <Typography variant="body1" gutterBottom>Available</Typography>
            <span className={classes.number}>{availability}</span>
            
        </div>
    </Paper>
  )
}

const useStyle=makeStyles((theme)=>({
    root:{
        display:"flex",
        justifyContent: "flexStart",
        margin: theme.spacing(1)
    },
    left:{
        margin:theme.spacing(2,5,5,5)
    },
    image:{
        maxWidth:"400px",
        [theme.breakpoints.down("sm")]:{
            maxWidth:"200px"
        },
        height:"auto",
        borderRadius:"10px"
    },
    number:{
      fontWeight: "1000",
      marginLeft: theme.spacing(2),
      fontSize:"1.1rem"  
    }
}))

export default Results