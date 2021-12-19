export interface Product{
    id: string,
    name: string,
    price: number,
    qty_stock: number
  }

export interface Order {
  id: string;
  name: string;
  delivery_date: string;
  products_list: Products_list[]

}

export interface Products_list{
  product_quantity: number,
  products_id: string,
}

export interface OrderInput{
  name: string;
  delivery_date: string;
  products_list: Products_list[]
}