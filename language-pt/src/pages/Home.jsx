
import { Header } from "../components/Header";
import coffee from "../assets/imgs/coffee.png";
import menu from "../data/data";
import { useEffect } from "react";
import { useState } from "react";
import categories from "../utils/categories";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Aos from "aos";
import "aos/dist/aos.css";


export default function Home() {




  const categorias = ['bar', 'bebida', 'cafeteria', 'cozinha']
  const [data, setData] = useState([])
  const [optionMenu, setOptionMenu] = useState('bar')

  function filterdata() {
    return categorias.map((cat) => {

      return menu.filter((item) => {
        return item.category === cat
      })
    })


  }
  console.log(categories)

  const _handleMenuOption = (optionMenu) => {
    setOptionMenu(optionMenu)
    filterdata(optionMenu)
  }


  useEffect(() => {
    Aos.init({ duration: 1000 });
    const data = filterdata()
    setData(data)

  }, []);



  const [t, i18n] = useTranslation("global")

  const handleChangeLanguag = (lang) => {
    i18n.changeLanguage(lang)
  };


  return (
    <>
      <div className=" w-full relative ">
        <Header />

        <div className="flex flex-col ">
          {
            categories.map((item) =>

              <Link to={item.category} className={`flex justify-between items-center h-24 pl-8  border-b-[2px] border-dashed border-[#fffff] font-semibold bg-[url('${item.background}')] bg-[#fe9901] bg-opacity-25`}>
                <div className="flex  items-center gap-5">
                  <h3 className="text-2xl font-semibold text-[#FFFFFF] font-Poppins">
                    {t(`categories.categoriesData.${item.id}.category`)}
                  </h3>

                </div>
                <img src={item.background} />
              </Link>
            )
          }

        </div>

        <div className="flex justify-center gap-1 mt-8">
          <img src="/flags/pt_language.jpeg" className="h-14" />

          <img src="/flags/en_language.webp" className="h-14" />

          <img src="/flags/es_language.jpg" className="h-14" />

          <img src="/flags/fr_language.jpg" className="h-14" />
        </div>

        <div className="relative mt-10">
          <div className="flex justify-center absolute bg-black  w-full bottom-0 bg-opacity-25">
            <span className="text-white"></span>

          </div>
          <div dangerouslySetInnerHTML={{
            __html: `
          <video className='VideoTag' playsinline autoplay loop muted >
            <source src='waveVideo.mp4' type='video/mp4' />
         </video>`}}
          />
        </div>





        { /* 

    <button className="h-10 bg-red-600" onClick={() => handleChangeLanguag("en")}>Ingles</button>
        <button className="h-10 bg-amber-600 ml-14" onClick={() => handleChangeLanguag("pt")}>Portugues</button>        


        <div className="flex justify-center">
          <ul className="grid grid-cols-4 w-full text-center items-center h-12 ">


      <img src={coffee} className="h-10 " />



            {
              categorias.map((item, index) => {
                return (
  
                  <li key={index} onClick={() => _handleMenuOption( item )} className={`flex h-20 items-center justify-center  ${item==optionMenu?'border-b-2 border-indigo-500/100':''}`}>{item}</li>
                )
  
              })
            }
  
          </ul>
        </div>
      </div>
    
  
  
  
        <div className="flex flex-col gap-1 mx-2 mt-7">
  
          {categorias.map((cat, index) => (
            <ul key={cat} >
              <h2 id={`#${cat}`} className="text-2xl">{cat}</h2>
              {data[index]?.map((item, index) => (
                <li key={index} className="flex flex-col justify-between p-5 border-solid border-2 border-neutral-500 rounded-md">
                  <h2 className="text-lg font-semibold" >{item.name}</h2>
  
                  <p>{item.description}</p>
                  <h3>{item.price}</h3>
                </li>
              ))}
            </ul>
          ))}
  
  
          {menu.map((item, index) => (
          <div key={index} className="flex justify-between p-5 border-solid border-2 border-neutral-500 rounded-md">
            <div >
            <h2>{item.name}</h2>
           
            <p>{item.description}</p>
            <h3>{item.price}</h3>
            </div>
            <img src={coffee} className="h-12"/>
          </div>
        ))}*/ }
      </div>
    </ >
  );
}
