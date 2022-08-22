import React, { useState , useEffect } from 'react'
import { ButtonComponent, ModalComponent } from './Components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


import { fetchContacts , selecContacts} from './store/reducers/contactReducer'
const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalTwoShow, setModalTwoShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");

  const [modalTwoTitle, setModalTwoTitle] = useState("");
  const [modalTwoBody, setModalTwoBody] = useState("");

  const contacts = useSelector(state => state.contacts)

  const dispatch = useDispatch()
  
  const showModal = (title) => {
    
    const body = () => {
      return (
        <div>
          <ButtonComponent onClick={() => handleModalA("Modal A")} text="All Contacts" />
          <ButtonComponent onClick={() => handleModalA("Modal B")} text="US Contacts" />
        </div>
      )
    }
    setModalShow(true)
    setModalTitle(title)
    setModalBody(body)
    return;
  }

  const handleModalA = (title) =>{
    setModalTwoShow(true)
    setModalTwoTitle(title)
    if(title === "Modal B"){
      dispatch(fetchContacts({page: 1, countryId: 226}))
      console.log(contacts)

    }

   
  }

  useEffect(() => {
    console.log(contacts)
    let body =() => {
      if(contacts.length > 0){
          return  contacts.map((ele , i) => {
            return (
              <div>
                <h1>{ele.first_name}</h1>
                <h1>{ele.last_name}</h1>
                <h1>{ele.email}</h1>
                <h1>{ele.id}</h1>
              </div>
            )
          })
      }
    }
    setModalTwoBody(body)
  }, [contacts])
  return (
    <Container className="min-vh-100 ">
    
      <Row className="">
        <Col>
          <ButtonComponent onClick={() => showModal("Modal A ")} text={"button A"} />
        </Col>
        <Col>
          <ButtonComponent onClick={() => showModal("Modal B")} text={"button B"} />
        </Col>
      </Row>
      <ModalComponent show={modalShow}
        onHide={() => setModalShow(false)}
        title={modalTitle}
        body={modalBody} />

      <ModalComponent show={modalTwoShow}
        onHide={() => setModalTwoShow(false)}
        title={modalTwoTitle}
        body={modalTwoBody} />
    </Container>


  )
}

export default App