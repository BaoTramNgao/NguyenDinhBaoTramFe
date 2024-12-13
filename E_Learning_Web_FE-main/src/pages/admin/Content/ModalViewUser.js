import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';
import {  putViewUser } from 'Services/apiservices';
import _ from 'lodash';
const ModalViewUser = (props)=> {
    const {show,setShow,dataUpdate,fetchListUsers} =props;

    const handleClose = () => {
      setShow(false)
      setEmail("");
      setPassword("");
      setUsername("");
      setImages("");
      setRole("USER");
      setPreviewImages("");
      props.resetUpdate();
    };
    const handleShow = () => setShow(true);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");
    const [image,setImages]=useState("");
    const [role,setRole]=useState("USER");
    const [PreviewImages,setPreviewImages] =useState("");
    useEffect(()=>{
   
    
    if(!_.isEmpty(dataUpdate)){
        setEmail(dataUpdate.email);
        setPassword(dataUpdate.password);
        setUsername(dataUpdate.username);
        setImages("");
        setRole(dataUpdate.role);
        if(dataUpdate.image){setPreviewImages(`data:image/jpeg;base64,${dataUpdate.image}`)}

    }
    },[dataUpdate]);

      

    return (
  <>
            {/* <Button variant="primary" onClick={handleShow}>
        Đăng ký tài khoản
      </Button> */}

      <Modal
      className="modal-add-users" 
      show={show} 
      onHide={handleClose}
      size ="xl"
      backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Thông tin người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row g-3">
  <div className="col-md-6">
    <label className="form-label">Email</label>
    <input type="email" className="form-control"
     value={email}
     disabled={true}
     onChange={(event)=>setEmail(event.target.value)}
     />
  </div>
  <div className="col-md-6">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" 
    onChange={(event)=>setPassword(event.target.value)}
    disabled={true}
    value={password}/>
    
  </div>

  <div className="col-md-6">
    <label  className="form-label">Username</label>
    <input type="text" className="form-control" 
    onChange={(event)=> setUsername(event.target.value)}
    disabled={true}
    value={username} />
  </div>
  <div className="col-md-4">
    <label  className="form-label" disabled={true}>Role </label>
    <select  className="form-select" onChange={(event)=>setRole(event.target.value)}  disabled={true} value={role}>
      <option value="USER" disabled={true}>User</option>
      <option value="ADMIN"  disabled={true}>Admin</option>
    </select>
  </div>
  <div className='col-md-12 upload-file-title'>

  </div>
  <div className="col-md-12 img-preview">
    {PreviewImages ?
<img src={PreviewImages}/>
  :
  <span>preview images</span>
  }
  
     
      
  </div>

</form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
                    
      </>
    )
}
export default ModalViewUser;