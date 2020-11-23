import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home</h1><br />
      <Link href="/products">
        <a>Produtos</a>
      </Link>
    </>
  )
}
