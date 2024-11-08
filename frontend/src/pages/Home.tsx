import Navbar from "../components/Navbar"
import MovieContainer from "../components/MovieContainer"
import { useState, useEffect } from "react"
import { IMovie } from "../interfaces/IMovie"

import styles from "./styles/searchbar.module.css"

function Home() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [search, setSearch] = useState("");
    const [searchBy, setSearchBy] = useState("title");

    useEffect(() => {
        const getMovies = async () => {
            const movies = await fetch("http://localhost:3001/movies/all")
            const data = await movies.json()
            setMovies(data)
        }

        getMovies()
    }, [])

    useEffect(() => {
        const getMoviesFiltered = async () => {
            try {
                const response = await fetch(`http://localhost:3001/movies/all`);
                const data = await response.json();

                if (!search) {
                    setMovies(data);
                    return;
                }

                const filterBySearch = (movie: IMovie) => {
                    const fields: Record<string, string> = {
                        title: movie.title,
                        genre: movie.genre,
                        releaseYear: movie.releaseyear?.toString(),
                        duration: movie.duration?.toString(),
                        rating: movie.rating?.toString(),
                        comment: movie.comment ?? ""
                    };
                    return fields[searchBy]?.toLowerCase().includes(search.toLowerCase());
                };

                setMovies(data.filter(filterBySearch));
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        getMoviesFiltered();
    }, [search, searchBy]);


    return (
        <>
            <Navbar />
            <div className={styles["search-bar"]}>
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />


                <div className={styles["search-bar-filter-container"]}>
                    <label>Filtrar por:</label>
                    <select
                        value={searchBy}
                        onChange={(e) => setSearchBy(e.target.value)}
                        className={styles["search-bar-filter"]}
                    >
                        <option value="title">Título</option>
                        <option value="genre">Gênero</option>
                        <option value="releaseYear">Ano de lançamento</option>
                        <option value="duration">Duração</option>
                        <option value="rating">Avaliação</option>
                    </select>
                </div>
            </div>
            <MovieContainer movies={movies} />
        </>
    )
}

export default Home