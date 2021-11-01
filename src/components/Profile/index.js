import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from './saharlogo.jpg'
import  './style.css'


const Profile = () => {
    return (
      <div className="containerP">
        <img src={logo} alt="logo" className="img"/>
        <h1>Sahar Alassaf</h1>
        <h3 className="jobTitle">Front End Developer</h3>
        <hr className="hrP"/>
        <ul className="contact">
            <li><FontAwesomeIcon icon={faLocationArrow} color= 'gray' className="icon"/>Ar Rass</li>
            <li><FontAwesomeIcon icon={faEnvelope} color= 'gray' className="icon"/><a href="mailto:Sahar.Hussain.elq.js@tuwaiq.edu.s">Sahar.Hussain.elq.js@tuwaiq.edu.s</a></li>
        </ul>
        <hr className="hrP"/>
        <ul className="links">
            <li><a href="https://www.linkedin.com/in/saharalassaf"><FontAwesomeIcon icon={faLinkedin} size='3x' color= 'black'/></a></li>
            <li><a href="https://github.com/SaharAlassaf"><FontAwesomeIcon icon={faGithub} size='3x' color= 'black'/></a></li>
        </ul>
      </div>
    )
}

export default Profile