import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from '../../styles/Home.module.scss'
import { MainImage } from '../components/MainImage';
import { useEffect } from 'react'
import { ReadingCharachters } from '../api/charachters'
import { TeamCharachters } from '../components/TeamCharachters'
import { ReadingManga } from '../api/manga'

import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/clientApp';
import { WikiElement } from '../components/WikiElement'



const Wiki: NextPage = () => {



    return (
        <div className={styles.container}>
            <div className={styles.bg_bg}>
                <img className={styles.bg_img} src="/image/bg.png" alt="" />
                <div className={styles.bg_dark}></div>
            </div>
            <Header />
            <div className={styles.manga_chapters}>
                <div className={styles.wiki}>
                    <WikiElement text='Character' route='character'></WikiElement>
                    
                </div>
            </div>
        </div>
    )
}

export default Wiki;
