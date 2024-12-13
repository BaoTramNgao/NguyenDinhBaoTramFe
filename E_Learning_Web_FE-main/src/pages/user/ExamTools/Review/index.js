import React, { memo, useEffect, useState } from "react";
import './style.scss';
import { Outlet, Link, useLocation } from 'react-router-dom';

const REVIEW = () => {
    const [indexItemReview, setIndexItemReview] = useState(0);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes("testbank")) {
            setIndexItemReview(0);
        } else if (location.pathname.includes("courseOnline")) {
            setIndexItemReview(1);
        }
    }, [location.pathname]);

    const handleClick = (index) => {
        setIndexItemReview(index);
    };

    return (
        <div className="container-big bg_sub">
            <div className="container_sub">
                <div className="Regis_Ex">
                    <h1>TIẾNG ANH</h1>
                    <div className="Regis_Ex-menu">
                        <span className={`${indexItemReview === 0 ? 'Review_active' : ''}`}>
                            <Link to="testbank" onClick={() => handleClick(0)}>Kho đề thi thử</Link>
                        </span>
                        <span className={`${indexItemReview === 1 ? 'Review_active' : ''}`}>
                            <Link to="courseOnline" onClick={() => handleClick(1)}>Khóa học Online</Link>
                        </span>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default memo(REVIEW);