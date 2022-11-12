import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../../components/Header'
import styles from '../../../styles/Home.module.scss'
import { useEffect, useState } from 'react'
import { Charachter, ReadingAllCharachters } from '../../api/charachters'



const Wiki: NextPage = () => {
    const [characters, setCharacters] = useState<Array<Charachter>>();

    useEffect(() => {
        ReadingAllCharachters().then((el) => {
            setCharacters(el);
        })
    })

    return (
        <div className={styles.container}>
            <div className={styles.bg_bg}>
                <img className={styles.bg_img} src="/image/bg.png" alt="" />
                <div className={styles.bg_dark}></div>
            </div>
            <Header />
            <div className={styles.manga_chapters}>
                <div className={styles.wiki_el_list}>
                    {characters && characters.map((charachter: Charachter) => {
                        return <div className={styles.blockteam_charachter}>
                            <div className={styles.blockteam_charachter_name}>{charachter.name}</div>
                            <img src={charachter.img} className={styles.blockteam_charachter_img} alt="" />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Wiki;
