import { useContext } from "react"
import CarItem from "../components/CarItem"
import CarsContext from "../utils/CarsContext"
import styles from "../components/carItem.module.css"


function AllCars() {
  const { cars } = useContext(CarsContext)
  return (
    <div className={styles.displayType}>
      {cars.map(car => (
        <CarItem car={car} key={car._id} />
      ))}
    </div>
  )
}

export default AllCars
