import { Chip, Slider, Typography, makeStyles } from '@material-ui/core'
import mockData,{chips} from "../mockData"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Results from "./Results"
import { useState } from 'react';

const SearchPage = () => {
    const classes = useStyle()
    const [value, setValue]=useState(400)

    const handleChange = (newValue) =>{
        setValue(newValue)
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
            <Slider value={value} 
                onChange={handleChange}
                aria-labelledby='continuos-slider'
                min={100}
                max={400}
                valueLabelDisplay="auto"
            />     
        </div>
        {
            mockData
                    .filter((data)=>data.cat=="room")
                    .filter((data)=>data.price<=value)
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