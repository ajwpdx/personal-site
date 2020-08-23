import React, {useState} from 'react';

//components
import DarkModeSwitch from './components/DarkModeSwitch'
import Navigation from './components/Navigation'
import About from './components/About'



function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'App theme--dark' : 'App theme--light'}>
      <div className='content-container'>

      <DarkModeSwitch setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Navigation/>
      <About/>

      </div>
    </div>
  );
}

export default App;
