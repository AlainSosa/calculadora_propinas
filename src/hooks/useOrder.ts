import { useState } from "react";
import type { OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]); // estos son los generics <OrderItem[]>
  return {};
}
