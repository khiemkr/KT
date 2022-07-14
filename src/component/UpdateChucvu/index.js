import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { userContext, userInfoContext } from '../Update';
import { Link ,Navigate, useNavigate} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function UpdateChucvu({show,onHide}) {
  const user = useContext(userInfoContext);
    return (      
      <Form>
        <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Ho ten</Form.Label>
        <Form.Control type="text"  disabled defaultValue={user} />
      </Form.Group>
    <Form.Select aria-label="Default select example">
      <option value="1">Giam Doc</option>
      <option value="2">Truong Phong</option>
      <option value="3">Nhan vien</option>
    </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ngay bo nhiem</Form.Label>
        <Form.Control type="email" placeholder="ngay" />
      </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide} >Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
    </Form>
      
    );
}

export default UpdateChucvu;