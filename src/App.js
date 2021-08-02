import React, {useState} from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './components/shared/header/Header';
import Container from './components/container/Container';
import Login from './components/login/Login';
import './App.css';




const App = () => {

const [isAuth, setIsAuth] = useState(false)

const handleLogin = () => {
  setIsAuth(!isAuth)
}

const [isCustomer, setIsCustomer] = useState(false);

  return (
    <div>
       <Switch>
          <Route exact path="/" render={() =>
             <Login handleLogin={handleLogin} setIsCustomer={setIsCustomer}/>
          }
          />
          <Route path="/admin" 
            render={() =>
              <React.Fragment>
                {/* <Header isAuth={isAuth} handleLogin={handleLogin}/>  */}
                <Container isAuth={isAuth} handleLogin={handleLogin} isCustomer={isCustomer}/>
            </React.Fragment>
            }
          />
        </Switch>
     
      
    </div>
  )
}

export default App
