    import { memo } from "react";
    import "./style.scss";
    import Slider from "./slider";
    import Feel from "./Feel";
    import { useSelector } from "react-redux";
    const HomePage = () => {
      const  isAuthenticated = useSelector(state=>state.isAuthenticated)
      const  account = useSelector(state=>state.account)
        return (
      <>
        <Slider/>
            <section>
            <div className="container_sub">
            <div className="row-html section_item">
            <div className="col-lg-6-html col-md-6-html col-sm-6-html col-xs-12-html">
            <div className="hp_about_layout1_img">

                
                      <a href="#"> <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/fbcfb55f-d0ae-4a1c-8525-11bf9402c271/default_image_fbcfb55f-d0ae-4a1c-8525-11bf9402c271_microsoftteams-image-(6)_1678781743249.png"/></a>
                    
            
            </div>
            </div>
            <div className="col-lg-6-html col-md-6-html col-sm-6-html col-xs-12-html"> 
            <div className="hp_about_news">
            <h2>TIN NỔI BẬT</h2>
                      <ul>
                        <li>
                              <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/News/Media/Images/667f2a9a-ba27-401e-bbc5-a26f431a32d7/image_667f2a9a-ba27-401e-bbc5-a26f431a32d7_saeghbauehgbsaeg6-(2)_1727671516273.jpg"/>
                        </li>
                        <li>
                              <h6>RA MẮT APP IIG ELEARNING ỨNG DỤNG LUYỆN THI ...</h6>
                              <p>Tự hào là nền tảng học tập và luyện thi  ...</p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                              <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/News/Media/Images/55cf51c7-d58b-4034-b714-1f9095cef8ec/image_55cf51c7-d58b-4034-b714-1f9095cef8ec_suhdbrg-(3)_small_1721640705474.jpg"/>
                        </li>
                        <li>
                              <h6>Tiếp nối thành công của khóa học TOEIC Online 2 kỹ năng Listening & Reading ...</h6>
                              <p>Tiếp nối thành công của khóa học TOEIC Online...</p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                              <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/News/Media/Images/eb20b3c9-f659-4252-ae5b-6f36f5741924/image_eb20b3c9-f659-4252-ae5b-6f36f5741924_thumbnail-web_small_1711503188660.jpg"/>
                        </li>
                        <li>
                              <h6>Khóa học trực tuyến TOEIC SPEAKING & WRITING ...</h6>
                              <p>Tiếp nối thành công của lớp h ...</p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                              <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/News/Media/Images/40f8e42e-4873-4060-8180-73834e343066/image_40f8e42e-4873-4060-8180-73834e343066_thumbnail-web_small_1709104599955.jpg"/>
                        </li>
                        <li>
                              <h6>Lần đầu ra mắt "Bí kíp luyện rộng" TOEFL Primary Online ...</h6>
                              <p>Nối tiếp thành công các khóa tự học cho bài th ...</p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                              <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/News/Media/Images/0a5d2200-f546-4a6a-b413-0510cf959980/image_0a5d2200-f546-4a6a-b413-0510cf959980_uyhbsdghbakbfdakjhdfb_small_1705633428076.jpg"/>
                        </li>
                        <li>
                              <h6>HỌC TOEIC HĂNG SAY - QUÀ VNPAY TỚI NGAY ...</h6>
                              <p>Tin vui năm mới, khi nhập mã VNPAYIIG...</p>
                        </li>
                      </ul>
                      
                      
                    
              
            </div>

            </div>
          </div>
          
          </div>
            </section>
      
            <div className="hp_br" >
            <div className="container_sub">
                <br/>
                <br/>
                    <div className="title-html"> <h5>CÔNG CỤ ÔN THI</h5></div>
                  
              </div>
              



          
            <div className="container_sub">
                <br/>
                <br/>
                    <div className="title-html"> <h5>THI THỬ ONLINE</h5></div>
                    <div className="hp_br_card">
                      <ul>
                        <li>
                          <a href="">
                          <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/1ee3cb4d-21d8-4aa6-b913-b0b208eea190/default_image_1ee3cb4d-21d8-4aa6-b913-b0b208eea190_khoa-dao-tao_small_1678435926515.png"/>
                          <h4>Dành cho các khóa đào tạo</h4>
                          <button>Vào thi</button>
                          </a>
                        
                        </li>
                        <li>
                        <a href="">
                        <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/82950bd4-8fc6-4e27-be5d-d1861d547123/default_image_82950bd4-8fc6-4e27-be5d-d1861d547123_ts-tinh-thanh_small_1679274921593.png"/>
                          <h4>Dành cho các cuộc thi TOEIC</h4>
                          <button>Vào thi</button>
                            </a>
                        
                        </li>
                        <li>
                        <a href="">
                        <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/c1a11094-9c08-45a5-841e-e32f94c4840d/default_image_c1a11094-9c08-45a5-841e-e32f94c4840d_ts-tu-do_small_1678434843883.png"/>
                          <h4>Dành cho các thí sinh tự do</h4>
                          <button>Vào thi</button>
                            </a>
                      
                        </li>
                  
                
                    
                      </ul>
                    </div>
              </div>
              <div className="container_sub"> 
              <div className="evaluate-html">

    <Feel/>
    </div>
              </div>
            
              </div>
            
      </>
        )
    };
    export default memo(HomePage);