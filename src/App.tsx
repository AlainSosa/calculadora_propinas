import Menuitem from "./components/MenuItem";
import { menuItems } from "./data/db";

function App() {
  console.log(menuItems);
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      {/* media queris */}
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>

          {/* esto aplica una separacion a cada uno de sus hijos */}
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <Menuitem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
