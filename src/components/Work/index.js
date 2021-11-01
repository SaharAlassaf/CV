import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

const Work = () => {
    return (
      <div className="containerComp">
        <h2 className="text-uppercase"><FontAwesomeIcon icon={faBuilding} className="icon"/> Work experience</h2>
        <hr />
      </div>
    )
}

export default Work