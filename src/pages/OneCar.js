import { useContext } from "react"
import { Carousel, Col } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import CarContext from "../utils/CarsContext"
import { FcLikePlaceholder, FcLike } from "react-icons/fc"
import styles from "./onCar.module.css"
import { GrCheckmark } from "react-icons/gr"
import { GrClose } from "react-icons/gr"

function OneCar() {
  const { carId } = useParams()

  const { cars, likeCar, profile } = useContext(CarContext)

  const car = cars.find(car => car._id === carId)

  const liked = car.likes.includes(profile?._id)

  return (
    <div>
      <div>
        <button className={styles.buttonlikes} onClick={() => likeCar(car._id)}>
          {liked ? <FcLike /> : <FcLikePlaceholder />}
        </button>
        <span>{car.likes.length} people saved</span>
        <div className={styles.row}>
          <div className={styles.column1}>
            <Carousel variant="dark" className="d-block  mt-0px mx-auto" style={{ width: 900, marginBottm: 40 }}>
              {car.photo360.map(photo => (
                <Carousel.Item>
                  <img height="500px" width="100%" src={photo} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <div className={styles.column2}>
          <h1 className={styles.yearModel}>
            {car.year} {car.model}
          </h1>
          <h5>
            Price:{car.price}SAR | Miles:{car.miles} K
          </h5>
          <div>
            <p>Body:{car.body}</p>
            <p>Engine:{car.engine}</p>
            <p>Cylinders:{car.cylinders}</p>
            <p>Hourspower:{car.horsePower}</p>
            <p>Drive Train:{car.driveType}</p>
            <p>Size:{car.size}</p>
            <p>Torquq:{car.torque}</p>
            <p>Transmission:{car.transmission}</p>
            <p>Remote Start:{car.remoteStart ? <GrCheckmark /> : <GrClose />}</p>
            <p>Power Windows:{car.powerWindows ? <GrCheckmark /> : <GrClose />}</p>
            <p>Power Locks:{car.powerLocks ? <GrCheckmark /> : <GrClose />}</p>
            <p>Power Seats:{car.powerSeats ? <GrCheckmark /> : <GrClose />}</p>
            <p>power Mirrors:{car.powerMirrors ? <GrCheckmark /> : <GrClose />}</p>
            <p>Cruise Control:{car.cruiseControl ? <GrCheckmark /> : <GrClose />}</p>
          </div>
        </div>
      </div>
<div>
{localStorage.tokenCars ? (
        <Link className={styles.buttonOdrder} to={`/car/${car._id}/order`}>
          get pre-approved
        </Link>
        ) : (
null          
)}

        </div>
    </div>
  )
}
export default OneCar
