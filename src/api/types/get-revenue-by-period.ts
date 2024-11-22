export interface GetRevenueByPeriod {
  order_date: string; 
  _count: {
    _all: number; 
  };
  _sum: { total_price: string }; 
}