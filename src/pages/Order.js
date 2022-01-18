import { useContext } from "react"
import { Carousel } from "react-bootstrap"
import { useParams } from "react-router-dom"
import CarsContext from "../utils/CarsContext"
import AllCars from "./AllCars"
import styles from "./order.module.css"

function Order() {
  const { carId } = useParams()
  const { cars, purchaseCar } = useContext(CarsContext)
  const car = cars.find(car => car._id === carId)

  const carOrder = cars.filter(car => car._id === carId)

  return (
    <div className={styles.head}>
    <h2 >Nice choice!</h2>
      {carOrder.map(car => (
        <div>
        <img style={{ width: "30%" , paddingTop:"5%" }} src={car.photo360[0]} />
          <p className={styles.text}>
            {car.model} {car.year}
          </p>
          <p className={styles.text}>{car.price} SAR</p>
        </div>
      ))}
      <button className={styles.button} onClick={() => purchaseCar(car._id)}>
        confarim
      </button>
    </div>
  )
}

export default Order
