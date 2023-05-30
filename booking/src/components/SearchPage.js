import { Chip, Slider, Typography, makeStyles } from '@material-ui/core'
import mockData,{chips} from "../mockData"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const SearchPage = () => {
    const classes = useStyle()
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
            <Slider value= onChange={}
                aria-labelledby='="continuos-slider'
                min={100}
                max={400}
                valueLabelDisplay="auto"
            />
            
        </div>

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