import { useContext, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import CarItem from "../components/CarItem"
import EditProfile from "../components/EditProfile"
import CarsContext from "../utils/CarsContext"
import styles from "./profile.module.css"
import Loader from "../components/Loader"
import { AiFillEdit } from "react-icons/ai"
import { FcLike } from "react-icons/fc"
import { FcViewDetails } from "react-icons/fc"
function Profile() {
  const { profile } = useContext(CarsContext)
  const [editShow, setEditShow] = useState(false)

  if (!profile) return <Loader />
  console.log(profile)
  return (
    <div>
      <h1 className={styles.title}>
        {profile.firstName} {profile.lastName}
      </h1>

      <p className={styles.email}>Email:{profile.email}</p>
      <p className={styles.email}>Phone Number:{profile.phoneNumber}</p>
      <Button variant="none" className="me-2" onClick={() => setEditShow(true)}>
        Edit your profile <AiFillEdit />
      </Button>
      <EditProfile show={editShow} setShow={setEditShow} profile={profile} />
      <h1 className={styles.title}>
        Your like cars <FcLike />
      </h1>
      <div className={styles.likeCar}>
        {profile.likes.map(car => (
          <CarItem car={car} key={car._id} />
        ))}
      </div>

      <h1 className={styles.title}>
        Your Order <FcViewDetails />
      </h1>
      {profile.orders.map(order => (
        <>
          <p className={styles.order}>
            <strong>{order._id}{" "}</strong>
            {order.createdAt}
          </p>
        </>
      ))}
    </div>
  )
}

export default Profile
// <div className={styles.displayType}>
//       {carsByType.map(car => (
//         <div className={styles.cards}>
//           <img style={{ width: "100%" }} src={car.photo360} />
//           <div className={styles.container}>
//             <li>
//               <Link to={`/car/${car._id}`}>
//                 {car.year} {car.model}
//               </Link>
//             </li>
//             <p>
//               {car.price} SAR | {car.miles} mi
//             </p>
//             <div style={{ color: compareCar.find(ccId => ccId == car._id) ? "blue" : "white" }}>
//               <button className={styles.buttCompare} onClick={() => updateCar(car._id)}>
//                 Compare
//               </button>
//               {compareCar.length > 1 ? (
//                 <Link to={`/compare/${compareCar.join("+")}`}>
//                   <HiChevronDoubleRight />
//                 </Link>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }
