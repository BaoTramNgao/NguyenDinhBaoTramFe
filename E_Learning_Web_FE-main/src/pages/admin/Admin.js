
import { memo, useState } from "react";
import React from "react";
import Sidebar from "./SideBar";
import './style.scss';
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Admin = () =>{
    const [collapsed,setcollapsed]= useState (false);
    return(
        <div className="admin-container">
            <div className="admin-sidebar">
        <Sidebar collapsed={collapsed}/>

            </div>
            <div className="admin-content">
                <div className="admin-header">
                <FaBars onClick={()=>setcollapsed(!collapsed)} size={30}/>
 
                </div>
                <div className="admin-main">
                    <Outlet/>
                
                </div>
              
            </div>

        </div>
    )
}
export default memo (Admin);