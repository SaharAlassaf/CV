import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import  './style.css'


const Skills = () => {
  const [skills] = useState (["HTML","CSS","Javascript","React","jQuery","Github","Bootstrap","Java","Photoshop","Illustrator"]);
  
  const skill = skills.map((item, i) => <li key={i} className="label" >{item}</li>);
  
  return (
      <div className="containerComp">
            <h2 className="text-uppercase"><FontAwesomeIcon icon={faCode} className="icon"/> Skills</h2>
            <hr />
            <ul>
              {skill}
            </ul>
      </div>
    )
}

export default Skills