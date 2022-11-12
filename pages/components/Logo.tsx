import styles from '../../styles/Home.module.scss'

export const Logo = () => {
    return (
        <div className={styles.logo} onClick={() => window.location.assign(`/home`)}>
            <div className={styles.logo_green}>o</div>
            <div>ne</div>
            <div className={styles.logo_green}>p</div>
            <div>iece</div>
        </div>
    )
}

