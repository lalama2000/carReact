import { useContext, useState } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import CarsContext from "../utils/CarsContext"

function EditProfile(props) {
  const { show, setShow, profile } = props
  const { editProfile } = useContext(CarsContext)
  console.log("profle")
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editProfile(e)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name:
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="firstName" defaultValue={profile.firstName} />
            </Col>
            <Form.Label column md="3">
              Last Name:
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={profile.lastName} />
            </Col>
            <Form.Label column md="3">
              Phone Number:
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="phoneNumber" defaultValue={profile.phoneNumber} />
            </Col>
            <Form.Label column md="3">
              Password:
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" name="password" defaultValue={profile.password} />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EditProfile
