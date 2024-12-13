        import React, { memo, useState, useEffect, useRef } from "react";
        import './style.scss';
        import { LuShoppingCart } from "react-icons/lu";
        import { CgMail } from "react-icons/cg";
        import { MdOutlinePhoneInTalk } from "react-icons/md";
        import { ROUTERS } from "utils/router";
        import { postLoin, postRegister } from "Services/apiservices";
        import { Await } from "react-router-dom";
        import { toast } from "react-toastify";
        import { Link, useNavigate } from "react-router-dom";
        import { FaEye, FaEyeSlash, FaSpinner, FaUserGraduate } from "react-icons/fa";
        import { useDispatch, useSelector } from "react-redux";
        import { Button, NavDropdown } from "react-bootstrap";
        import { doLogin } from "utils/redux/action/useAction";
        import { IoIosNotificationsOutline } from "react-icons/io";
        import LogoSWB from '../../assets/logoswb (3).png' ;
        import { userLogout } from "utils/redux/action/useAction";
        import nProgress, { set } from "nprogress";
        const Header = (props) => {
            // loading login
            const [isloading, setLoading]=useState(false);
            const [shownati,setshownati]=useState(false);
            const handlenati= ()=>{
                setshownati(!shownati)
            }
            const dispatch1 = useDispatch();
            const  isAuthenticated = useSelector(state=>state.user.isAuthenticated)
            const  account = useSelector(state=>state.user.account)
            console.log(account.username);
            const handleLogout = () => {
                if (window.confirm("Bạn có chắc muốn đăng xuất?")) {
             
                    dispatch(userLogout()); // Call logout action if confirmed
                    nProgress.start();
                    setTimeout(() => {
                        nProgress.done(); // Kết thúc thanh tiến trình
                        navigate('/');
                    }, 2000);       
                }
            };
            const navigate=useNavigate();
            const [menus] = useState([
            {
                name: "Trang chủ",
                path: ROUTERS.USER.HOME,
            },
                {
                name: "Khóa tự học",
                path: ROUTERS.USER.RegisterExam,
            
                },
                {
                    name: "Thi thử Onine",
                    path: ROUTERS.USER.TestOnline,
                    
                },
                {
                    name: "Công cụ ôn thi",
                    path: ROUTERS.USER.Review,
                
                },
                {
                    name: "Tin tức",
                    path: ROUTERS.USER.NEWS,
                },
          
         
                // {
                //     name: "Admin",
                //     path: ROUTERS.USER.admin,
                
                // },
           
            
            
            
        ])

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [passwordrl, setPasswordrl] = useState("");
        const [rememberMe, setRememberMe] = useState(false);
        const [username,setUsername] = useState("");
        const [firtname, setFirtname]=useState("");
        const [lastname, setLastname] = useState("");
        const [dob, setDob]=useState("");
        const [isshowpassword,setShowpassword]= useState(false);
        const [isconfirmshowpassword,setConfirmShowpassword]= useState(false);
        const dispatch=useDispatch();
        const handleCloseLogin=()=>{
            setEmail("");
            setPassword("");
            setUsername("");
            setPasswordrl("");
            setFirtname("");
            setLastname("");
            setDob("");
        }
        
            const [isLoginBoxVisible, setLoginBoxVisible] = useState(false);
            const loginBoxRef = useRef(null); // Tham chiếu đến khung đăng nhập
            const regisBoxRef = useRef(null);
            const natiBoxRef = useRef(null);
            const toggleLoginBox = () => {
                setLoginBoxVisible(!isLoginBoxVisible);
            };
                const [isRegisBoxVisible, SetRegisBoxVisible] = useState(false);
        const toggleRegisBox=()=>{
            SetRegisBoxVisible(!isRegisBoxVisible);
        }
            // Hàm để đóng khung đăng nhập khi nhấn ra ngoài
            const handleClickOutside = (event) => {
               
                if (loginBoxRef.current && !loginBoxRef.current.contains(event.target)) {
                    handleCloseLogin();
                    setLoginBoxVisible(false);
                }
                else if (regisBoxRef.current && !regisBoxRef.current.contains(event.target)) {
                  
                    handleCloseLogin();
                    SetRegisBoxVisible(false);
                }
                else if (natiBoxRef.current && ! natiBoxRef.current.contains(event.target)){
               
                    setshownati(false);
                }
            };

            useEffect(() => {
                // Thêm sự kiện khi nhấn ra ngoài
                document.addEventListener('mousedown', handleClickOutside);
                return () => {
                    // Xóa sự kiện khi component bị hủy
                    document.removeEventListener('mousedown', handleClickOutside);
                };
            }, []);
           
        const handleLogin =async()=>{
            //validate
            if (!username) { 
                toast.error('Vui lòng nhập tên đăng nhập'); 
                return; } 
            if (!password) { 
                toast.error('Vui lòng nhập mật khẩu'); 
                return; 
            }
            setLoading(true);
            //submit apis
            const data = await postLoin(username,password);
          
            if(data && data.code===1000){
                
                dispatch(doLogin(data));
                // toast.success('Đăng nhập thành công');
                setLoading(false);
                navigate('/')
                setLoginBoxVisible(false);

            }
            else if(data.code === 406){
                toast.error('Tên đăng nhập không tồn tại')
                setLoading(false);
            }
            else if(data.code === 409){
                toast.error('Mật khẩu không đúng')
                setLoading(false);
            }
           
        }
        const validateEmail = (email) => {
            return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
        function validatePassword(password) {

            return /[A-Z]/       .test(password) &&
                   /[a-z]/       .test(password) &&
                   /[0-9]/       .test(password) &&
                   /[^A-Za-z0-9]/.test(password) &&
                   password.length > 8;
        
        }
        const handleRegister =async()=>{
            //validate
            const isValidEmail =validateEmail(email);
            const isValidPassword = validatePassword(password);
            if(!email){
                toast.error('Vui lòng nhập Email');
                return;
            }
            if(email != null && !isValidEmail){
             toast.error('Email không hợp lệ. Vui lòng nhập lại email đúng định dạng');
            return;
            }
            else if(!username){
            toast.error('Vui lòng nhập tên đăng nhập')
            return;
            }
            else if(!password){
                toast.error(`Vui lòng nhập mật khẩu`);
               return ;
           }
            else if(password!=null && !isValidPassword){
                 toast.error(`Mật khẩu phải từ
                    [*A-z, *a-z, *0-9, độ dài tối thiểu 8 ký tự]`);
                return ;
            }
            else if(!passwordrl){
                toast.error('Vui lòng nhập lại mật khẩu')
                return ;
            }
            else if (password!=passwordrl){
                toast.error('Mật khẩu không khớp')
                return;
            }
            else if (!firtname){
                toast.error('Vui lòng nhập tên')
                return;
            }
            else if (!lastname){
                toast.error('Vui lòng nhập tên đệm')
                return;
            }
            else if (!dob){
                toast.error('Vui lòng nhập ngày sinh')
                return;
            }
          
            //submit apis
            try{
            const data = await postRegister(email,password,username,firtname,lastname,dob)
            if(data && data.code ===1000){
                console.log(data)
                toast.success('Đăng ký tài khoản thành công');
                setPassword("");
                toggleRegisBox (false)
                setLoginBoxVisible(true);
            }else{
                toast.log(data.message);
            }
            if(data.code ===406){
                
            }
        }catch(error){
            toast.error('Có lỗi xảy ra. Vui lòng thử lại!'); 
            
         }
        }
          
        
       
            return (
                <>
                <div className="container-big set_zindex" >
        <div className="header_top">
            <div className="container_sub">
                    <div className="row-html">
                        <div className="col-6-html header_top_left">
                            <ul>
                                {/* <li>
                                    
                                <CgMail size={20}/>swb@gmail.com
                                </li> */}
                                <li>
                                    <span>
                                    <MdOutlinePhoneInTalk size={25}/>
                                    </span>
                                    <span>
                                    08888123213
                                    </span>
                           
                                </li>
                            </ul>
                        </div>

                   
                        <div className="col-6-html header_top_right">
                            <ul>
        
                                <li> 
                                                                 {/* open login */}
                        {isAuthenticated === false 
                        ?
                            <>
                                <span onClick={toggleLoginBox}>
                                                
                                                    <span className="login-html">
                                                        <button> Đăng nhập</button>
                                                        
                                                    </span>
                                    
                                    
                                    </span>
                                    <span onClick={toggleRegisBox}>
                                                <span className="login">
                                                    <button className="register-html"> Đăng ký</button>
                                                </span>
                                            
                                
                                </span>
                                
                                    {isLoginBoxVisible && (
                            <div id="login-box" className="modal-html">
                                <div className="modal-content" ref={loginBoxRef}>
                                    <div className="close-html" onClick={toggleLoginBox}>&times;</div>
                                    <h2>ĐĂNG NHẬP</h2>

                                    <input
                                    className="input-login"
                                        placeholder="Tên đăng nhập"
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)}
                                        
                                    />

        <div className="pass-group">
                                    <input
                                    className="input-login"
                                    placeholder="Mật khẩu"
                                        type={isshowpassword? 'text': 'password'}
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    {isshowpassword ?
                                    <span className="eye-password" onClick={()=>setShowpassword(false)}>
                                        <FaEye />
                                    </span>
                                    :
                                    <span className="eye-password" onClick={()=>setShowpassword(true)}>
                                <FaEyeSlash />
                                </span>
                                    }
                                    </div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={() => setRememberMe(!rememberMe)}
                                        />
                                        Ghi nhớ mật khẩu
                                    </label><br />
                                    <span className="login-button">
                                    <input type="button" value="Đăng Nhập" onClick={()=> handleLogin()} disabled={isloading}/>
                                    {isloading === true && <FaSpinner className="loader-Icon "/>}
                                  
                                    </span>
                                    
                               
                                    <div className="footer-links">
                                        <span>Bạn chưa có tài khoản? <span  
                                        className="login-now"
                                        onClick={(event)=>{
                                            event.preventDefault();
                                            setLoginBoxVisible(false);
                                            toggleRegisBox();
                                            
                                            }}
                                            >Đăng ký ngay</span> </span>
                                
                                    </div>
                                </div>
                            </div>
                        )}
        {/* //đăng ký */}
        {isRegisBoxVisible && (
                            <div id="login-box" className="modal-html">
                                <div className="modal-content" ref={regisBoxRef}>
                                    <div className="close-html" onClick={toggleRegisBox}>&times;</div>
                                    <h2>ĐĂNG KÝ</h2>
                                    <input
                                    className="input-login"
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        
                                    />
                                    <input
                                    className="input-login"
                                        placeholder="Tên đăng nhập"
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)}
                                        
                                    />

                                    <div className="pass-group">
                                    <input
                                    className="input-login"
                                    placeholder="Mật khẩu"
                                        type={isshowpassword? 'text': 'password'}
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    {isshowpassword ?
                                    <span className="eye-password" onClick={()=>setShowpassword(false)}>
                                        <FaEye />
                                    </span>
                                    :
                                    <span className="eye-password" onClick={()=>setShowpassword(true)}>
                                <FaEyeSlash />
                                </span>
                                    }
                                    </div>
                                    <div className="pass-group">
                                        <input
                                    className="input-login"
                                    placeholder="Nhập lại mật khẩu"
                                        type={isconfirmshowpassword?'text':'password'}
                                        id="passwordrl"
                                        name="passwordrl"
                                        value={passwordrl}
                                        onChange={(event) => setPasswordrl(event.target.value)}
                                    />
                                    

                                            {isconfirmshowpassword ?
                                    <span className="eye-password" onClick={()=>setConfirmShowpassword(false)}>
                                        <FaEye />
                                    </span>
                                    :
                                    <span className="eye-password" onClick={()=>setConfirmShowpassword(true)}>
                                <FaEyeSlash />
                                </span>
                                    }
                                        
                                    </div>
                                    <input
                                    className="input-login"
                                    placeholder="FirtName"
                                        type="text"
                                        id="firtname"
                                        name="firtname"
                                        value={firtname}
                                        onChange={(event) => setFirtname(event.target.value)}
                                    />
                                           <input
                                    className="input-login"
                                    placeholder="LastName"
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={lastname}
                                        onChange={(event) => setLastname(event.target.value)}
                                    />
                                    <div className="date-group">
                                    <input
                                        className="input-login"
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        value={dob}
                                        onChange={(event) => setDob(event.target.value)}
                                    />
                                    </div>

                                    
                                <br /><br />
                                    <input type="button" value="Đăng ký " onClick={()=> handleRegister()} />
                                    <div className="footer-links">
                                    <span onClick={(event) => { 
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
            SetRegisBoxVisible(!regisBoxRef); // Đóng trang đăng ký
            toggleLoginBox(); // Mở trang đăng nhập
        }}>
            Bạn đã có tài khoản? <span className="login-now">Đăng nhập ngay</span>
        </span>
                            
                                    </div>
                                </div>
                            </div>
                        )}
                        </>
                         :
                         <>
                           <span >

                                                
                                                <div className="api_user_noti">
                                                    <span className="api_user_noti_item1" onClick={()=>handlenati()}>
                                                    <IoIosNotificationsOutline size={30} /> 
                                                    </span>
                                                {shownati &&
                                                
                                                <>
                                                <div className="noti_item1" ref={natiBoxRef}>
                                                    Thông báo
                                                    <Link className="noti_item1_textLink">
                                                        xem tất cả
                                                    </Link>
                                                    <h4 className="noti_item1_text">
                                                        Không có thông báo nào
                                                    </h4>
                                                </div>
                                                </>
                                                }
                                                    <span>
                                                    <LuShoppingCart size={25}/>   
                                                    </span>
                                             
                                                </div>
                                
                                
                                </span>
                                <span >
                                            <span className="login">
                                            <NavDropdown title={<span><b  style={{ margin : '0px 10px'}}>{account.firtname}</b><FaUserGraduate size={25}/></span>} id="basic-nav-dropdown">
                        <NavDropdown.Item >Thông tin tài khoản</NavDropdown.Item>
                        <NavDropdown.Item> Thay đổi mật khẩu</NavDropdown.Item>
                        <NavDropdown.Item onClick={handleLogout}> Đăng xuất</NavDropdown.Item>
                   </NavDropdown> 
                                            </span>
                                        
                            
                            </span>
            
                        {/* <span className="api_user header_top_right_api_user_noti">
                        <IoIosNotificationsOutline />                   
                                               
                                
                        <LuShoppingCart />       
                        </span>
                        <span className="api_user header_top_right_api_user_info">
                                          
                                            <NavDropdown title="Tên người dùng" id="basic-nav-dropdown">
                        <NavDropdown.Item >Thông tin tài khoản</NavDropdown.Item>
                        <NavDropdown.Item> Thay đổi mật khẩu</NavDropdown.Item>
                        <NavDropdown.Item> Đăng xuất</NavDropdown.Item>
                   </NavDropdown> 
                                            
                                        
                            
                            </span> */}
                 
              
                   </>
                     } 
                                </li>
                        
                    {/* close login */}
                            
                            </ul> 
                        </div>
                        
                    
                    </div>
                </div>
            </div>
        <div className="container_banner head_bt_bg set_zindex2">
        <div className="row-html row-menu"> 
                <div  className="col-xl-3-html"  >
                    <div className="header_logo">
                        <img src={LogoSWB}/>
                    </div>
                </div>
                <div  className="col-xl-9-html "  >
                    <nav className="header_menu">
                        <ul>
                            {
                            menus?.map((menu , menuKey)=>(
                                <li key={menuKey} className={menuKey == 0 ? "active" : ""}> 
                                <a href={menu?.path}> {menu?.name}</a>
                                </li>
                            ))}
                
                        </ul>
                    </nav>
                  
                </div>
                {isAuthenticated === false ?
                ''
                :
                <div className="col-3-html">
                <Link  >
                <Button className="custom-button">Khóa học của tôi</Button>
                </Link>     
                    </div>
        }
                </div>
            </div>
        </div>
        <div className="push"></div> 
                </>
        
            )
        }
        export default memo(Header);