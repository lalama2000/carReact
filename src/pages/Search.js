import styles from "./search.module.css"
import { useContext } from "react"
import CarsContext from "../utils/CarsContext"
import { Form, Button } from "react-bootstrap"
import white2 from "../assets/white2.mp4"


function Search() {
  const { cars, makes, types, carSearch } = useContext(CarsContext)
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          right: "50%",
          top: "100px",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={white2} type="video/mp4" />
      </video>
      <h1 className={styles.title}>Search for car Now</h1>
      <div>
        <h5 className={styles.looking}>I am looking for...</h5>
        <div>
          <Form onSubmit={carSearch} className={styles.search}>
            <Form.Group className={styles.searchTerm}>
              <Form.Control
                name="carSearch"
                list="carSearch"
                type="search"
                placeholder="Search for a make, type and car"
              />
            </Form.Group>
            <datalist id="carSearch">
              {cars.map(car => (
                <option value={car.model} />
              ))}
              {makes.map(make => (
                <option value={`${make.name}`} />
              ))}
              {types.map(type => (
                <option value={`${type.name}`} />
              ))}
            </datalist>
            <Button variant="secondary" type="submit" >
              Search
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Search

