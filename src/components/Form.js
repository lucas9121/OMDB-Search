import { useState } from "react";

export default function Form(props) {
    const [formData, setFormData] = useState({
        searchTerm: ''
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.movieSearch(formData.searchTerm)
    }

    return(
        <div className="form">
            <form onSubmit={handleSubmit} >
                <input 
                className="input"
                type='text' 
                name="searchTerm"
                onChange={handleChange}
                value={formData.searchTerm}
                />
                <input type='submit' className="input2" value='Action!' />
            </form>
        </div>
    )
}