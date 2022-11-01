import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from './components/Header'
import styles from '../styles/Home.module.scss'
import { MainImage } from './components/MainImage';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <MainImage />
    </div>
  )
}

export default Home
