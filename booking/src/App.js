import Footer from "./components/Footer";
import Header from "./components/Header";
import Home  from "./components/Home";
import SearchPage from "./components/SearchPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useEffect } from "react";
import { auth } from "./firebase";
import {useStateValue} from "./StateProvider"
import Checkout from "./components/CheckOutForm/Checkout";
import {actionTypes} from "./reducer"

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  },[])
  return (
    <Router>
      <Header/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        {/* <Route path="/checkout" element={<Checkout/>}/> */}

        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
