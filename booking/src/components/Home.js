import { Button, CssBaseline, Grid, makeStyles } from '@material-ui/core';
import { useState } from 'react'
import Banner from './Banner';
import Card from './Card';
import DatePicker from './DatePicker';
import mockData from "../mockData"

export const Home = () => {
  const classes = useStyle()  ;
  const [showDates, setShowDates] = useState(false)
  return (
    <>
        <CssBaseline/>
        <div className={classes.root}>
            <div className={classes.dates}>
                <Button onClick={()=>setShowDates(!showDates)}>
                    {
                        showDates ? "Hide":"Search dates"
                    }
                </Button>
            </div>
            {
                    showDates && <DatePicker/>
            }
            <Banner/>
            <Grid container className={classes.section} spacing={3}>
                {
                    mockData.map(({url_image, title, description}, index)=>(
                        <Grid item sm= "6" xs="12" md="4" lg="3">
                            <Card url_image={url_image} title={title} description={description} key={index}/>
                        </Grid>
                    ))
                }
                <Card/>
            </Grid>
        </div>
    </>
  )
}

const useStyle = makeStyles((theme)=>({
    root:{
       display:"flex",
       flexDirection:"column" ,
       margin:theme.spacing(1)
    },
    dates:{
        display:"flex",
        flexDirection:"column",
        "& button":{
            border: "1px solid #ccc",
            backgroundColor:"#fff",
            color:"rgba(255,103,31,0.4)",
            textTransform: "inherit",
            fontSize: "1.2rem",
            fontWeight: "bold"
        },
        "& button:hover":{
            backgroundColor: "rgba(255,103,31,0.4)",
            color:"#fff"
        }
    }

}))

export default Home;