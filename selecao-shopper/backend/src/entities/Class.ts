export interface Product{
    id: string
    name: string
    price: number
    qty_stock: number
  }

export interface Client_Order {
  id: string,
  name: string,
  delivery_date: string,
  orders:Order[]
}

export interface Order{
  product_quantity: number,
  products_id: string,
  order_id: string
}