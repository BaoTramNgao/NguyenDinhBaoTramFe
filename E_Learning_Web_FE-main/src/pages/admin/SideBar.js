import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from 'react-pro-sidebar';
  import { RiAdminFill } from "react-icons/ri";
  import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
  import sidebarBg from '../../assets/bg-admin.jpg';
  import bgsidebar from '../../assets/lg.jpg';
import { MdDashboard } from 'react-icons/md';
const SideBar = (props) =>{
    const { image, collapsed, toggled, handleToggleSidebar } =props
    return(
        <>
    <ProSidebar
      image= {sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
       <RiAdminFill size={'3em'} color={"00bfff"}/>
       <span>Admin</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<MdDashboard />}
 
          >
           dashboard
           <Link to="/admins"/>
          </MenuItem>

        </Menu>
        <Menu iconShape="circle">
          <SubMenu

            
            icon={<FaGem />}
            title="Features"

          >
            <MenuItem>
            Quản lý User
            <Link to="/admins/manage-users"/> 
            </MenuItem>
            <MenuItem> Quản lý bài thi</MenuItem>
            <MenuItem> </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
{/* 
      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
            viewSource
            </span>
          </a>
        </div>
      </SidebarFooter> */}
    </ProSidebar>
        </>
    )
}



export default SideBar;