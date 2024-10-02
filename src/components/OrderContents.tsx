import { OrderItem } from "../types";

type OrderContetsProps = {
  order: OrderItem[];
};

export default function OrderContents({ order }: OrderContetsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-5">
        {order.length == 0 ? (
          <p className="text-center">La ordern esta vacia</p>
        ) : (
          order.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
