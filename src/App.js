
import './App.css';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
//import {
  //BrowserRouter as Router,
  //Switch,
  //Route,
  //Link
//} from "react-router-dom";
function App() {
  
  const [mode, setmode] = useState('light');
  const [alert, setalert]=useState(null);

  const showalert=(message,type)=>{
     setalert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setalert(null);
     }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled", "success");
      document.title="Textutils - Dark  mode";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
      document.title="Textutils - Light mode";
    }
  }

  return (
  <>
  {/* <Router>   */}
  <Navbar title="First_React_Project"  mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-3'>
 {/* <Switch> */}
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          {/* <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/"> */}
            <Textfrom showalert={showalert} heading="Try TextUtils - word counter, character counter" mode={mode}/>
          {/* </Route>
    </Switch>
     */}
 
     
    
    

  </div>
  {/* </*Router> */}
  </>

  );
}

export default App;
