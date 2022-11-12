import { NextPage } from "next";
import { Header } from "../components/Header";
import styles from '../../styles/Home.module.scss'
import { MangaWrite } from "../components/MangaWrite";
import { getDownloadURL, ref } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../firebase/clientApp";
import { useRouter } from "next/router";
import { WritingPdf } from "../components/WritingPdf";


const PageManga: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;


    return (
        <div className={styles.container}>
            <div className={styles.bg_bg}>
                <img className={styles.bg_img} src="/image/bg.png" alt="" />
                <div className={styles.bg_dark}></div>
            </div>
            <Header />

            {id && <WritingPdf id={Number(id)}/>}
        </div>
    )
}

export default PageManga;