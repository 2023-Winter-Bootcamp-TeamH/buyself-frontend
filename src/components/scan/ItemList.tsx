interface BuyCardProps {
  name: string
  price: number
  count: number
}

const ItemList: BuyCardProps[] = [
  {
    name: '짜요짜요',
    price: 1200,
    count: 1,
  },
  {
    name: '촉촉한초코칩',
    price: 3300,
    count: 1,
  },
  {
    name: '코카콜라500g',
    price: 2000,
    count: 2,
  },
  {
    name: '가나 초콜릿',
    price: 2000,
    count: 2,
  },
]

export default ItemList
