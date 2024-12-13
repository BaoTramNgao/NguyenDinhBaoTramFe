import ModalCeateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAllUsers,getUserWithPaginate } from "Services/apiservices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserpaginate";
      const ManageUser = (props)=> {   
        const LIMIT_USER = 5 ;
        const [pageCount,setpageCount]=useState(0);
        const [currentPage,setCurrentPage]= useState(1);
        const [ShowModalCreateUser,setShowModalCreateUser] = useState(false);
        const [ShowModalUpdateUser, setShowModalUpdateUser]= useState (false);
        const [ShowModalViewUser, setShowModalViewUser]= useState (false);
        const [dataUpdate, setDataUpdate] = useState ({});
        const [dataDelete, setDataDelete] = useState ({});
        const [listUsers, setListUsers] = useState ([]);
        const [showModalDeleteUser, setShowModalDeleteUser]= useState(false);
            //componentDidMount
        useEffect(()=>{
        // fetchlistUsers();
        fetchlistUsersWithPaginate(1);
        },[]);
        const fetchlistUsers = async() =>{
        let res = await getAllUsers();
        if (res.EC === 0 ){
            setListUsers(res.DT)
        }
    
        }  
        const fetchlistUsersWithPaginate = async(page) =>{
            let res = await getUserWithPaginate(page, LIMIT_USER)
    
            if (res.EC === 0 ){
                setListUsers(res.DT.users);
                setpageCount(res.DT.totalPages);
            }
        
            }  
        const handleClickBtnUpdateUser=(user)=>{
            setShowModalUpdateUser(true);
            setDataUpdate(user)// Truyền data từ listuser vào DataUpdate
        
  
        }
        const handleClickBtnViewUser=(user)=>{
            setShowModalViewUser(true);
            setDataUpdate(user)
            
  
        }
        const handleClickBtnDeleteUser=(user) => {
            setShowModalDeleteUser(true);
            setDataDelete(user);

        }
        const resetUpdate=()=>{
            setDataUpdate({});
        }//reset lai data khi nguoi dung click lai update
        return (
              <div className="manage-users-container">
                  <div className="manage-title">
                  ManageUser
                  </div>
              <div className="users-content "> 
                  <div className="btn-add-new">
                  <button className="btn btn-primary " onClick={()=> setShowModalCreateUser(true)}><FcPlus/>Add new user</button>
                  </div>
                  <div className="table-users-container" >
                    {/* <TableUser 
                    handleClickBtnDeleteUser={handleClickBtnDeleteUser}
                    handleClickBtnViewUser={handleClickBtnViewUser}
                    handleClickBtnUpdateUser={handleClickBtnUpdateUser}
                    listUsers={listUsers}         
                    /> */}
                    <TableUserPaginate
                        handleClickBtnDeleteUser={handleClickBtnDeleteUser}
                        handleClickBtnViewUser={handleClickBtnViewUser}
                        handleClickBtnUpdateUser={handleClickBtnUpdateUser}
                        listUsers={listUsers} 
                        fetchlistUsersWithPaginate ={fetchlistUsersWithPaginate }
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                  </div>
                  <ModalCeateUser 
                  setShow={setShowModalCreateUser}
                  show={ShowModalCreateUser}
                  fetchListUsers ={fetchlistUsers}
                  fetchlistUsersWithPaginate ={fetchlistUsersWithPaginate }
                  currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                  />
                    <ModalUpdateUser 
                  show={ShowModalUpdateUser}
                  setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers ={fetchlistUsers}
                    resetUpdate={resetUpdate}
                    fetchlistUsersWithPaginate ={fetchlistUsersWithPaginate }
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}

              />
              <ModalViewUser
     
                show={ShowModalViewUser}
                setShow={setShowModalViewUser}
                  dataUpdate={dataUpdate}
                  fetchListUsers ={fetchlistUsers}
                  resetUpdate={resetUpdate}
                  fetchlistUsersWithPaginate ={fetchlistUsersWithPaginate }
                  currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
             
              />
              <ModalDeleteUser
              show={showModalDeleteUser}
              setShow={setShowModalDeleteUser}
              fetchListUsers ={fetchlistUsers}
              dataDelete={dataDelete}
              fetchlistUsersWithPaginate ={fetchlistUsersWithPaginate }
              currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
              />
              </div> 


              </div>
          )
      }
      export default ManageUser;