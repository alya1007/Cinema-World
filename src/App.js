import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const apiUrl = "http://www.omdbapi.com?apikey=a268c3c2";

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const searchMovies = async (title) => {
		const response = await fetch(`${apiUrl}&s=${title}`);
		const data = await response.json();

		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies("Breaking bad");
	}, []);

	return (
		<div className="app">
			<div className="header-container">
				<div className="header-container-info">
					<h1>Cinema World</h1>
                    <h3>Lorem ipsum dolor consectetur adipisicing elit, sed do eiusmod tempor incididunt labore etolore magna aliqua enim minim veniam quis.</h3>

					<div className="search">
						<input
							placeholder="Search for movie..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<img
							src={SearchIcon}
							alt="search"
							onClick={() => {
								searchMovies(searchTerm);
							}}
						/>
					</div>
				</div>
                <div className="header-image">
                    <img src={require("./header-image.png")} alt="header" />
                </div>
			</div>

			<div>
				{movies.length > 0 ? (
					<div className="container">
						{movies.map((movieItem) => (
							<MovieCard movie={movieItem} />
						))}
					</div>
				) : (
					<div className="empty">
						<h2>No movies found</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default App;
