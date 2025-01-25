import React from "react";
import UsersList from "../components/UsersList";
function UserPages(){
    const USER=[{id:'1',name:'yash verma',image:'https://www.google.com/search?sca_esv=d645707ffb8e0e1d&sxsrf=AHTn8zqrVryerTJMNBQC1fAnys2FUSiYjw:1737841037425&q=google+photos&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBtmuEdhfywyzhendkLDnhcoz2MIB1dVLatL09WpR-ccvjBcyUIpb14AVBje69aZOJXGaJpDCFPCoSIDfdc_JZ1ZpgxUPH8hm9M8jo4x7A-tJtcUsPZWoi7BU7vrR4Uomc9VNHisYh0YTVTR0aKgYtfPoJFiDmuApYCr3C372hb7o2RLXeQ&sa=X&sqi=2&ved=2ahUKEwj63dit6pGLAxU0R2wGHd1zN44QtKgLegQIERAB&biw=714&bih=688&dpr=2#vhid=GtZDuGPWzMz3dM&https://developers.elementor.com/docs/hooks/placeholder-image/=mosaic',places:3}]
    return<>
    <UsersList items={USER}></UsersList>
    </>
}
export default UserPages