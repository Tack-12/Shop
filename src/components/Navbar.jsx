import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <>
         <div>
            ONLINE SHOP 
         </div>

        <ul>
            <li><Link to={"/"}>HOME PAGE</Link></li>
            <li><Link to={"/cart"}> CART </Link></li>
            <li><Link to={"/shop"}> SHOP </Link></li>
        </ul>
        </>
    )
}