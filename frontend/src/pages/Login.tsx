import { useState } from "react"
import styles from "./styles/register.module.css"
import { useNavigate } from "react-router-dom"

function Login() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const response = await fetch(`http://localhost:3001/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: username, email, password }),
        })

        const data = await response.json()
        if (data) {
            localStorage.setItem("token", data.token)
            navigate("/home")
        } else {
            console.log("Usuário não encontrado")
        }
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
                    <button type="submit">Login</button>
                </form>
                <button onClick={() => navigate("/register")} className={styles["go-register-button"]}>Go to Register</button>
            </div>

        </div>
    )
}

export default Login