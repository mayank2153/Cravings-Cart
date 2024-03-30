// now this component will be used for handling errors for the routing
import { useRouteError } from 'react-router-dom';
import ErrorImg from "../assets/img/error-image.jpg"
const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <div>
            <img src={ErrorImg}></img>
            <h2>{err?.status +" : "+ err?.statusText}</h2>
        </div>
    )
}
export default Error;