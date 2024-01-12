import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Events = () => <div>Events</div>;
const Option1 = () => <div>Option 1</div>;
const Option2 = () => <div>Option 2</div>;
const Option3 = () => <div>Option 3</div>;

class NavigationBar extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li className="dropdown">
                                <Link to="/more" className="dropbtn">More</Link>
                                <div className="dropdown-content">
                                    <Link to="/option1">Option 1</Link>
                                    <Link to="/option2">Option 2</Link>
                                    <Link to="/option3">Option 3</Link>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/option1" element={<Option1 />} />
                        <Route path="/option2" element={<Option2 />} />
                        <Route path="/option3" element={<Option3 />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default NavigationBar;
