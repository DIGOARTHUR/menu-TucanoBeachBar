import { Header } from "../components/Header";
import Cafe from "./Cafe";
import Snacks from "./Snacks";
import Bar from "./Bar";
import Bebidas from "./Bebidas";
import Cozinha from "./Cozinha";


export function InfoPage () {
    return (
        <div>
            <Header/>
            <div>
            <a href={Cafe}>Cafe</a>
            <a href={Snacks}>Snacks</a>
            <a href={Bar}>Bar</a>
            <a href={Bebidas}>Bebidas</a>
            <a href={Cozinha}>Cozinha</a>
            </div>
              
        </div>
    )
}