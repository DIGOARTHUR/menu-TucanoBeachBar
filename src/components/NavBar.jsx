import { Link } from "react-router-dom";
import { InfoPage } from "../pages/InfoPage";
import { SlOptionsVertical } from "react-icons/sl";

export function NavBar () {

    return (
        <>
        <nav  class="relative h-32 w-0" >
        <Link class="absolute top-2 -right-20"  to={`/InfoPage`} ><SlOptionsVertical />
</Link>
        </nav>
        </>
    )

}