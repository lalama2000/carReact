import { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styles from "./carTypeMake.module.css"
import CarsContext from "../utils/CarsContext"
import { HiChevronDoubleRight } from "react-icons/hi"


function CarYear() {
  const { cars } = useContext(CarsContext)
  const { year } = useParams()
  const [compareCar, setCompercar] = useState([])
  const carsYear = cars.filter(car => car.year == year)

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
    {carsYear.map(car => (
      <div className={styles.cards}>
        <img style={{ width: "100%" }} src={car.photo360[0]} />
        <div className={styles.container}>
          <li>
         <Link to={`/car/${cars.year}`}>
          {car.year} {car.model}
            </Link>
          </li>
          <p>
            {car.price} SAR | {car.miles} mi
          </p>
          <div>
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
// {carsYear.map(car => (
//   <CarItem car={car} key={car._id} />
// ))}
// <Card border="light" style={{ maxWidth: "200px" }}>
//   <Link to={`/car/${cars.year}`}>
//     <Card.Img variant="top" src={cars.photo360} style={{ width: "50%" }} />
//   </Link>
//   <Card.Body>
//     <Link to={`/car/${cars.year}`}>
//       <Card.Title>{cars.model}</Card.Title>
//     </Link>
//   </Card.Body>
// </Card>
export default CarYear
