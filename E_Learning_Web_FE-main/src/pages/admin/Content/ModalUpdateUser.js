import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';
import { putUpdateUser } from 'Services/apiservices';
import _ from 'lodash';
const ModalUpdateUser = (props)=> {
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
    if(!_.isEmpty(dataUpdate)){// "_. Kí hiệu lodash"_.isEmpty(...) hàm này của thư viện lodash kiểm tra xem 1 obj có rỗng hay không
        setEmail(dataUpdate.email);
        setPassword(dataUpdate.password);
        setUsername(dataUpdate.username);
        setImages("");
        setRole(dataUpdate.role);
        if(dataUpdate.image){setPreviewImages(`data:image/jpeg;base64,${dataUpdate.image}`)}
    }
    },[dataUpdate]);//Đảm bảo rằng khi dataUpdate thay đổi thì hàm này sẽ chạy
    const handleUploadImages =(event)=>{
      if(event.target && event.target.files && event.target.files[0]){
        setPreviewImages(URL.createObjectURL(event.target.files[0]))
        setImages((event.target.files[0]))
      }else{

      }
    }
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const handleSubmitCreateUsers = async() =>{ //async xử lý bất đồng bộ
      //validate
      const isValidEmail =validateEmail(email);
      if(!isValidEmail){
      toast.error('Vui lòng nhập Email')
        return;
      }


    //submit data
     
         let data = await putUpdateUser(dataUpdate.id,username,role, image,password)
        if(data && data.EC ===0){
          toast.success(data.EM );
          handleClose();
          // await props.fetchListUsers();
          // props. setCurrentPage(1);
          await props.fetchlistUsersWithPaginate(props.currentPage);
        }
        if(data && data.EC !==0){
          toast.error(data.EM)
        }
    }
    
      

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
          <Modal.Title>Modal heading</Modal.Title>
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
  
    value={password}/>
    
  </div>

  <div className="col-md-6">
    <label  className="form-label">Username</label>
    <input type="text" className="form-control" 
    onChange={(event)=> setUsername(event.target.value)}
    value={username} />
  </div>
  <div className="col-md-4">
    <label  className="form-label">Role </label>
    <select  className="form-select" onChange={(event)=>setRole(event.target.value)} value={role}>
      <option value="USER">User</option>
      <option value="ADMIN">Admin</option>
    </select>
  </div>
  <div className='col-md-12 upload-file-title'>
      <label className="form-label label-upload" htmlFor='fileUpload'> <FcPlus />Update File Images</label>
      <input type="file" hidden id='fileUpload' onChange={(event)=>handleUploadImages(event)}/>
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
          <Button variant="primary" onClick={()=> handleSubmitCreateUsers()}>
            Đồng Ý
          </Button>
        </Modal.Footer>
      </Modal>
                    
      </>
    )
}
export default ModalUpdateUser;