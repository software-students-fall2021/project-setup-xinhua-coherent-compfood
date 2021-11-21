import axios from "axios";
import {useState, useEffect} from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Restaurant from "./Restaurant";

let Home_screen = (props) => {
	//MAGIC 10-12 restaurants
	let num_restaurants = 10 + Math.floor(Math.random() * 3);

	let [restaurants, set_restaurants] = useState([]);

	useEffect(
		() => {
			axios(`${process.env.REACT_APP_api_base_url}/restaurants?rows=${num_restaurants}`)
				.then((resp) => {
					let data = resp.data;
					let temp = [];

					for (let it of data){
						console.log(it);
						temp.push(<Restaurant name={it.name} description={it.description} hours={`${it.hour_start} - ${it.hour_end}`} location={it.location} />);
					}
					set_restaurants(temp);
				})
				.catch((ex) => {
					alert(`Something went wrong!: ${ex}`);
				})
			;
		},
		[]
	);

	return (
		<div>
		<p>Home screen</p>
		{restaurants}
		</div>
	);
};

export default Home_screen;