import { useContext } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import CarsContext from "../utils/CarsContext"
import styles from "./carTypeMake.module.css"
import { HiChevronDoubleRight } from "react-icons/hi"

function CarMake() {
  const { makeName } = useParams()
  const { cars } = useContext(CarsContext)
  const [compareCar, setCompercar] = useState([])

  let carsByMake

  carsByMake = cars.filter(car => car.make.name === makeName)
//compare Cars
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
      {carsByMake.map(car => (
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
            <div>
              <button className={styles.buttCompare} onClick={() => updateCar(car._id)}>
                Compare
              </button>
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
export default CarMake
