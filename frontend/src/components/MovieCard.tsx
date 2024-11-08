import { IMovie } from "../interfaces/IMovie"
import styles from "./styles/moviecard.module.css"
import { useNavigate } from "react-router-dom"

function MovieCard(props: IMovie) {
    const navigate = useNavigate()
    const deleteMovie = async (id: number) => {
        try {
            await fetch(`http://localhost:3001/movies/${id}`, {
                method: "DELETE"
            })
        } catch (error) {
            console.log(error)
        } finally {
            window.location.reload()
        }
    }

    return (
        <div className={styles["movie-card"]}>
            <h1 className={styles["movie-card-title"]}>{props.title}</h1>
            <p className={styles["movie-card-description"]}>{props.description}</p>
            <div className={styles["movie-card-info"]}>
                <p className={styles["movie-card-genre"]}>{props.genre}</p>
                <p className={styles["movie-card-release-year"]}>{props.releaseyear}</p>
                <p className={styles["movie-card-duration"]}>{props.duration}</p>
                <p className={styles["movie-card-rating"]}>{props.rating}</p>
                {props.comment && <p className={styles["movie-card-comment"]}>Comment: {props.comment}</p>}
            </div>
            <div className={styles["movie-card-buttons"]}>
                <button className={styles["movie-edit-button"]} onClick={() => navigate(`/edit/${props.id}`)}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                    Edit
                </button>
                <button className={styles["movie-delete-button"]} onClick={() => deleteMovie(props.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default MovieCard