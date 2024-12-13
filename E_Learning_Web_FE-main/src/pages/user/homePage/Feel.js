import { memo, useEffect, useRef, useState} from "react";
import "./style.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
  const Feel= () => {
    const listfeelRef = useRef(null);
    const feelsRef = useRef([]);
    const feel_leftRef = useRef(null);
    const feel_rightRef = useRef(null);
    const [current, setCurrent] = useState(0);

    const changHandleChangeSlide = () => {
        setCurrent(prev => {
            const next = prev + 1;
            return next >= Math.ceil(feelsRef.current.length / 2) ? 0 : next; // Chia cho 2
        });
    };

    useEffect(() => {
        if (listfeelRef.current) {
            const feels = listfeelRef.current.getElementsByTagName('li');
            feelsRef.current = feels;

            const intervalId = setInterval(changHandleChangeSlide, 30000);

            if (feel_rightRef.current) {
                feel_rightRef.current.addEventListener('click', () => {
                    setCurrent(prev => (prev + 1) % Math.ceil(feelsRef.current.length / 2));
                });
            }

            if (feel_leftRef.current) {
                feel_leftRef.current.addEventListener('click', () => {
                    setCurrent(prev => (prev - 1 + Math.ceil(feelsRef.current.length / 2)) % Math.ceil(feelsRef.current.length / 2));
                });
            }

            return () => {
                clearInterval(intervalId);
                if (feel_rightRef.current) {
                    feel_rightRef.current.removeEventListener('click', () => {});
                }
                if (feel_leftRef.current) {
                    feel_leftRef.current.removeEventListener('click', () => {});
                }
            };
        }
    }, []);

    useEffect(() => {
        if (feelsRef.current.length > 0) {
            Array.from(feelsRef.current).forEach((feel, index) => {
                feel.style.display = index >= current * 2 && index < current * 2 + 2 ? 'block' : 'none';
            });
            
        }
    }, [current]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); 
    };



    return (

      <>
        <h1 className="title_feel">CẢM NHẬN CỦA KHÁCH HÀNG</h1>
    <div className="slider_show">
      <div className="list_feel" ref={listfeelRef}>
      <ul>
 
      <li>
            <div className="feel_card">
              <span className="feel_card-image">
                <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/6805306d-6dc3-4d3d-a3c7-f728fb3947b0/default_image_6805306d-6dc3-4d3d-a3c7-f728fb3947b0_microsoftteams-image-(82)_1679371984039.png"/>
              </span> 
              <span className="feel_card-info">   
                <strong> Đức Anh</strong>
                <h6>910/990 TOEIC</h6>
                <h4>"Bộ đề thi thử có format giống 100% để thì thật và trực tiếp từ ETS nên mình rất yên tâm, thi xong thấy rất sát đề thi thật."</h4>
              </span>
            </div>
        </li>
        <li>
            <div className="feel_card">
              <span className="feel_card-image">
                <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/50dd6e7c-9b34-4481-89e8-83f27ad30491/default_image_50dd6e7c-9b34-4481-89e8-83f27ad30491_microsoftteams-image-(81)_1679372000491.png"/>
              </span> 
              <span className="feel_card-info">   
                <strong> Trần Lâm Uyên</strong>
                <h6>825/990 TOEIC</h6>
                <h4>"Em thi TOEIC 2 lần, lần đầu em mua công cụ ôn TOEIC OLPC Module 2-3, đợt sau em mua bộ để thỉ thử TOEIC để luyện để nên đi thì tự tin hẳn."</h4>
              </span>
            </div>
        </li>
        <li>
            <div className="feel_card">
              <span className="feel_card-image">
                <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/8544212f-24c3-41dd-8c7c-372c041f721e/default_image_8544212f-24c3-41dd-8c7c-372c041f721e_microsoftteams-image-(80)_1679372014800.png"/>
              </span> 
              <span className="feel_card-info">   
                <strong> Trần Đức Thành</strong>
                <h6>910/990 TOEIC</h6>
                <h4>"Mình tăng 230 điểm trong 1 tháng chỉ với OLPC. Đây là khóa học rất hiệu quả và tiết kiệm, phù hợp cho bạn nào muốn tăng điểm cấp tốc như mình."</h4>
              </span>
            </div>
        </li>
        <li>
            <div className="feel_card">
              <span className="feel_card-image">
                <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/0c0c3c13-76dd-413a-b14e-d498c94d7a40/default_image_0c0c3c13-76dd-413a-b14e-d498c94d7a40_microsoftteams-image-(84)_1679372030960.png"/>
              </span> 
              <span className="feel_card-info">   
                <strong> Nguyễn Thị Minh Hằng</strong>
                <h6>860/990 TOEIC</h6>
                <h4>"Mình sử dụng bộ đề thi thử TOEIC trước khi thi. Bộ để giúp mình xác định rõ mục tiêu, làm quen với format để thì và tự áp lực thời gian như thì thật"</h4>
              </span>
            </div>
        </li>
        <li>
            <div className="feel_card">
              <span className="feel_card-image">
                <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/bb850432-467d-4fcf-afef-4e3101fc0243/default_image_bb850432-467d-4fcf-afef-4e3101fc0243_doan-lan-huong-20220307095152-e_1677036052626.png"/>
              </span> 
              <span className="feel_card-info">   
                <strong> Đoàn Lan Hương</strong>
                <h6>950/990 TOEIC</h6>
                <h4>"Bộ đề thi thử TOEIC của IIG thật sự hữu ích. Những từ vựng và cấu trúc rất trọng tâm đã giúp mình nâng band điểm từ 795 lên 900+ chỉ trong 2 tuần."</h4>
              </span>
            </div>
        </li>
        <li>
            <div className="feel_card">
              <span className="feel_card-image">
                <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/3aaafd42-0d8d-4d69-8372-1acde5f229bc/default_image_3aaafd42-0d8d-4d69-8372-1acde5f229bc_microsoftteams-image-(83)_1679372045597.png"/>
              </span> 
              <span className="feel_card-info">   
                <strong> Nguyễn Ngọc Trai</strong>
                <h6>860/990 TOEIC</h6>
                <h4>"Với một bộ đề thi thử từ ETS, mình chỉ tập trung vào kỹ năng mình yếu hơn và dần hoàn thiện nó. Mình đã tăng thêm 80 điểm Listening và 50 điểm Reading."</h4>
              </span>
            </div>
        </li>
      </ul>
      </div>
      <div className="btns-html">
        <div className="btn_left_feel btn-html" ref={feel_leftRef} onClick={handlePrev}>
        <IoIosArrowBack />
        </div>
        <div className="btn_right_feel btn-html" ref={feel_rightRef} onClick={handleNext}>  
        <IoIosArrowForward />
        </div>
      </div>
      <div className="index_images">
                <div className={`index_images_item index_images_item_1 ${currentIndex === 0 ? 'active_feel' : ''}`}></div>
                <div className={`index_images_item index_images_item_2 ${currentIndex === 1 ? 'active_feel' : ''}`}></div>
                <div className={`index_images_item index_images_item_3 ${currentIndex === 2 ? 'active_feel' : ''}`}></div>
            </div>
      </div>
      </>
    );
  }
  
  export default memo(Feel);

