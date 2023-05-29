import React from 'react'
import {useState} from 'react'
import {AppBar, InputBase, Toolbar, makeStyles, Typography, Avatar, IconButton, Drawer, List, ListItem} from '@material-ui/core'
import headerImg from "../imgs/img1.jpeg"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import zIndex from '@material-ui/core/styles/zIndex';


const Header = () => {
  const [tablet, setTablet] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false)
  const classes = useStyle(); 

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
            <IconButton {...{edge:"start",color:"#ccc","aria-labnel":"menu","aria-hashpopup":"true",onClick:handleDrawerOpen}}>
                <MenuIcon fontSize="large"/>
            </IconButton>
            <Drawer {...{anchor:"left",open:drawerOpen, onClose:handleDrawerClose}}>
                <div>{getDrawerChoices()}</div>
            </Drawer>
            <img src={headerImg} className={classes.logo} alt="logo"/>
            <div className = {classes.right} >
                <Typography>Sign in </Typography>
                <Avatar className={classes.avatar}></Avatar>
            </div>
        </Toolbar>
    )
  }

  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
        <img src={headerImg} className={classes.logo}/>
        <div className={classes.center}>
            <InputBase fullWidth placeholder = "Search here.." inputProps={{className: classes.input}}/>
            <SearchIcon/>
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