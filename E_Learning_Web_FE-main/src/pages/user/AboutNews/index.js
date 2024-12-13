        import React, { memo,useRef, useState } from "react";
        import './style.scss';
        const AboutNews = () =>{
        const section1Ref = useRef(null);
        const section2Ref = useRef(null);
        const section3Ref = useRef(null);
        const section4Ref = useRef(null);
        const [isactive,setIsactive]  = useState(null);
     
  
    const scrollToSection = (ref,index)=>{
        ref.current.scrollIntoView({
            behavior: 'smooth' });
        setIsactive(index);
    
    }
            return (
                <>
                <div className="container-big bg_sub">
                    <div className="container_sub">
                        <div className="menu_news">
                            <ul>
                            <li onClick={()=>{scrollToSection(section1Ref,0)}} className={isactive==0 ? 'menu_news_active': ''}>Tin tức</li>
                            <li onClick={()=>{scrollToSection(section2Ref,1)}} className={isactive==1 ? 'menu_news_active': ''}>Quy đinh - Hướng dẫn</li>
                            <li onClick={()=>{scrollToSection(section3Ref,2)}} className={isactive==2 ? 'menu_news_active': ''}>Thư viện</li>
                            <li onClick={()=>{scrollToSection(section4Ref,3)}} className={isactive==3 ? 'menu_news_active': ''}>Sự kiện</li>
                            </ul>
                        </div>    
                        </div>



                        <div className="container_sub">
                        <div className="news_banner">
                        <ul>
                            <li className="news_banner_bn banner"> 
                                <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/News/Media/Images/667f2a9a-ba27-401e-bbc5-a26f431a32d7/image_667f2a9a-ba27-401e-bbc5-a26f431a32d7_saeghbauehgbsaeg6-(2)_1727671516273.jpg"/>
                                <h2>RA MẮT APP IIG ELEARNING ỨNG DỤNG LUYỆN THI TOEIC ĐẦU TIÊN MÔ PHỎNG 100% THI THẬT</h2>
                            </li>
        
                            <li className="news_banner_bn"> 
                                <div className="news_banner_bn-card">
                                <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/News/Media/Images/55cf51c7-d58b-4034-b714-1f9095cef8ec/image_55cf51c7-d58b-4034-b714-1f9095cef8ec_suhdbrg-(3)_small_1721640705474.jpg"/>
                                <h2>KHÓA HỌC TOEIC SPEAKING & WRITING ONLINE CHÍNH THỨC RA MẮT, ỨNG DỤNG CÔNG NGHỆ CHẤM CHỮA HÀNG ĐẦU</h2>
                                <p>Tiếp nối thành công của khóa học TOEIC Online 2 kỹ năng Listening & Reading, IIG Việt Nam vừa chính thức cho ra mắt khóa học TOEIC Online Speaking & Writing, hoàn thiện lộ trình học TOEIC 4 kỹ năng, tiết kiệm thời gian bứt tốc đạt mục tiêu điểm số.</p>
                                </div>
                               
                            </li>
                            <li className="news_banner_bn"> 
                            <div className="news_banner_bn-card">
                                <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/News/Media/Images/b5550ac5-d5a5-4b7c-9bf5-41af0a93466a/image_b5550ac5-d5a5-4b7c-9bf5-41af0a93466a_dfgdfsdf_small_1718425624338.jpg"/>
                                <h2>Chính thức lên sóng “Bộ quà tặng TOEIC” độc quyền tại IIG Việt Nam tháng 6 này</h2>
                                <p>
                                Chính thức từ 15/06/2024, IIG Việt Nam ra mắt BỘ QUÀ TẶNG TOEIC trị giá 500.000 VNĐ nhằm mục đích nâng cao trải nghiệm, mang đến những quyền lợi, ưu đãi tốt nhất cho tất cả các học viên.
                                </p>
                                </div>
                            </li>
                            
                            
                        </ul>
                        </div>
                        </div>


























                    <div ref={section1Ref} >
                    <h2>Section 1</h2>
                    </div>
                    <div ref={section2Ref} >
                    <h2>Section 2</h2>
                    </div>
                    <div ref={section3Ref} >
                    <h2>Section 3</h2>
                    </div>
                    <div ref={section4Ref} >
                    <h2>Section 4</h2>
                    </div>
                   

                </div>
                </>
            )
        }
        export default memo( AboutNews);