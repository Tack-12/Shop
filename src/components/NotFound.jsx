import { Link } from "react-router-dom";

export default function Notfound() {
    return (<>
        <h1> THE PAGE YOU ARE LOOKING FOR DOESNT EXIST </h1>
        <Link to={"/"}> <button> Go Back </button></Link>
    </>)
}