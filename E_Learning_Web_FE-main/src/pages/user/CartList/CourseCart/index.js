import  { memo } from "react";
import { FaStar } from "react-icons/fa";

const CourseCard = ({Course})=>{

    return (
        <div className="Regis_Ex-List_card">
            <img src={Course.image} alt={Course.title} /> {/* Thêm alt cho img */}
            <span className="Regis_Ex-List_card_item">
                <h5>{Course.title}</h5>
                <span className="Rating">
                    {[...Array(Course.rating)].map((_, index) => (
                        <FaStar key={index} />
                    ))} {/* Hiển thị số sao dựa trên rating */}
                </span>
                <span className="monney_container">
                    <span className="monney_left">{Course.price}</span>
                    <span className="monney_right">{Course.discountedPrice}</span>
                </span>
                <button>xem chi tiết</button>
            </span>
        </div>
    );
};


export default memo(CourseCard);