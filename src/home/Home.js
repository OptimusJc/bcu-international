import Login from '../Authentication/login/Login'
import SignUp from '../Authentication/signup/SignUp'

const Home = () => {
  return(
    <div>
      <Login/>
      <SignUp/>
    </div>
  );
}

export default Home;