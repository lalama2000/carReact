import Background from "../components/Background"
import styles from "./home.module.css"
import { useContext } from "react"
import CarsContext from "../utils/CarsContext"
import white2 from "../assets/white2.mp4"
import { Link } from "react-router-dom"

function Home() {
  const { cars } = useContext(CarsContext)
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={white2} type="video/mp4" />
      </video>
      <h4 className={styles.title}>Your dream car is here</h4>
      <p className={styles.schondtitle}>Order Online for cars</p>

      <div>
        <div className={styles.align}>
          <Link to="/cars" className={styles.button}>
            SHOP ALL CARS
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
