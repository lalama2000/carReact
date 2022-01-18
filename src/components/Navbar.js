import styles from "./navbar.module.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import CarContext from "../utils/CarsContext"

function NavbarItem() {
  const { logout } = useContext(CarContext)
  return (
    <nav>
      <Link className={styles.h1} to="/">
        <span className={styles.span1}>C</span>
        <span className={styles.span2}>Λ</span>
        <span className={styles.span3}>R</span>
        <span className={styles.span4}>L</span>
        <span className={styles.span5}>Λ</span>
      </Link>
      <ul className={styles.navbaritem}>
        <li>
          <Link to={"./Shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"./Search"}>Search</Link>
        </li>
        <li>
          <Link to={"./Contact"}>Contact Us</Link>
        </li>
      </ul>
      {localStorage.tokenCars ? (
        <ul className={styles.navbaritem}>
          <li>
            <Link to={"./Profile"}>Account</Link>
          </li>
          <li>
            <Link to={"./"} onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className={styles.navbaritem}>
          <li>
            <Link to={"/SignUp"}>Signup </Link>
          </li>
          <li>
            <Link to={"/Login"}>Login </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavbarItem
