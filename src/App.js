import React,{useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
   useParams
} from "react-router-dom";
import "./App.css"
import c1 from "./images/c1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])
  return (
    <div className="back">
   <Router>
     <nav className="nav">
     <Link to="/"><button> <h3 className="txt" > Home </h3> </button></Link> 
     &nbsp;  &nbsp;  
     <Link to="ShoePage"><button> <h3 className="txt" > Products </h3> </button></Link> 
     &nbsp;  &nbsp;  
     <Link to="Cart"><button > <h3 className="txt">Cart </h3> </button></Link> 
     </nav>
     <div className="logo" data-aos="fade"></div>
     <hr/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="Cart" element={<Cart/>}/>
       <Route path="ShoePage" element={<ShoePage/>}>
        <Route path="/" element={<ShoeIndex/>}/>
        <Route path=":title" element={<ShoeDetails/>}/>
         </Route>
     </Routes>
   </Router>
   
   </div>
  );
}




function Home() {
  return (
      <div>
          <div className="im" data-aos="fade">
   </div>
   <div className="main"  data-aos="zoom-in" >
    <center > <h1>SHOE STORE</h1>
     <h5>I'm not afraid of heights, have you seen my shoes?</h5>
     <Link to="ShoePage"><button className="homebutton"> <h3 className="txt">Visit Our Products</h3> </button></Link> 
     </center>
   </div>
      </div>
  )
}
function ShoePage () {
  return (
      <div className="back">
          <Outlet/>
      </div>
  )
}
function ShoeIndex () {
  return (
      <div className="box" data-aos="fade-up">
          {Object.entries(shoes).map(([title,{name,img}])=>(
            <div key={title}>
              <Link to={`/ShoePage/${title}`}>
               <center> <h5>{name}</h5> </center>
               <center><img src={img} alt={img} width="220" height="220"/></center> 
              </Link>

               <div>
                 <center>  <Link to="Cart"><button className="cartbutton"> 
                 <img src={c1} width="30" height="30" alt={"Loading..."}/> </button></Link> </center>
               </div>
       </div>
          ))}
      </div>
  )
}
function ShoeDetails (){
const {title} = useParams();
const shoe = shoes[title];
if (!shoe){
  return (<div><h2 className="cart">Product Not Found!</h2>
    <div className="cartimage" data-aos="fade">
       </div>
  </div>);
}
const {name,img} = shoe;
    return (
        <div className="shoedetail">
       <center> 
         <h2>{name}</h2>
        <img src={img} alt={img} width="400" height="400"/>
        </center>
        </div>
    )
  
}

function Cart (){
      return (
        <div>
      <div className="cart">
       <center><h2 className="txt">Products in Cart</h2></center> 
       </div>

       <div className="cartimage" data-aos="fade">
       </div>
       </div>  
          );
  }
const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },

//--------------------------------------------------------------------------------------------------

  "air blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "j70-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },

  //--------------------------------------------------------------------------------------------------

  "airforce blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "joker-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },

  //--------------------------------------------------------------------------------------------------

  "soldier-run": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "Atheler": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
};


 export default App;
