import styles from '../../styles/Home.module.scss'

import { getDownloadURL, ref } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../firebase/clientApp";
import { useRouter } from "next/router";
import React from 'react';

type WritingPdfProps = {
    id: number;
}

export const WritingPdf = (props: WritingPdfProps) => {

    const [url, setUrl] = useState<string>();

    const pdf = ref(storage, `OnePiece/${props.id}.pdf`);
    getDownloadURL(pdf)
        .then((url) => {
            setUrl(url);
        })




    return (
        <div className={styles.writing_manga}>
            {url &&<embed className={styles.writing_manga_pdf}  src={`${url}#toolbar=0&navpanes=0&scrollbar=0`} type="application/pdf"></embed>}
            <div className={styles.writing_manga_tittle}>Chapter {props.id}</div>
            <div className={styles.writing_manga_pag}>
                {props.id >0 && <div className={styles.writing_manga_pag_archer} onClick={() => window.location.assign(`/manga/${props.id-1}`)}>{'<<'}</div>}
                <div className={styles.writing_manga_pag_archer} onClick={() => window.location.assign(`/manga/${props.id+1}`)}>{'>>'}</div>
            </div>
        </div>
    )
}

