import './Footer.css';
import footer_logo from '../../assets/images/footer_logo.png';
import Vc from '../../assets/images/icon_vkontakte.png';
import insta from '../../assets/images/icon_instagram.png';
import facebook from '../../assets/images/icon_facebook.png';
import logo_html from '../../assets/images/logo_html.png';


function Footer() {
  
  return (
    <dir className="gray">
      <div className='Footer d-flex'>
        <img src={footer_logo} alt="" />
        <div className='socMedia d-flex'>
            <a href=""><img src={Vc} alt="" /></a>
            <a href=""><img src={insta} alt="" /></a>
            <a href=""><img src={facebook} alt="" /></a>
        </div>
        <img src={logo_html} alt="" />
      </div>
    </dir>
    
  );
}

export default Footer;