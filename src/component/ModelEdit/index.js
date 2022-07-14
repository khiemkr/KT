import { useState,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useContext } from 'react';
import { userContext } from '../ListPerson';
import { useParams } from 'react-router-dom';
function ModelEdit({show,onHide,onChange}) {
    const user = useContext(userContext);
    const [info,setInfo] = useState({
      name: user.name,
      address: user.address,
      mail: user.mail,
      phone: user.phone,

    })
    const inputname = useRef();
    const inputaddress = useRef();
    const inputMail = useRef();
    const inputSDT = useRef();
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ho ten</Form.Label>
        <Form.Control defaultValue={user.name} ref={inputname} type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dia chi</Form.Label>
        <Form.Control defaultValue={user.address} ref={inputaddress} type="text" placeholder="Enter address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control defaultValue={user.mail} ref={inputMail} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Dien thoai</Form.Label>
        <Form.Control defaultValue={user.phone} ref={inputSDT} type="text" placeholder="SDT" />
      </Form.Group>
    </Form>  
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide} >Close</Button>
        <Button variant="primary" onClick={onChange}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModelEdit;