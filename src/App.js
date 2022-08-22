import React, { useState } from 'react'
import { ButtonComponent, ModalComponent } from './Components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalTwoShow, setModalTwoShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");

  const showModalA = () => {
    const body = () => {
      return (
        <div>
          <ButtonComponent onClick={() => setModalTwoShow(true)} text="All Contacts" />
          <ButtonComponent text="US Contacts" />
        </div>
      )
    }
    setModalShow(true)
    setModalTitle("Modal A ")
    setModalBody(body)
    return;



  }
  return (
    <Container className="min-vh-100 align-items-center justify-content-center ">
      <Row className="align-items-center justify-content-center">
        <Col>
          <ButtonComponent onClick={() => showModalA()} text={"button A"} />
        </Col>
        <Col>
          <ButtonComponent text={"button B"} />
        </Col>
      </Row>
      <ModalComponent show={modalShow}
        onHide={() => setModalShow(false)}
        title={modalTitle}
        body={modalBody} />

      <ModalComponent show={modalTwoShow}
        onHide={() => setModalTwoShow(false)}
        title={"Modal Two"}
        body={"Modal Two body"} />
    </Container>


  )
}

export default App