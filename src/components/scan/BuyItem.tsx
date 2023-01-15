interface BuyCardProps {
  name: string
  price: number
  count: number
  check: boolean
}

const BuyItem: BuyCardProps[] = [
  {
    name: '짜요짜요',
    price: 1200,
    count: 1,
    check: true,
  },
  {
    name: '촉촉한초코칩',
    price: 3300,
    count: 1,
    check: true,
  },
  {
    name: '코카콜라500g',
    price: 2000,
    count: 2,
    check: true,
  },
  {
    name: '가나 초콜릿',
    price: 2000,
    count: 2,
    check: true,
  },
]

export default BuyItem
