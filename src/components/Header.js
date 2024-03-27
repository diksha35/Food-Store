import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCartPlus, faCircle} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

//Header Component for Header Section
const Header=()=>{
  //1st approch by passing boolean value -> useState for  display user Login or logout
  const [isLogin, setIsLoginIn]=useState(true);
 //2nd approch by passing string
 const [btnName, setBtnName]=useState("Login");
  
 const  onlineStaus=useOnlineStatus();



    return (<>

       <nav className="navbar navbar-expand-lg navbar-light header ">
      <div className="container">
        <img className="navbar-brand logo" src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=400" alt="logo" />

       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav mx-2 ms-auto">
           <li className="nav-item active">
             <Link className="nav-link" to= "/">Home</Link>
           </li>
           <li className="nav-item active">
             <Link className="nav-link" to= "/gmart">GMart</Link>
           </li>
          <li className="nav-item">
             <Link className="nav-link" to="/about">About Us</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/contact-us">Contact Us</Link>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">Cart<FontAwesomeIcon icon={faCartShopping}/></a>
           </li>
           <li className="nav-item">
            {/*use Conditional Rendering for login and logout */}
            {/*{isLogin?(<button className="btn btn-primary" onClick={()=>setIsLoginIn(false)}>Logout</button  >):(<button className="btn btn-primary"onClick={()=>setIsLoginIn(true)} >Login</button  >)}*/}
            <button className="btn btn-primary" onClick={()=>{ btnName=="Login"?setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
           </li>

           <li className="nav-item">
             <span className="nav-link" >Status : {onlineStaus? <FontAwesomeIcon style={{color:'#0dd917'}} icon={faCircle} />:<FontAwesomeIcon  style={{color:'red'}} icon={faCircle} />}</span>
           </li>

         </ul>
       </div>

       </div>
     </nav>


    {/* <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=400" alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>

    </div> */}
    </>)
}

export default Header;