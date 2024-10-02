import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void; // este void quiere decir que es una funcion que no retorna nada // el signo ? de interogacion quiere decir que le puedo o no pasar este prop
};

export default function Menuitem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className=" font-black">${item.price}</p>
    </button>
  );
}
