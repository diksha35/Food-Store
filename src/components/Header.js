import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

//Header Component for Header Section
const Header=()=>{
  //1st approch by passing boolean value -> useState for  display user Login or logout
  const [isLogin, setIsLoginIn]=useState(true);
 //2nd approch by passing string
 const [btnName, setBtnName]=useState("Login");

    return (<>

       <nav class="navbar navbar-expand-lg navbar-light header ">
      <div class="container">
        <img className="navbar-brand logo" src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=400" alt="logo" />

       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav mx-2 ms-auto">
           <li class="nav-item active">
             <a class="nav-link" href="#">Home</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">About Us</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Contact Us</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Cart<FontAwesomeIcon icon={faCartShopping}/></a>
           </li>
           <li class="nav-item">
            {/*use Conditional Rendering for login and logout */}
            {/*{isLogin?(<button className="btn btn-primary" onClick={()=>setIsLoginIn(false)}>Logout</button  >):(<button className="btn btn-primary"onClick={()=>setIsLoginIn(true)} >Login</button  >)}*/}
            <button className="btn btn-primary" onClick={()=>{ btnName=="Login"?setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
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