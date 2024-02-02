import { Header } from "./components/Header";
import coffee from "./assets/imgs/coffee.png";
import menu from "./data/data";
function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-1 mx-2 mt-7">

  
      {menu.map((item, index) => (
        <div key={index} className="flex justify-between p-5 border-solid border-2 border-neutral-500 rounded-md">
          <div >
          <h2>{item.name}</h2>
         
          <p>{item.description}</p>
          <h3>{item.price}</h3>
          </div>
          <img src={coffee} className="h-12"/>
        </div>
      ))}
          </div>
    </>
  );
}

export default App;
