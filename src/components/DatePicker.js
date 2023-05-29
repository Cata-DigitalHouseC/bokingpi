import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'
import {DateRangePicker} from 'react-date-range'
import { makeStyles } from '@material-ui/core';


const selectionRange = {
    startDate: new Date(2023,0,1),
    endDate: new Date(2023,0,10),
    key:"selection"
}
const DatePicker = () => {
  const classes = useStyle();
  const handleSelect = () => {}  
  return (
    <div className = {classes.root}>
        <DateRangePicker ranges={[selectionRange]}
            onChange={handleSelect}
        />
    </div>
  )
}

const useStyle=makeStyles((theme)=>({
    root: {
        position:"absolute",
        top:"17vh",
        left:"30vh",
        [theme.breakpoints.down("sm")]:{
            top:"16vh",
            left:0
        }
    }
}))

export default DatePicker