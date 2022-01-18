import { useContext } from "react"
import { Link } from "react-router-dom"
import CarsContext from "../utils/CarsContext"
import styles from "./shop.module.css"
import Whaite from "../assets/Whaite.mp4"

function Shop() {
  const { cars, types, makes } = useContext(CarsContext)
  const carsMap = cars.map(car => car.year)
  console.log(carsMap)
  const yearCar = new Set(carsMap)
  console.log(yearCar)
  const years = Array.from(yearCar)
  console.log(years)

  years.forEach(year => console.log(year))

  return (
    <div className={styles.carHeader}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          right: "50%",
          top: "150px",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Whaite} type="video/mp4" />
      </video>
      <h1 className={styles.title}>Shop the nation’s largest used car inventory</h1>
      <div>
        <h4 className={styles.shopType}>Shop by type</h4>
      </div>
      <div className={styles.displayType}>
        {types.map(type => (
          <Link to={`/type/${type.name}`}>
            <img className={styles.cardType} src={type.image} />
          </Link>
        ))}
      </div>
      <div>
        <div>
          <h4>Shope by brand</h4>
        </div>
        <div className={styles.displayMake}>
          {makes.map(make => (
            <Link to={`/make/${make.name}`}>
              <img className={styles.cardMake} src={make.image} />
            </Link>
          ))}
        </div>
        <div>
          <h4>Shop by year</h4>
          <div className={styles.displayMake}>
            {years.map(year => (
              <Link to={`/cars/${year}`}>
                <h1>{year}</h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
