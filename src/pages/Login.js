import { useContext } from "react"
import styles from "./singupLogin.module.css"
import CarsContext from "../utils/CarsContext"

function Login() {
  const { login } = useContext(CarsContext)

  return (
    <div className={styles.Form}>
      <h2>Log In</h2>
      <form onSubmit={login}>
        <label>Email:</label>
        <input type="email" name="email" required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" required />
        <br />

        <button className={styles.button} type="submit">
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login
