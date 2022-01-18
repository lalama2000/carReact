import { useContext } from "react"
import { useParams } from "react-router-dom"
import CarsContext from "../utils/CarsContext"
import { GrCheckmark } from "react-icons/gr"
import { GrClose } from "react-icons/gr"
import styles from "./compare.module.css"
import { Table } from "react-bootstrap"

function Compare() {
  const { carsId } = useParams()
  const carsIdArray = carsId.split("+")

  const { cars } = useContext(CarsContext)
  const carsCompare = cars.filter(car => carsIdArray.includes(car._id))

  return (
    <div className={styles.CompareAll}>
      {carsCompare.map(car => (
        <div className={styles.table}>
          <span>
            <img className={styles.imageCar} src={car.photo360[0]} />{" "}
          </span>
          <div className={styles.compareTable}>
            <h1 className={styles.heading}>{car.model}</h1>
            <div className={styles.orderAll}>
              <Table className={styles.compareTable} striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>miles</th>
                    <th>{car.miles} K</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>Body</td>
                    <td>{car.body}</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>Cylinders</td>
                    <td>{car.cylinders}</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>Engine</td>
                    <td>{car.engine}</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>Hourspower</td>
                    <td>{car.horsePower}</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>driveType</td>
                    <td>{car.driveType}</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>size</td>
                    <td>{car.size}</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>torque</td>
                    <td>{car.torque}</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>transmission</td>
                    <td>{car.transmission}</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>remoteStart</td>
                    <td>{car.remoteStart ? <GrCheckmark /> : <GrClose />}</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>powerWindows</td>
                    <td> {car.powerWindows ? <GrCheckmark /> : <GrClose />}</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>powerLocks</td>
                    <td>{car.powerLocks ? <GrCheckmark /> : <GrClose />}</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>powerSeats</td>
                    <td>{car.powerSeats ? <GrCheckmark /> : <GrClose />}</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>powerMirrors</td>
                    <td>{car.powerMirrors ? <GrCheckmark /> : <GrClose />}</td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <td>cruiseControl</td>
                    <td>{car.cruiseControl ? <GrCheckmark /> : <GrClose />}</td>
                  </tr>
                </thead>
              </Table>
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  )
}

export default Compare

