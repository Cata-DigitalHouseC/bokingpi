import { Chip, Slider, Typography, makeStyles } from '@material-ui/core'
import mockData,{chips} from "../mockData"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Results from "./Results"
import {useState} from 'react';
import {useSelector} from "react-redux"
import {selectStart} from "../features/startSlice"
import {selectEnd} from "../features/endSlice"
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import mockCategories from '../mockCategories'

const SearchPage = () => {
    const classes = useStyle()
    const [value, setValue]=useState(400)
    const start = useSelector(selectStart);
    const end = useSelector(selectEnd);


    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    const [catSelected, setCatSelected]=useState(1);
    const changeCatState= e=>{
        setCatSelected(e.taget.value);
    }
  return (
    <div className={classes.root}>
        <Typography variant="h5" gutterBottom>
            Available Spaces
        </Typography>
        <div>
            {
                chips.map(data=>{
                    let icon = <HighlightOffIcon/>
                    return(
                        <Chip label = {data.label} key={data.key} icon={icon} className = {classes.chip}/>
                    )
                })
            }
        </div>
        <div className={classes.selector}>
            <Typography gutterBottom>Prices</Typography>
            <Slider getAriaValueText={(e)=>e.target.value }
                onChange={handleChange}
                aria-label="Always visible"
                min={100}
                max={400}
                valueLabelDisplay="on"
            />     
        </div>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={mockCategories[0].title}
                label="Category"
                onChange={handleChange}
            >
                {
                mockCategories
                    .map((cat)=>{
                        <MenuItem value={cat.id_category} checked = {catSelected==cat.id_category?true:false} onChange={changeCatState}>{cat.title}</MenuItem>
                    })    
                }
            </Select>
        </FormControl>
        {
            mockData
                    .filter((data)=>data.category_id==catSelected)
                    .filter((data)=>data.price<=value)
                    .filter((data)=> end < data.notAvailableStart || start > data.notAvailableEnd)
                    .map(({url_image,name,description,price,availability},index)=>{
                        <Results 
                            key={index}
                            url_image={url_image}
                            name={name}
                            description={description}
                            price={price}
                            availability={availability}
                        />
                       
                    })
        }

    </div>
  )
}

const useStyle=makeStyles((theme)=>({
    root:{},
    chips:{
        padding:theme.spacing(1),
    },
    chip:{
        padding:theme.spacing(1),
    },
    selector:{
        width:"300px",
        marginLeft: theme.spacing(3)
    }

}))

export default SearchPage