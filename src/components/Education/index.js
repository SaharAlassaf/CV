import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Education = () => {
    return (
      <div className="containerComp">
            <h2 className="text-uppercase"><FontAwesomeIcon icon={faGraduationCap} className="icon"/> Education</h2>
            <hr />
            <h3>B.S. Computer Science</h3>
            <h4>Qassim University</h4>
            <p>Studied: 2015 - 2020</p>
      </div>
    )
}

export default Education
