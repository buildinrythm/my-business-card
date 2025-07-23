import Mailimg from '../assets/Mail.svg';   
import LinkedinImg from '../assets/linkedin.svg';


export default function Info() {
  return (
    <>
    <div className="card-info">
   <h1 className="name">Joshua Agbor</h1>
   <h2 className="job-title">Frontend Developer</h2>
   <p className="website-link">joshuaagbor.dev</p>
   </div>
   <div className="card-buttons">
   <a href="mailto:joshuaagbor@gmail.com"><button className="email-button"><img src={Mailimg} alt="Mail"></img>Email</button></a>
   <a href="https://www.linkedin.com/in/joshua-agbor-b06a37199" target="_blank"
  rel="noopener noreferrer"><button className="linkedin-button"><img src={LinkedinImg} alt="Linkedinlogo"></img>LinkedIn</button></a>
   </div>
   <div className="About">  
    <h3>About</h3>
    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
   </div>
   <div className="Interests">
    <h3>Interests</h3>
    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
   </div>
  </>
)
}
