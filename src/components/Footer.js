import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faHeader, faHeart} from '@fortawesome/free-solid-svg-icons';


// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer navbar-fixed-bottom ">
        Created By
        <FontAwesomeIcon style={{color: 'red'}} icon={faHeart}/>
        <a href="https://www.linkedin.com/in/" target="_blank">
        Diksha
        </a>
        <FontAwesomeIcon style={{padding:" 0 5px 0"}} icon={faCopyright}/>
        {year}
        <strong>
          Food<span>Store</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;