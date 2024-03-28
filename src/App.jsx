import { Header } from "./components/Header";
import coffee from "./assets/imgs/coffee.png";
import menu from "./data/data";
import { NavBar } from "./components/NavBar";
import { Outlet, Link } from "react-router-dom";
import salad from "./assets/imgs/salad.png";
import { LuCoffee } from "react-icons/lu";
import { useState } from "react";

function removeAccents(string) {
  return string.normalize("NFD");
}

function App() {

  

  const [Buscar, setBuscar] = useState("");

  const menuFilter = menu.filter((item) => removeAccents(item.name.toLocaleLowerCase()).includes(removeAccents(Buscar.toLocaleLowerCase())
  )
  );

const categoryImg = {
  cafeteria: coffee,
  Cozinha: salad,
};

  return (
    <>
    <div id="App" >

    <Header />

       
<div class="inset-y-0 start-0 flex items-center p-4   " >

<input  type="search"class="block w-full p-1 ps-2text-sm text-gray-900border-solid border-2 border-neutral-500  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Procurar..."
onChange={(e) => setBuscar(e.target.value) }
/>
<button> <LuCoffee class="size-8" /></button>

</div>
<div className="flex flex-col gap-1 mx-2 mt-7"> 
{menuFilter.map((item, id) => (
 <div key={id} className="flex justify-between p-5 border-solid border-2 border-neutral-500 rounded-md">
    <div >
    <h2 className="text-lg font-semibold" >{item.name}</h2>
   
    <p>{item.description}</p>
    <h3>{item.price}</h3>
    </div>
    <img src={categoryImg[item.category]} className="h-12"/>
  </div>
))}
    </div>

    </div>
      
     
    </>
  );
}

export default App;
