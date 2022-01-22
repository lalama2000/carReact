import axios from "axios"
import "./App.css"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import CarsContext from "./utils/CarsContext"
import NavbarItem from "./components/Navbar"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import AllCars from "./pages/AllCars"
import CarType from "./pages/CarType"
import CarMake from "./pages/CarMake"
import Shop from "./pages/Shop"
import Search from "./pages/Search"
import OneCar from "./pages/OneCar"
import Compare from "./pages/Compare"
import ConectUs from "./pages/ConectUs"
import Order from "./pages/Order"
import CarYear from "./pages/CarYear"
import Thank from "./pages/Thank"
function App() {
  const navigate = useNavigate()
  const [cars, setCars] = useState([])
  const [profile, setProfile] = useState(null)
  const [makes, setMakes] = useState([])
  const [types, setTypes] = useState([])
  //-------------------------------get cars-------------------------------//

  const getCars = async () => {
    const response = await axios.get("https://car-api-lama.herokuapp.com/api/cars")
    setCars(response.data)
  }
  //-------------------------------get make-------------------------------//
  const getMakes = async () => {
    const response = await axios.get("https://car-api-lama.herokuapp.com/api/makes")
    setMakes(response.data)
  }
  //-------------------------------get type-------------------------------//
  const getTypes = async () => {
    const response = await axios.get("https://car-api-lama.herokuapp.com/api/types")
    setTypes(response.data)
  }
  //-------------------------------get profle-------------------------------//
  const getProfile = async () => {
    const response = await axios.get("https://car-api-lama.herokuapp.com/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenCars,
      },
    })
    setProfile(response.data)
  }
  useEffect(() => {
    getCars()
    getMakes()
    getTypes()
    if (localStorage.tokenCars) getProfile()
  }, [])

  //-------------------------------edit profile-------------------------//
  const editProfile = async e => {
    e.preventDefault()
    const form = e.target
    try {
      const profileBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        phoneNumber: form.elements.phoneNumber.value,
        password: form.elements.password.value,
      }
      await axios.put("https://car-api-lama.herokuapp.com/api/auth/profile", profileBody, {
        headers: {
          Authorization: localStorage.tokenCars,
        },
      })
      getProfile()
    } catch (error) {
      console.log(error)
    }
  }

  //-------------------------------signup-------------------------------//

  const signup = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        phoneNumber: form.elements.phoneNumber.value,
        password: form.elements.password.value,
      }
      await axios.post("https://car-api-lama.herokuapp.com/api/auth/signup", userBody)
      console.log("signup succses")
      navigate("/login")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  //-------------------------------login-------------------------------//

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://car-api-lama.herokuapp.com/api/auth/login", userBody)
      const token = response.data
      localStorage.tokenCars = token

      getProfile()
      console.log("login success")

      navigate("/Profile")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-------------------------------logout-------------------------------//

  const logout = () => {
    localStorage.removeItem("tokenCars")
    console.log("logout success")
  }
  //-------------------------------search car-------------------------------//
  const carSearch = e => {
    e.preventDefault()
    const form = e.target
    const searchText = form.elements.carSearch.value

    const carFound = cars.find(car => car.model === searchText)
    if (carFound) return navigate(`/car/${carFound._id}`)

    const makeFound = makes.find(make => make.name === searchText)
    if (makeFound) return navigate(`/make/${makeFound.name}`)

    const typeFound = types.find(type => type.name === searchText)
    if (typeFound) return navigate(`/type/${typeFound.name}`)
  }
  //-------------------------------get like-------------------------------//
  const likeCar = async carId => {
    try {
      const response = await axios.get(`https://car-api-lama.herokuapp.com/api/cars/${carId}/likes`, {
        headers: {
          Authorization: localStorage.tokenCars,
        },
      })
      getCars()
      getProfile()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //-------------------------------Purchase-------------------------------//
  const purchaseCar = async carId => {
    try {
      const response = await axios.post(
        `https://car-api-lama.herokuapp.com/api/orders/${carId}`,
        {},
        {
          headers: {
            Authorization: localStorage.tokenCars,
          },
        }
      )
      getProfile()
      navigate("/thank")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-------------------------------context store-------------------------------//

  const store = {
    cars,
    makes,
    types,
    signup,
    login,
    logout,
    profile,
    editProfile,
    carSearch,
    likeCar,
    purchaseCar,
  }

  return (
    <CarsContext.Provider value={store}>
      <NavbarItem />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cars" element={<AllCars />} />
        <Route path="/contact" element={<ConectUs />} />
        <Route path="/cars/:year" element={<CarYear />} />
        <Route path="/car/carId/order" element={<Order />} />
        <Route path="/compare/:carsId" element={<Compare />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/car/:carId" element={<OneCar />} />
        <Route path="car/:carId/order" element={<Order />} />
        <Route path="/type/:typeName" element={<CarType />} />
        <Route path="/make/:makeName" element={<CarMake />} />
        <Route path="/thank" element={<Thank />} />
      </Routes>
    </CarsContext.Provider>
  )
}

export default App
