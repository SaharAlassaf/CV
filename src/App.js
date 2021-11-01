import React  from 'react'
import Profile from './components/Profile'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Education from './components/Education'
import "./App.css"

const App = () => {
    return (
      <div>
        <div className="container">
          <aside>
            <div className="aside">
              <Profile />
            </div>
          </aside>
          <main>
            <div className="main">
              <About />
              <Work />
              <Skills />
              <Education />
            </div>
          </main>
        </div>
    </div>
    )
}

export default App