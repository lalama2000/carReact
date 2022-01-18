import styles from "./conect.module.css"
import Whaite from "../assets/Whaite.mp4"
import { AiOutlineHome } from "react-icons/ai"
import { MdOutlineDriveEta } from "react-icons/md"
import { MdOutlineAssignmentReturn } from "react-icons/md"

function ConectUs() {
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
          right: "50%",
          top: "100px",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Whaite} type="video/mp4" />
      </video>
      <h1 className={styles.title}>Contact CARLA</h1>
      <div className={styles.allText}>
        <h4 className={styles.textOne}>Ask us about any car in our inventory in:</h4>
        <h3 className={styles.textEmail}>carla.sa@gmail.com</h3>

        <h4 className={styles.textTow}>Want to talk to someone over the phone? Give us a call:</h4>
        <h3 className={styles.textPhone}>(913) 982-8863</h3>
        <p className={styles.textTime}>Hours are Sun: 12pm—7pm, Mon—Fri: 10am—9pm, and Sat: 9am—9pm EST</p>

        <h5 className={styles.wayTitle}>The way it should be:</h5>
        <p className={styles.thiredTitle}>
          <AiOutlineHome />
          Buy from home or in store
        </p>
        <p className={styles.forthTitle}>
          <MdOutlineDriveEta />
          Test drives for real life , 24 hour test
        </p>
        <p className={styles.fifthTitle}>
          <MdOutlineAssignmentReturn />
          Love it or return it ,the 30 day money back
        </p>
      </div>
    </div>
  )
}

export default ConectUs
