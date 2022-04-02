import { useState } from "react"

export default function MovieDisplay({movie}){
    const [hover, setHover] = useState(false)
    const h1 = document.querySelector('.h1')
    const input = document.querySelector('.input')
    const input2 = document.querySelector('.input2')
    const loaded = () => {
        return(
            // body background
            hover ? document.body.style.background = '-webkit-linear-gradient(45deg, black, rgb(51, 5, 5), rgb(161, 10, 10), rgb(179, 165, 36), rgb(255, 255, 255, .4), rgb(255, 255, 255, .4))' : document.body.style.background = '-webkit-linear-gradient(45deg, black, rgb(51, 5, 5), rgb(161, 10, 10), rgb(179, 165, 36), white)',

            // h1 shadow
            hover ? h1.style.textShadow = '-8px 5px 2px rgb(0,0, 0, 0.5)' : h1.style.textShadow = '-2px 1px black',

            // Seach bar shadow
            hover ? input.style.boxShadow = '-8px 3px 5px rgb(0,0, 0, 0.7)' : input.style.boxShadow = '-2px 1px 3px black',

            // Search button shadow
            hover ? input2.style.boxShadow = '-8px 3px 5px rgb(0,0, 0, 0.7)' : input2.style.boxShadow = '-2px 1px 3px black',

            <div className="movie-display"
            // hover effect
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            >
                <img src={movie.Poster} alt={movie.Title} />
                <div className="card-info">
                    <h1>{movie.Title}</h1>
                    <h3>{movie.Genre}</h3>
                    <h3>Made in {movie.Year} </h3>
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>No Movie to Display</h1>
    }


    return movie && movie.Title ? loaded() : loading();
}