export interface GetOrdersByDay {
  orders: Orders[];
}

export interface Orders {
  id: number;
  order_date: string;
  status: string;
  total_price: string;
  created_at: string;
  username : string;
  time_elapsed : string;
}
