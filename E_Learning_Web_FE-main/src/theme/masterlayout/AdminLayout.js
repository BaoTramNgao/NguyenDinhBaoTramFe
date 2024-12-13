import { memo } from "react";

import Admin from "pages/admin/Admin";


const AdminLayout=  ({children, ...props}) => {
    return (
        
        <div {...props}>
        <Admin/>
        </div>
    )
}
export default memo(AdminLayout);