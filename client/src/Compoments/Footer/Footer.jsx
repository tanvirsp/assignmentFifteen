import './Footer.css';
import logo from '../../assets/images/logo-white.png'
const Footer = () => {
    return (
        <footer className='container'>
            <img src={logo} alt="" />
            <p>All copyright reseved to Education</p>
        </footer>
    );
};

export default Footer;