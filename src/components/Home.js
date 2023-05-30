import { Button, CssBaseline, makeStyles } from '@material-ui/core';
import { useState } from 'react'
import Banner from './Banner';
import Card from './Card';
import DatePicker from './DatePicker';

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
            <div className={classes.section}>
                <Card/>
            </div>
        </div>
    </>
  )
}

const useStyle = makeStyles((theme)=>({
    root:{
       display:"flex",
       flexDirection:"column" 
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