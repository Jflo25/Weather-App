import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import City from "./pages/City/City";

export default function App() {
  // Initial cities array
  const [cities, setCities] = useState(["london", "paris"]);
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to add a city to the list
  const addCity = (newCity) => {
    if (!cities.includes(newCity)) {
      setCities([...cities, newCity]);
    }
  };

  // Function to remove a city from the list
  const removeCity = (cityToRemove) => {
    setCities(cities.filter((city) => city !== cityToRemove));
  };
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            {cities.map((city) => (
              <li>
                <Link to={`/city/${city}`}>{city}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/city/:cityId" component={City} />
        </Switch>
      </div>
    </Router>
  );
}
