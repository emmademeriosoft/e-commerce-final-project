import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./Screens/Cart";
import Home from "./Screens/Home";
import Shop from "./Screens/Shop";


const App = () => {
    return (
        <Router >
            <div className="App" >
                <Navbar />
                <Switch >
                    < Route exact path="/" component={Home} />
                    < Route path="/shop" component={Shop} />
                    <Route path="/cart" component={Cart} />
                </Switch >
                <Footer />
            </div>

        </Router >
    );
}

export default App;