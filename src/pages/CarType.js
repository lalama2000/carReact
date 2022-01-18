import { useState } from "react"
import { useContext } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import CarsContext from "../utils/CarsContext"
import styles from "./carTypeMake.module.css"
import { HiChevronDoubleRight } from "react-icons/hi"
function CarType() {
  const { typeName } = useParams()
  const { cars } = useContext(CarsContext)
  const [compareCar, setCompercar] = useState([])

  let carsByType

  carsByType = cars.filter(car => car.type.name === typeName)

  const updateCar = carId => {
    const carFound = compareCar.find(ccId => ccId === carId)
    if (!carFound) {
      setCompercar([...compareCar, carId])
    } else {
      const newCompareCar = compareCar.length(ccId => ccId !== carId)
      setCompercar(newCompareCar)
    }
  }

  return (
    <div className={styles.displayType}>
      {carsByType.map(car => (
        <div className={styles.cards}>
          <img style={{ width: "100%" }} src={car.photo360[0]} />
          <div className={styles.container}>
            <li>
              <Link to={`/car/${car._id}`}>
                {car.year} {car.model}
              </Link>
            </li>
            <p>
              {car.price} SAR | {car.miles} mi
            </p>
            <div style={{ color: compareCar.find(ccId => ccId == car._id) ? "blue" : "white" }}>
            <div className={styles.buttonMove}>
              <button className={styles.buttCompare} onClick={() => updateCar(car._id)}>
                Compare
              </button>
              </div>
              {compareCar.length > 1 ? (
                <Link to={`/compare/${compareCar.join("+")}`}>
                  <HiChevronDoubleRight />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default CarType
