import { Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const Card = ({url_image, title, description}) => {
  const classes =  useStyle(); 
  return (
    <div className={classes.root}>
        <figure className={classes.imageWrapper}>
            <img className={classes.media} src={url_image} alt={title}/>

        </figure>
        <Typography variant="h5" color="textPrimary">{title}</Typography>
        <Typography variant="h6" color="textSecondary">{description}</Typography>
    </div>
  )
}

const useStyle = makeStyles((theme) => ({
    root:{
        margin:theme.spacing(4,0,2,0),
        [theme.breakpoints.down("sm")]:{
            "& h6":{
                wordWrap:"brak-word"
            }
        }

    },
    imageWrapper:{
        overflow:"hidden"
    },
    media:{
        height: "400px",
        width:"600px",
        objectFit:"cover",
        transform:"scale(1.1)",
        webkitTransform:"scale(1.1)",
        [theme.breakpoints.down("sm")]:{
            height:"200px",
            width:"300px"
        },
        "&:hover":{
            transform:"scale(1)",
            webkitTransform:"scale(1.1)",
        },
        transition:"0.4s ease-in-out",
        WebkitTransition:"0.4s ease-in-out",
    }
}))

export default Card