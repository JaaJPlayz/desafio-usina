import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import styles from "./styles/createMovie.module.css"
import { IMovie } from '../interfaces/IMovie'
import { useNavigate } from 'react-router-dom'

function EditMovie() {
    const navigate = useNavigate()

    const [movie, setMovie] = useState<IMovie>({
        id: +window.location.pathname.split("/")[2],
        title: "",
        description: "",
        genre: "",
        releaseyear: 0,
        duration: 0,
        rating: 0
    })

    useEffect(() => {
        const id = window.location.pathname.split("/")[2]
        const fetchMovie = async () => {
            try {
                const response = await fetch(`http://localhost:3001/movies/${id}`)
                const data = await response.json()
                setMovie(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovie()
    }, [])


    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            await fetch(`http://localhost:3001/movies/${movie.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(movie)

            })
            navigate(`/home`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className={styles["create-movie-form-container"]}>
                <h1>Editing movie {movie.id}</h1>
                <form>
                    <label>Title:</label>
                    <input type="text" placeholder="Title" value={movie.title} onChange={(e) => setMovie({ ...movie, title: e.target.value })} required />
                    <label>Description:</label>
                    <textarea placeholder="Description" maxLength={200} value={movie.description} onChange={(e) => setMovie({ ...movie, description: e.target.value })} required />
                    <label>Genre:</label>
                    <input type="text" placeholder="Genre" value={movie.genre} onChange={(e) => setMovie({ ...movie, genre: e.target.value })} required />
                    <label>Release Year:</label>
                    <input type="number" placeholder="Release Year" value={movie.releaseyear} onChange={(e) => setMovie({ ...movie, releaseyear: parseInt(e.target.value) })} required />
                    <label>Duration (in minutes):</label>
                    <input type="number" placeholder="Duration" value={movie.duration} onChange={(e) => setMovie({ ...movie, duration: parseInt(e.target.value) })} required />
                    <label>Rating:</label>
                    <input type="string" placeholder="Rating" value={movie.rating} min="1" max="5" onChange={(e) => setMovie({ ...movie, rating: parseFloat(e.target.value) })} required />
                    <label>Comment:</label>
                    <input type="text" placeholder="Comment" value={movie.comment} onChange={(e) => setMovie({ ...movie, comment: e.target.value })} required />
                    <button onClick={handleSubmit}>Save</button>
                </form>
            </div>
        </>
    )
}

export default EditMovie