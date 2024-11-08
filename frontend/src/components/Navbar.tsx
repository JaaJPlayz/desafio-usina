import styles from "./styles/navbar.module.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className={styles["navbar"]}>
            <h1>Biblioteca de Filmes 🎥</h1>
            <div className={styles["navbar-links"]}>
                <Link to="/home">Home</Link>
                <Link to="/create">Create</Link>
            </div>
        </div>
    )
}

export default Navbar