import styles from "./thank.module.css"
import { FaHandsHelping } from "react-icons/fa"

function Thank() {
  return (
    <div>
      <h3 className={styles.firstLine}>Thanks for chose CARLA <FaHandsHelping/></h3>
      <h5 className={styles.schondLine}>Order created please check your email for the contract </h5>
    </div>
  )
}

export default Thank
