import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
      <div className="containerComp">
      <h2 className="text-uppercase"><FontAwesomeIcon icon={faUser} className="icon"/> About</h2>
      <hr />
      <p>My goal is to obtain a dynamic, challenging opportunity that contributes to the outstanding success of the company. I enjoy creative problem solving and getting exposure on multiple projects.</p>
      </div>
    )
}

export default About