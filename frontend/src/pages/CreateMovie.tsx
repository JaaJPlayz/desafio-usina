import Navbar from '../components/Navbar'
import { useState } from 'react'
import styles from "./styles/createMovie.module.css"

function CreateMovie() {
    const [movie, setMovie] = useState({
        title: "",
        description: "",
        genre: "",
        releaseyear: 0,
        duration: 0,
        rating: 1,
        comment: ""
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            await fetch("http://localhost:3001/movies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(movie)
            })
        } catch (error) {
            console.log(error)
        } finally {
            window.location.reload()
        }
    }

    return (
        <>
            <Navbar />
            <div className={styles["create-movie-form-container"]}>
                <h1>Add Movie</h1>
                <form>
                    <label>Title</label>
                    <input type="text" placeholder="Title" value={movie.title} onChange={(e) => setMovie({ ...movie, title: e.target.value })} required />
                    <label>Description</label>
                    <textarea placeholder="Description" maxLength={200} value={movie.description} onChange={(e) => setMovie({ ...movie, description: e.target.value })} required />
                    <label>Genre</label>
                    <input type="text" placeholder="Genre" value={movie.genre} onChange={(e) => setMovie({ ...movie, genre: e.target.value })} required />
                    <label>Release Year</label>
                    <input type="number" placeholder="Release Year" value={movie.releaseyear} onChange={(e) => setMovie({ ...movie, releaseyear: parseInt(e.target.value) })} required />
                    <label>Duration (in minutes)</label>
                    <input type="number" placeholder="Duration" value={movie.duration} onChange={(e) => setMovie({ ...movie, duration: parseInt(e.target.value) })} required />
                    <label>Rating</label>
                    <input type="number" placeholder="Rating" value={movie.rating} min="1" max="5" onChange={(e) => setMovie({ ...movie, rating: parseInt(e.target.value) })} required />
                    <label>Comment</label>
                    <input type="text" placeholder="Comment" value={movie.comment} onChange={(e) => setMovie({ ...movie, comment: e.target.value })} required />
                    <button onClick={handleSubmit}>Create</button>
                </form>
            </div>
        </>
    )
}

export default CreateMovie