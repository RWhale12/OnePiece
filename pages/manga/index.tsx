import { NextPage } from "next";
import { Header } from "../components/Header";
import styles from '../../styles/Home.module.scss'
import { MangaWrite } from "../components/MangaWrite";


const Manga: NextPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.bg_bg}>
                <img className={styles.bg_img} src="/image/bg.png" alt="" />
                <div className={styles.bg_dark}></div>
            </div>
            <Header />

            <MangaWrite />
        </div>
    )
}

export default Manga;