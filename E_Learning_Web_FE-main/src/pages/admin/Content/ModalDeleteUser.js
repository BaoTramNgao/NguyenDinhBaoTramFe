import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteUsers } from 'Services/apiservices';
const ModalDeleteUser = (props) =>{
    const {show, setShow,dataDelete} = props;
    const handleClose = () => setShow(false);
    const handleSubmitDeleteUser =async ()=> {
        let data = await  deleteUsers(dataDelete.id)
        if(data && data.EC ===0){
          toast.success(data.EM );
          handleClose();
        //   await props.fetchListUsers();
        props. setCurrentPage(1);
        await props.fetchlistUsersWithPaginate(1);

        }else{
          toast.error(data.EM)
        }
    }
      
    
return(

    <>

      <Modal 
      show={show} 
      onHide={handleClose} 
      backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete the User?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this user. email = <b>{dataDelete ? dataDelete.email: ""}</b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=> {handleSubmitDeleteUser()}}>
            Confirm
          </Button>
        </Modal.Footer>
     
      </Modal>
    </>
  )}

export default ModalDeleteUser