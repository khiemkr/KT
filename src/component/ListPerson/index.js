import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModelEdit from '../ModelEdit';
import {
 Link
  } from "react-router-dom";
import { createContext, useState } from 'react';

export const ListP = [
  { id: 1,
    name: 'Nguyen Van A',
    gender: true,
    address: 'Can Tho',
    phone: '0976645433',
    email:'khiem@gmail.com',
    cv:'truong phuong'
  },
  { id: 2,
    name: 'Nguyen Van B',
    gender: false,
    address: 'Can Tho',
    phone: '0976645433',
    email:'khiem@gmail.com',
    cv:'truong phuong'
  
  },
  { id: 3,
    name: 'Nguyen Van C',
    gender: true,
    address: 'Can Tho',
    phone: '0976645433',
    email:'khiem@gmail.com',
    cv:'truong phuong'
  
  }
]
export const userContext = createContext();
function ListPerson() {
  const [ListPs,setListPs] = useState(ListP);
  const [test,setTest] = useState(false);
  const [userinfo,setUserInfo] = useState({
    name:'',
    address:'',
    mail:'',
    phone:''
  })
let handleOnClick = (item) =>{
    alert('ban co that su muon xoa');
    setListPs(ListPs.splice(item.id,1))
}
let handleShowModel = (item) => {
  setTest(true)
  setUserInfo({
    name:item.name,
    address:item.address,
    phone:item.phone,
    mail:item.email,
  })
}
let handleOnChane = (item) =>{
  setUserInfo({
    name:item.name,
    address:item.address,
    phone:item.phone,
    mail:item.email,
  })
  setListPs(ListPs)
  setTest(false)
  console.log(ListPs)
}
return (
  <userContext.Provider value={userinfo}>
  <div style={{maxWidth:'1200px', margin:'0 auto'}}>
    <ModelEdit show={test} onHide = {() => setTest(false)} onChange={() => handleOnChane(userinfo)}/>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Ho ten</th>
          <th>Dia chi</th>
          <th>Chuc vu</th>
          <th>Dien thoai</th>
          <th>Email</th>
          <th>Sua</th>
          <th>Xoa</th>
        </tr>
      </thead>
      <tbody>
        {ListPs.map((item,index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.gender === true ? 'x' : ''}</td>
          <td>{item.address}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td><button className='btn-primary' onClick={() => handleShowModel(item)}>Sua </button></td>
          <td><button className='btn-danger' onClick={() => handleOnClick(item)}> xoa</button></td>
        </tr>
        ))
          
        }
      </tbody>
    </Table>
    <Link to='/add'> Them </Link>
    </div> 

  </userContext.Provider>
    );
}

export default ListPerson;