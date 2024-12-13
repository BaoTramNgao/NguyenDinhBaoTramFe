  import { memo, useEffect, useRef,useState } from "react";
  import "./style.scss";
  import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
  const Slider= () => {
    const listImagesRef = useRef(null);
    const imgsRef = useRef([]);
    const btn_leftRef = useRef(null);
    const btn_rightRef = useRef(null);
    const [current, setCurrent] = useState(0);

    const changHandleChangeSlide = () => {
      setCurrent(prev => {
        const next = prev + 1;
        return next >= imgsRef.current.length ? 0 : next;
      });
    };

    useEffect(() => {
      const imgs = listImagesRef.current.getElementsByTagName('img');
      imgsRef.current = imgs; 

      const intervalId = setInterval(changHandleChangeSlide, 30000);

      btn_rightRef.current.addEventListener('click', () => {
        setCurrent(prev => (prev + 1) % imgsRef.current.length);
      });

      btn_leftRef.current.addEventListener('click', () => {
        setCurrent(prev => (prev - 1 + imgsRef.current.length) % imgsRef.current.length);
      });

      return () => {
        clearInterval(intervalId); // Dọn dẹp DOM
        btn_rightRef.current.removeEventListener('click', () => {});
        btn_leftRef.current.removeEventListener('click', () => {});
      };
    }, []);

    useEffect(() => {
      if (imgsRef.current.length > 0) {
        const width = imgsRef.current[0].offsetWidth;
        listImagesRef.current.style.transform = `translateX(${-width * current}px)`;
        const indexItems = document.querySelectorAll('.index_images_item');
        indexItems.forEach((item, index) => {
          item.classList.remove('active');
          if (index === current) {
            item.classList.add('active');
          }
        });
      }
    }, [current]);
    return (

      <>
        <div className="container-big">
        

      <div className="slider_show">
        <div className="list_images" ref={listImagesRef}>
        <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/2223af49-a76a-48a3-adb7-6a1782ea1974/default_image_2223af49-a76a-48a3-adb7-6a1782ea1974_1921-x-641-3-(3)-(6)_1727235877319.jpg"></img>
        <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/191b6f62-aba8-48d3-84b5-50fc37fe0ddf/default_image_191b6f62-aba8-48d3-84b5-50fc37fe0ddf_1921-x-641-(8)_1727235862347.jpg"></img>
        <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/bb0c9fc2-374e-4be7-82f3-ba70c1205768/default_image_bb0c9fc2-374e-4be7-82f3-ba70c1205768_1921-x-641-4-(7)_1727235891010.jpg"></img>
        <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/cd4bdcaa-fa00-4c15-95d4-ba98c92e46b0/default_image_cd4bdcaa-fa00-4c15-95d4-ba98c92e46b0_1921-x-641-5-(8)_1727235906520.jpg"></img>
        <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/a0e57334-42be-4c8e-8f4a-e6a1f53f675e/default_image_a0e57334-42be-4c8e-8f4a-e6a1f53f675e_microsoftteams-image_1702440197168.png"></img>
        </div>
        <div className="btns-html">
          <div className="btn_left btn-html" ref={btn_leftRef}>
          <IoIosArrowBack />
          </div>
          <div className="btn_right btn-html" ref={btn_rightRef}>  
          <IoIosArrowForward />
          </div>
        </div>
        <div className="index_images">
          <div className="index_images_item index_images_item_1"> </div>
          <div className="index_images_item index_images_item_2"> </div>
          <div className="index_images_item index_images_item_3"> </div>
          <div className="index_images_item index_images_item_4"> </div>
          <div className="index_images_item index_images_item_5"> </div>
          </div>
        </div>
        
      </div>
    
      </>
    );
  }

  export default memo(Slider);