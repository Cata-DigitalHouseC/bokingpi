import {useState, useEffect} from 'react'
import {AppBar, InputBase, Toolbar, makeStyles, Typography, Avatar, IconButton, Drawer, List, ListItem, Button} from '@material-ui/core'
import headerImg from "../imgs/img1.jpeg"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import zIndex from '@material-ui/core/styles/zIndex';
import {Link} from "react-router-dom"
import {useStateValue} from "../StateProvider"
import {useNavigate} from "rect-router-dom"


const Header = () => {
  const [tablet, setTablet] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false)
  const classes = useStyle(); 
  const [{user}, dispatch] = useStateValue();
  history=useNavigate();

  const handleAuth = () =>{
    if(user){
        auth.signOut();
        dispatch({
            type: actionTypes.SET_USER,
            user: null,
        })
        history.push("/")
    }
  }

  useEffect(()=>{
    const responsiveness = () => window.innerWidth < 900 ? setTablet(true):setTablet(false)
    responsiveness();
    window.addEventListener("resize", ()=>responsiveness())
  },[tablet])

  const displayTablet = () => {
    const handleDrawerOpen = () => {
        setDrawerOpen(true)
    }

    const handleDrawerClose = () =>{
        setDrawerOpen(false)
    }

    const headersData=["My account", "Previous bookings", "Log out"]
    const getDrawerChoices = () =>{
        return headersData.map((data)=>{
            return(
                <List>
                    <ListItem>{data}</ListItem>
                </List>
            )
        })
    }
    return(
        <Toolbar className={classes.toolbar}>
            <IconButton {...{edge:"start",color:"primary","aria-label":"menu","aria-haspopup":"true",onClick:handleDrawerOpen}}>
                <MenuIcon fontSize="large"/>
            </IconButton>
            <Drawer {...{anchor:"left",open:drawerOpen, onClose:handleDrawerClose}}>
                <div>{getDrawerChoices()}</div>
            </Drawer>
            <Link to="/"><img src={headerImg} className={classes.logo}/></Link>
            <div className = {classes.right} >
                <Link to="/signin">
                <Button variant='outlined'>
                    <Typography>Sign in </Typography>
                    <Avatar className={classes.avatar}></Avatar>
                </Button>
                </Link>
            </div>
        </Toolbar>
    )
  }

  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
        <Link to="/"><img src={headerImg} className={classes.logo}/></Link>
        <div className={classes.center}>
            <InputBase fullWidth placeholder = "Search here.." inputProps={{className: classes.input}}/>
            <SearchIcon/>
        </div>
        <div className = {classes.right} >
            <Typography variant="h6" color="textPrimary" component="p">
                Hello {user ? user.name: "Guest"}
            </Typography>
            <Button variant="outlined" onClick={handleAuth}>
            <strong>{user ? "Sign Out" : "Sign In" } </strong>
            </Button>
            <Avatar className={classes.avatar}></Avatar>
        </div>
        
    </Toolbar>
  )
  

  return (
    <AppBar className={classes.root}>
        {
            tablet ? displayTablet() : displayDesktop()
        }

    </AppBar>
  )
}

const useStyle= makeStyles((theme) =>({
    root:{
        position:"sticky",
        top:0,
        backgroundColor:"#333",
        zIndex:99,
        width:"100vw"
    },
    toolbar:{
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        height:"100px"

    },
    logo:{
        height: "70px",
        margin: theme.spacing(1,0,0,2),
        objectFit: "contain",

    },
    center:{
        display:"flex",
        alignItems:"center",
        padding: theme.spacing(1),
        minWidth: "300px",
        border: "1px solid lightgray",
        margin: theme.spacing(1),
        borderRadius:"700px"

    },
    input:{
        fontSize: "1.5rem",
        padding: theme.spacing(1,5,1,5),
        color:"#fff"
        
    },
    right:{
        color:"#fff",
        display:"flex",
        alignItems:"center",
        marginLeft: theme.spacing(2),
        minWidth: "150px",
    },
    avatar:{
        marginLeft:theme.spacing(2)
    }
}))

export default Header