import { useState } from "react"
import styles from "./styles/register.module.css"
import { useNavigate } from "react-router-dom"

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const response = await fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: username, email, password }),
        })

        const data = await response.json()
        localStorage.setItem("token", data.token)
        navigate("/home")
    }

    return (
        <div>
            <div className={styles["register-form-container"]}>
                <form onSubmit={handleSubmit} className={styles["register-form"]}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </label>
                    <p />
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </label>
                    <p />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </label>
                    <p />
                    <button type="submit">Register</button>
                </form>
                <button onClick={() => navigate("/login")} className={styles["go-login-button"]}>Go to Login</button>
            </div>
        </div>
    )
}

export default Register