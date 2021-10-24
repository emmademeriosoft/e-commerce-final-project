import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./Screens/Cart";
import CheckOut from "./Screens/CheckOut";
import Home from "./Screens/Home";
import Shop from "./Screens/Shop";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';



const App = () => {
    return (
        <Router >
            <div className="App" >
                <Navbar />
                <Switch >
                    < Route exact path="/" component={Home} />
                    < Route path="/shop/:id" component={Shop} />
                    < Route path="/cart" component={Cart} />
                    < Route path="/checkout" component={CheckOut} />
                </Switch >
                <Footer />
            </div>

        </Router >
    );
}

export default App;