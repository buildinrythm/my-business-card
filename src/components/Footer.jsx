import Twittericon from '../assets/Twitter.svg';
import Facebookicon from '../assets/Facebook.svg';
import Instagramicon from '../assets/Instagram.svg';
import Githubicon from '../assets/Github.svg';

export default function Footer() {
  return (
    <div className="footer-icon-container">
    <img src={Twittericon} alt="twitter icon" className="footer-icon"/>
    <img src={Facebookicon} alt="facebook icon" className="footer-icon" />
    <img src={Instagramicon} alt="instagram icon" className="footer-icon" />
    <img src={Githubicon} alt="github icon" className="footer-icon" />
    </div>
)
}