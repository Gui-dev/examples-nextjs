import Head from 'next/head'
import styles from './../styles/Home.module.css'

import { Title } from './style'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Custom Document</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Home</Title>
    </div>
  )
}
