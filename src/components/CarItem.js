import { Link } from "react-router-dom"
import styles from "./carItem.module.css"

function CarItem(props) {
  const { car } = props
  return (
    <div className={styles.displayType}>
      <div className={styles.cards}>
        <Link to={`/car/${car._id}`}>
          <img style={{ width: "100%" }} src={car.photo360[0]} />
        </Link>
        <div className={styles.container}>
          <li>
            <Link to={`/car/${car._id}`}>
              {car.year} {car.model}
            </Link>
          </li>
          <p>
            {car.price} SAR | {car.miles} mi
          </p>
        </div>
      </div>
    </div>
  )
}
export default CarItem
// <div>
// <Card border="light" style={{ maxWidth: "200px" }}>
//   <Link to={`/car/${car._id}`}>
//     <Card.Img variant="top" src={car.photo360} style={{ width: "50%" }} />
//   </Link>
//   <Card.Body>
//     <Link to={`/car/${car._id}`}>
//       <Card.Title>{car.model}</Card.Title>
//     </Link>
//     <Card.Text>{car.body}</Card.Text>
//   </Card.Body>
// </Card>
// </div>
