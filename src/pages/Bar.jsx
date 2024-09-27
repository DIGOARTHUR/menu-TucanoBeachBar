
import { Header } from "../components/Header";
import coffee from "../assets/imgs/coffee.png";
import menu from "../data/data";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/imgs/logo.png'
import { IoIosSearch } from "react-icons/io";
import { TiArrowBackOutline } from "react-icons/ti";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "../components/Loader";
import BackToTopButton from "../components/BackToTopButton";


export default function Bar() {



    const categorias = ['bar', 'bebida', 'cafeteria', 'cozinha']
    const [data, setData] = useState([])

    const [optionMenu, setOptionMenu] = useState('bar')
    const [inputText, setInputText] = useState("");


    const [search, setSearch] = useState('')

    const [finishedTimeout, setFinishedTimeout] = useState(false);
    useEffect(() => {
        Aos.init({ duration: 1500 });
        const data2 = menu.filter((item) =>
            item.category === 'bar'

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
            <div className=" w-full flex flex-col  px-2  min-h-screen">
                <Link to="/" className="">
                    <TiArrowBackOutline size={50} fill="#ffffff" />
                </Link>
                <div className="flex justify-center items-center mb-16">

                    <img src="/bar_board.png" className="w-56" />
                </div>

                <div className="flex items-center text-center  sticky top-0">
                    <IoIosSearch size={30} fill="#ffffff" />
                    <input type="text" placeholder="Buscar" className="h-10 mx-2 my-3 rounded-lg  border-solid border-[1px] border-neutral-500 w-full indent-3" onChange={(e) => setSearch(e.target.value.toLowerCase())}></input>
                </div>


                <div className="flex flex-col justify-center items-center gap-1 mb-6 ">
                    {


                        data.filter((item) => {
                            return search === '' ? item : item.name.toLowerCase().includes(search)
                        }).map((item, index) =>

                        (
                            <li key={index} className="flex min-h-[96px]  p-5 border-solid border-2 border-neutral-500 rounded-md bg-[#ffffffd0] gap-3 w-full">

                                <div className="flex flex-col w-full">

                      
                                    <div className="flex w-full justify-between items-center">
                                        <div className="flex items-center gap-2">

                                            <h2 className="text-lg font-bold font-['Poppin']" >{item.name}</h2>

                                            <img src={item.logo} className="h-10 w-10 rounded-full " />
                                        </div>




                                        <h3 className="text-blue-900 font-bold text-xl oldstyle-nums">{item.price}</h3>
                                    </div>

                                    <p>{item.description}</p>
                                </div>


                            </li>
                        )
                        )





                    }
                </div>

                <BackToTopButton />


            </div>
        </>
    );
}
