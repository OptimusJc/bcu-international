import { Router } from "@reach/router";

import Login from "./Authentication/login/Login";
import Header from "./header/Header";
import SignUp from "./Authentication/signup/SignUp";
import Home from "./home/Home";
import Videos from "./videos/Videos";
import Footer from "./footer/Footer";
import Radio from "./radio/Radio";
import Video from "./videos/Video";
import Podcasts from "./podcasts/Podcasts";
import Television from "./television/Television";

function App() {
    return (
        <div className="container-fluid">
            <Header />

            <Router>
                <Home path="/" />
                <Login path="/login" />
                <SignUp path="/signup" />
                <Videos path="/videos" />
                <Video path="/video" />
                <Podcasts path="/podcasts" />
                <Radio path="/radio" />
                <Television path="/television" />
            </Router>
            <Footer />
        </div>
    );
}

export default App;
