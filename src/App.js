import { useState } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
    //v variable with api key
    const apiKey = 'f67991bc'

    // State to hold movie data
    const [movie, setMovie] = useState(null)

    // Function to get Movie
    const getMovie = async (searchTerm) => {
        try {
             // make fetch request and store response
            const response = await fetch(
            `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
            )
            // Parse JSON response into a javascript object
            const data = await response.json()
            // set the Movie state to the movie
            setMovie(data)
        }catch(error){
            console.error(error)
        }
    }
    
    return(
        <div className="App">
            <h1 className="h1">OMDB</h1>
            <Form movieSearch={getMovie} />
            <MovieDisplay movie={movie} />
            <footer className="link">
                <a href="https://github.com/lucas9121" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon className="icon" icon="fa-brands fa-github" size="4x" />
                </a>
                {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" size="4x" /> */}
            </footer>
        </div>
    )
}

