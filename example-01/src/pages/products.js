import Link from 'next/link'

const Products = () => {
  return (
    <>
      <h1>Produtos</h1><br />
      <Link href="/category/product">
        <a>Produto</a>
      </Link>
    </>
  )
}

export default Products