import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { createContext, useRef, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Link ,Navigate, useNavigate} from 'react-router-dom';
import UpdateChucvu from '../UpdateChucvu';
import { ListP } from '../ListPerson';
export const userInfoContext = createContext()
function Update() {
  const [radioValue, setRadioValue] = useState('1');
  const [ListPS,setListPS] = useState(ListP)
  let navi = useNavigate();
  const radios = [
    { name: 'Nam', value: '1' },
    { name: 'Nu', value: '2' },
  ];
  const inputname = useRef();
  const inputaddress = useRef();
  const inputMail = useRef();
  const inputSDT = useRef();

  function validation(){
    const errors = [];
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if(inputname.current.value.length < 3 || inputname.current.value.length > 20 ){
      alert('xin moi nhap lai name');
      errors.push('1')
    }
    if(inputaddress.current.value.length < 10 || inputaddress.current.value.length > 30 ){
      alert('xin moi nhap lai address')
      errors.push('2')

    }
    if(inputSDT.current.value.length !== 10 ){
      alert('xin moi nhap lai SDT')
      errors.push('3')
    }
    if(!filter.test(inputMail.current.value)){
      alert('xin moi nhap lai Mail')
      errors.push('4')
    }
    return errors
  }
  const [show,setShow] = useState(false)
  const [addinfo,setAddInfo] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    const err = validation();
    console.log("chưa xử lý gì cả");
    if(err.length ===0){
      setAddInfo(inputname.current.value)
      setShow(true)
      setListPS(ListPS.push({
        name: inputname.current.value,
        gender: true,
        address: inputaddress.current.value,
        phone: inputSDT.current.value,
        email:inputMail.current.value,
      }))
    }
  };
  const handleCancel = () =>{
    navi('../',{replace: true})
  }
  return (          
    <userInfoContext.Provider value={addinfo}>
      <UpdateChucvu show = {show} onHide={() => setShow(false)}/>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ho ten</Form.Label>
        <Form.Control ref={inputname} type="text" placeholder="Enter name" />
      </Form.Group>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dia chi</Form.Label>
        <Form.Control ref={inputaddress} type="text" placeholder="Enter address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control ref={inputMail} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Dien thoai</Form.Label>
        <Form.Control ref={inputSDT} type="text" placeholder="SDT" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      <Button variant="warning"onClick={handleCancel} >
        Cancel
      </Button>
    </Form>       
    </userInfoContext.Provider>
     );
}


export default Update;