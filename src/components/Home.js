import { CssBaseline, makeStyles } from '@material-ui/core';

import React from 'react'
import Banner from './Banner';
import Card from './Card';
import DatePicker from './DatePicker';

export const Home = () => {
  const classes = useStyle()  
  return (
    <>
        <CssBaseline/>
        <div className={classes.root}>
            <div className={classes.dates}>
                <DatePicker/>
            </div>
            <Banner/>
            <div className={classes.section}>
                <Card/>
            </div>
        </div>
    </>
  )
}

const useStyle = makeStyles((theme)=>({

}))

export default Home;