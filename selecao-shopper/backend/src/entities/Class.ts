export interface product{
    id: string
    name: string
    price: number
    qty_stock: number
  }

export interface order{
  id: string,
  client_name: string,
  product_list_id: string,
  delivery_date: string

}

export interface product_order{
  id: string,
  products_id: string,
  order_id: string,
  quantity: string 
}