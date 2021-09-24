import Login from './Authentication/login/Login';
import Header from './header/Header';
import SignUp from './Authentication/signup/SignUp';
import Home from './home/Home'
import Videos from './videos/Videos'
import { Router } from '@reach/router';



function App() {
  return (
    <div>
      <Header/>

      <Router> 
        <Home path="/" />
        <Login path="/login" />
        <SignUp path="/signup"/>
        <Videos path="/videos" />
      </Router>
    </div>
  );
}



export default App;

