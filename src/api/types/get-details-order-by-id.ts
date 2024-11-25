export interface GetDetailsOrderById {
  id : number;
  items : Items[],
  order_date : string;
  total_price : number;
  username : string
  status : string
}

interface Items {
  id_item : number;
  quantity : number;
  name : string;
  price : number;
  description : string;
}