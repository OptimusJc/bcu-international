import Login from './Authentication/login/Login';
import Header from './header/Header';
import SignUp from './Authentication/signup/SignUp';
import Home from './home/Home';
import Videos from './videos/Videos';
import { Router } from '@reach/router';

import Video from './videos/Video';
import Footer  from './footer/Footer';



function App() {
  return (
    <div>
      <Header/>

      <Router> 
        <Home path="/" />
        <Login path="/login" />
        <SignUp path="/signup"/>
        <Videos path="/videos" />
        <Video path="/video" />
      </Router>

      <Footer />
    </div>
  );
}



export default App;

