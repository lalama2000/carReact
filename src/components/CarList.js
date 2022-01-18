import { AddTaskTwoTone } from "@mui/icons-material"
import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import CarsContext from "../utils/CarsContext"

function CarList(props) {
  const { cars } = useContext(CarsContext)
  console.log(cars)
  //   filmsGenre = filmsGenre.sort((a, b) => b.ratingAverage - a.ratingAverage)
  //   filmsGenre = filmsGenre.slice(0, 7)
  return <div></div>
}

export default CarList
