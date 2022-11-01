import styles from '../../styles/Home.module.scss'
import image from '../../public/image/home-image.jpg'

export const MainImage = () => {
    return (
        <div className={styles.mainimage}>
            <img className={styles.main_image} src='/image/bgop.jpg' alt="" />
            <div className={styles.main_image_black}>
                <div className={styles.main_image_text}>
                    <div className={styles.main_image_title}>
                        One Piece
                    </div>
                    <div className={styles.main_image_htitle}>
                        Anime fan site one piece - manga, anime, news, wiki.
                    </div>
                </div>
                <div className={styles.main_image_button}>
                    <div className={styles.button_big} >
                        Continue
                    </div>
                </div>
            </div>
        </div>
    )
}

