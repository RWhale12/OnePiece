import styles from '../../styles/Home.module.scss'
import { useEffect, useState } from "react";
import { PageManga, ReadingManga } from '../api/manga';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { db, storage } from '../../firebase/clientApp';
import { getDownloadURL, ref } from 'firebase/storage';



export const MangaWrite = () => {
    const [pages, setPages] = useState<Array<any>>()
    const [chapter, setChapter] = useState<Array<any>>();

    useEffect(() => {
        const arr: number[] = [];
        reading().then((item) => {
            for (let i = item.chapters; i >= 0; i--) {
                arr.push(i);
            }
            setChapter(arr);
        });
    }, [])

    async function reading() {
        let info: any = {};
        await getDoc(doc(db, "OnePiece", 'info')).then((item) => {
            if (item.exists()) {
                info = item.data();
            } else {
                info = reading();
            }
        })
        return info;
    }

    function searchPages(url: string) {
        var url = url + '1.jpeg';
        console.log(url)

        window.addEventListener("load", event => {
            var image = new Image();
            image.src = url;

            image.addEventListener('load', () => alert('success'));
            image.addEventListener('error', () => alert('failure'));
        });
    }


    return (
        <div className={styles.manga_chapters}>
            {chapter && <div className={styles.manga_chapters_block}>
                <div className={styles.manga_chapters_block_tom_chapters}>
                    {chapter.map((el: any) => {
                        return <div className={styles.manga_chapters_block_tom_chapters_el} onClick={() => window.location.assign(`/manga/${el}`)}>Chapter {el}</div>
                    })}
                </div>
            </div>}
        </div >
    )
}

