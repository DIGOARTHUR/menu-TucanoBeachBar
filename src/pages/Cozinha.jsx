
import { Header } from "../components/Header";
import coffee from "../assets/imgs/coffee.png";
import menu from "../data/data";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/imgs/logo.png'
import { IoIosSearch } from "react-icons/io";
import { TiArrowBackOutline } from "react-icons/ti";
export default function Cozinha() {

    const categorias = ['bar', 'bebida', 'cafeteria', 'cozinha']
    const [data, setData] = useState([])

    const [optionMenu, setOptionMenu] = useState('bar')
    const [inputText, setInputText] = useState("");


    const [search, setSearch] = useState('')


    useEffect(() => {

        const data2 = menu.filter((item) =>
            item.category === 'cozinha'
        )
        setData(data2.sort(compare))

    }, []);


    function compare(a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }





    return (
        <>
            <div  className=" w-full flex flex-col  px-2  min-h-screen ">
                <Link to="/" className="">
                    <TiArrowBackOutline size={50} fill="#ffffff" />
                </Link>
                <div className="flex justify-center items-center">

                    <img src="/cozinha_board.png" className="w-56" />
                </div>
                <div className="flex items-center text-center  ">
                    <IoIosSearch size={30} fill="#ffffff" />
                    <input type="text" placeholder="Buscar" className="h-10 mx-2 my-3 rounded-lg  border-solid border-[1px] border-neutral-500 w-full indent-3" onChange={(e) => setSearch(e.target.value.toLowerCase())}></input>
                </div>


                <div className="flex flex-col gap-1">
                    {

                        data.filter((item) => {
                            return search === '' ? item : item.name.toLowerCase().includes(search)
                        }).map((item, index) =>

                        (
                            <li key={index} className="flex  p-5 border-solid border-2 border-neutral-500 rounded-md bg-[#ffffffd0] gap-3">
                                <img src={item.logo} className="h-14 rounded-full" />
                                <div>
                                    <h2 className="text-xl font-bold" >{item.name}</h2>

                                    <p>{item.description}</p>
                                    <h3 className="text-blue-900 font-bold">{item.price}</h3>
                                </div>


                            </li>
                        )
                        )

                    }
                </div>




            </div>
        </>
    );
}
