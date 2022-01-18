import { useContext } from "react"
import styles from "./singupLogin.module.css"
import CarsContext from "../utils/CarsContext"

function SignUp() {
  const { signup } = useContext(CarsContext)

  return (
    
   <div  className={styles.Form}>
      <h2>Sign In</h2>
      <form onSubmit={signup}>
        <label>First Name:</label>
        <input type="text" name="firstName" required />
        <br />
        <label>Last Name:</label>
        <input type="text" name="lastName" required />
        <br />

        <label>Email:</label>
        <input type="email" name="email" required />
        <br />

        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" required />
        <br />

        <label>Password:</label>
        <input type="password" name="password" required />
        <br />

        <button className={styles.button} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp
