import { memo } from "react";
import "./style.scss";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FaAward, FaFacebook } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const Footer= () => {
    return (

        <div className="container-big">
       
    <div className="footer-html">
    <div className="container_sub">
        <div className="row">
        <div className="col-lg-3-html col-md-6-html col-sm-6-html col-xs-12-html"> 
        <div className="footer_about">
            <h1 className="footer_about_logo">SWB E-Learning</h1>
            <ul>
                <li className="footer_about_item"><MdOutlinePhoneInTalk size={25}/><span><b>888123213</b></span></li>
                <li className="footer_about_item"><CgMail size={25}/><span><b>swbe@gmail.com</b></span></li>
                <li className="footer_about_item">
                    <a href="#"> <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"/></a>
                    <a href="#"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png"/></a>
                    <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"/></a>
                </li>
            </ul>
        </div>
            
        </div>
        <div className="col-lg-6-html col-md-6-html col-sm-6-html col-xs-12-html">
            <div className="footer_mid">
                <h6>
                    THÔNG TIN
                </h6>
                <ul>
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                
                    
                </ul>
                <ul>
              
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                    
                </ul>
            </div>
        </div>

        <div className="col-lg-3-html col-md-12-html .col-sm-12-html col-xs-12-html" >
        <div className="footer_mid">
                <h6>
                    LIÊN KẾT
                </h6>
                <ul>
                    <li>
                        <a href="#">Chính sách bảo mật</a>
                      
                      
                    </li>
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                    <li className="footer_mid_item_last"> <FaAward  size={90}/></li>
                 
                    
                </ul>
            
            </div>
        </div>    
         </div>
         <div className="coppyright">
            <hr/>
        <p>Copyright by SWB Vietnam 2024. All rights reserved.</p>
         </div>

     
         </div>
              </div>
        </div>

    

   
  
    );
    
};
export default memo(Footer);