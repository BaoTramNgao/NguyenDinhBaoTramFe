import React ,{ memo ,useState} from "react"
import { FaStar } from "react-icons/fa";

const TestBank= ()=>{
        // Logic TOEIC Listening & Reading
        const length = 3;
        const [showMore, setShowMore] = useState(0);
        const handleShowMore = () => {
            {showMore < length ? setShowMore(showMore+1): setShowMore(0)}
        };
        // Logic TOEIC Speaking & Writing
        const length1 =3;
        const [showMore1, setShowMore1] = useState(0)
        const handleShowMore1=()=>{
            {showMore1 < length1 ? setShowMore1(showMore1 +1) : setShowMore1(0)}
        }
return(
    <>
    {/*Open TOEIC Listening & Reading */}
    <div className="Regis_Ex-List">
                <h3>TOEIC Listening & Reading</h3>
                <ul>
               
                <li>
                        <div className="Regis_Ex-List_card">
                           
                           <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/49891b8d-e026-4093-be5c-6ec141c934fd/image_49891b8d-e026-4093-be5c-6ec141c934fd_sw-1_small_1727939326469.png"/>
                           <span  className="Regis_Ex-List_card_item">
                           <h5>TOEIC Speaking & Writing Level 1</h5>
                           <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                           <span className="monney_container">
                           <span className="monney_left">2.830.000đ</span>
                           <span className="monney_right">1.990.000đ</span>
                           </span>
                        
                           <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                           </span>
                        </div>
                    </li>
                    <li>
                        <div className="Regis_Ex-List_card">
                           
                           <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/49891b8d-e026-4093-be5c-6ec141c934fd/image_49891b8d-e026-4093-be5c-6ec141c934fd_sw-1_small_1727939326469.png"/>
                           <span  className="Regis_Ex-List_card_item">
                           <h5>TOEIC Speaking & Writing Level 1</h5>
                           <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                           <span className="monney_container">
                           <span className="monney_left">2.830.000đ</span>
                           <span className="monney_right">1.990.000đ</span>
                           </span >
                        
                           <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                           </span>
                        </div>
                    </li>
                    <li>
                        <div className="Regis_Ex-List_card">
                           
                           <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/49891b8d-e026-4093-be5c-6ec141c934fd/image_49891b8d-e026-4093-be5c-6ec141c934fd_sw-1_small_1727939326469.png"/>
                           <span  className="Regis_Ex-List_card_item">
                           <h5>TOEIC Speaking & Writing Level 1</h5>
                           <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                           <span className="monney_container">
                           <span className="monney_left">2.830.000đ</span>
                           <span className="monney_right">1.990.000đ</span>
                           </span>
                        
                           <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                           </span>
                        </div>
                    </li>
                    <li>
                        <div className="Regis_Ex-List_card">
                           
                           <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/8a3d2fc0-13e2-47e7-89ff-ed8128f7d773/image_8a3d2fc0-13e2-47e7-89ff-ed8128f7d773_sw-2_small_1729579320509.png"/>
                           <span  className="Regis_Ex-List_card_item">
                           <h5>TOEIC Speaking & Writing Level 2</h5>
                           <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                           <span className="monney_container">
                           <span className="monney_left">2.830.000đ</span>
                           <span className="monney_right">1.990.000đ</span>
                           </span>
                        
                           <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                           </span>
                        </div>
                    </li>
                    { showMore >= 1 && (
                    <>
                        <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/e27432db-ec4e-4793-911b-c12674da61fd/image_e27432db-ec4e-4793-911b-c12674da61fd_toeic-compact-450_small_1727939220529.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 450+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/e27432db-ec4e-4793-911b-c12674da61fd/image_e27432db-ec4e-4793-911b-c12674da61fd_toeic-compact-450_small_1727939220529.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 450+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/00930b89-738f-428b-aa93-0b4c902df97e/image_00930b89-738f-428b-aa93-0b4c902df97e_toeic-compact-650_small_1727939239873.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 650+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card"> xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/91a1ba32-8bb6-4e0d-994a-564157dd87f0/image_91a1ba32-8bb6-4e0d-994a-564157dd87f0_pre-toeic_small_1727939114432.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>DÀNH CHO NGƯỜI MỚI BẮT ĐẦU</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">990.000đ</span>
                                   <span className="monney_right">490.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                   </>
                  
         ) }
          { showMore >=2 && (
                    <>
                        <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/e27432db-ec4e-4793-911b-c12674da61fd/image_e27432db-ec4e-4793-911b-c12674da61fd_toeic-compact-450_small_1727939220529.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 450+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/e27432db-ec4e-4793-911b-c12674da61fd/image_e27432db-ec4e-4793-911b-c12674da61fd_toeic-compact-450_small_1727939220529.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 450+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/00930b89-738f-428b-aa93-0b4c902df97e/image_00930b89-738f-428b-aa93-0b4c902df97e_toeic-compact-650_small_1727939239873.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 650+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/91a1ba32-8bb6-4e0d-994a-564157dd87f0/image_91a1ba32-8bb6-4e0d-994a-564157dd87f0_pre-toeic_small_1727939114432.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>DÀNH CHO NGƯỜI MỚI BẮT ĐẦU</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">990.000đ</span>
                                   <span className="monney_right">490.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                   </>
                  
         ) }
            { showMore >= 3 && (
                    <>
                       
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/00930b89-738f-428b-aa93-0b4c902df97e/image_00930b89-738f-428b-aa93-0b4c902df97e_toeic-compact-650_small_1727939239873.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 650+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/91a1ba32-8bb6-4e0d-994a-564157dd87f0/image_91a1ba32-8bb6-4e0d-994a-564157dd87f0_pre-toeic_small_1727939114432.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>DÀNH CHO NGƯỜI MỚI BẮT ĐẦU</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">990.000đ</span>
                                   <span className="monney_right">490.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                   </>
                  
         ) }
               
                </ul>

                <div className="see_More">
                    <h5 onClick={handleShowMore} >
                    {showMore < length ? 'Xem thêm' : 'Thu gọn'}
                    </h5>
      

                </div>

            </div>
           {/*Close TOEIC Listening & Reading */}
               {/* Open TOEIC Speaking & Writing */}
            <div className="Regis_Ex-List">
                <h3>TOEIC Speaking & Writing</h3>
                <ul>
               
                <li>
                        <div className="Regis_Ex-List_card">
                           
                           <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/49891b8d-e026-4093-be5c-6ec141c934fd/image_49891b8d-e026-4093-be5c-6ec141c934fd_sw-1_small_1727939326469.png"/>
                           <span  className="Regis_Ex-List_card_item">
                           <h5>TOEIC Speaking & Writing Level 1</h5>
                           <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                           <span className="monney_container">
                           <span className="monney_left">2.830.000đ</span>
                           <span className="monney_right">1.990.000đ</span>
                           </span>
                        
                           <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                           </span>
                        </div>
                    </li>
                    <li>
                        <div className="Regis_Ex-List_card">
                           
                           <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/49891b8d-e026-4093-be5c-6ec141c934fd/image_49891b8d-e026-4093-be5c-6ec141c934fd_sw-1_small_1727939326469.png"/>
                           <span  className="Regis_Ex-List_card_item">
                           <h5>TOEIC Speaking & Writing Level 1</h5>
                           <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                           <span className="monney_container">
                           <span className="monney_left">2.830.000đ</span>
                           <span className="monney_right">1.990.000đ</span>
                           </span>
                        
                           <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                           </span>
                        </div>
                    </li>
                    <li>
                        <div className="Regis_Ex-List_card">
                           
                           <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/49891b8d-e026-4093-be5c-6ec141c934fd/image_49891b8d-e026-4093-be5c-6ec141c934fd_sw-1_small_1727939326469.png"/>
                           <span  className="Regis_Ex-List_card_item">
                           <h5>TOEIC Speaking & Writing Level 1</h5>
                           <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                           <span className="monney_container">
                           <span className="monney_left">2.830.000đ</span>
                           <span className="monney_right">1.990.000đ</span>
                           </span>
                        
                           <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                           </span>
                        </div>
                    </li>
                    <li>
                        <div className="Regis_Ex-List_card">
                           
                           <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/8a3d2fc0-13e2-47e7-89ff-ed8128f7d773/image_8a3d2fc0-13e2-47e7-89ff-ed8128f7d773_sw-2_small_1729579320509.png"/>
                           <span  className="Regis_Ex-List_card_item">
                           <h5>TOEIC Speaking & Writing Level 2</h5>
                           <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                           <span className="monney_container">
                           <span className="monney_left">2.830.000đ</span>
                           <span className="monney_right">1.990.000đ</span>
                           </span>
                        
                           <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                           </span>
                        </div>
                    </li>
                    { showMore1 >= 1 && (
                    <>
                        <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/e27432db-ec4e-4793-911b-c12674da61fd/image_e27432db-ec4e-4793-911b-c12674da61fd_toeic-compact-450_small_1727939220529.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 450+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/e27432db-ec4e-4793-911b-c12674da61fd/image_e27432db-ec4e-4793-911b-c12674da61fd_toeic-compact-450_small_1727939220529.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 450+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/00930b89-738f-428b-aa93-0b4c902df97e/image_00930b89-738f-428b-aa93-0b4c902df97e_toeic-compact-650_small_1727939239873.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 650+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/91a1ba32-8bb6-4e0d-994a-564157dd87f0/image_91a1ba32-8bb6-4e0d-994a-564157dd87f0_pre-toeic_small_1727939114432.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>DÀNH CHO NGƯỜI MỚI BẮT ĐẦU</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">990.000đ</span>
                                   <span className="monney_right">490.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                   </>
                  
         ) }
          { showMore1 >=2 && (
                    <>
                        <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/e27432db-ec4e-4793-911b-c12674da61fd/image_e27432db-ec4e-4793-911b-c12674da61fd_toeic-compact-450_small_1727939220529.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 450+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/e27432db-ec4e-4793-911b-c12674da61fd/image_e27432db-ec4e-4793-911b-c12674da61fd_toeic-compact-450_small_1727939220529.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 450+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/00930b89-738f-428b-aa93-0b4c902df97e/image_00930b89-738f-428b-aa93-0b4c902df97e_toeic-compact-650_small_1727939239873.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 650+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/91a1ba32-8bb6-4e0d-994a-564157dd87f0/image_91a1ba32-8bb6-4e0d-994a-564157dd87f0_pre-toeic_small_1727939114432.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>DÀNH CHO NGƯỜI MỚI BẮT ĐẦU</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">990.000đ</span>
                                   <span className="monney_right">490.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                   </>
                  
         ) }
            { showMore1 >= 3 && (
                    <>
                       
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/00930b89-738f-428b-aa93-0b4c902df97e/image_00930b89-738f-428b-aa93-0b4c902df97e_toeic-compact-650_small_1727939239873.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>TOEIC COMPACT ONLINE 650+</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">1.675.000đ</span>
                                   <span className="monney_right">1.179.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                            <li>
                                <div className="Regis_Ex-List_card">
                                   
                                   <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/91a1ba32-8bb6-4e0d-994a-564157dd87f0/image_91a1ba32-8bb6-4e0d-994a-564157dd87f0_pre-toeic_small_1727939114432.png"/>
                                   <span  className="Regis_Ex-List_card_item">
                                   <h5>DÀNH CHO NGƯỜI MỚI BẮT ĐẦU</h5>
                                   <span className="Rating"><span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span> 5 (100tr)</span>
                                   <span className="monney_container">
                                   <span className="monney_left">990.000đ</span>
                                   <span className="monney_right">490.000đ</span>
                                   </span>
                                
                                   <button className="Regis_Ex-List_card_item-bttn-card">xem chi tiết</button>
                                   </span>
                                </div>
                            </li>
                   </>
                  
         ) }
               
                </ul>

                <div className="see_More">
                    <h5 onClick={handleShowMore1} >
                    {showMore1 < length1 ? 'Xem thêm' : 'Thu gọn'}
                    </h5>
      

                </div>

            </div>
           {/*Close TOEIC Speaking & Writing */}
    </>
)
}
export default memo(TestBank);