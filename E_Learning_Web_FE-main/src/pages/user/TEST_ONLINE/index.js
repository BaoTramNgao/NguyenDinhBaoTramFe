import React, { memo } from "react";
import './style.scss';

const TEST_ONLINE = () =>{
    let hehe = 'hello'
    let country = 'Finland'
    console.log(country.substr(3, 4))




    return (
        <div >
            <h1 >Thi thử tại đây!</h1>
        
            
        </div>
    )
}
export default memo( TEST_ONLINE);