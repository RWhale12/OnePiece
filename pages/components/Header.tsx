import styles from '../../styles/Home.module.scss'
import { AccountHeader } from './Account'
import { ButtonSite } from './ButtonSite'
import { Logo } from './Logo'

export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo />
            <div className={styles.header_div_nav}>
                <ButtonSite text={'Home'} numberBTN={1} onClick='home'></ButtonSite>
                <ButtonSite text={'Wiki'} numberBTN={1} onClick='wiki'></ButtonSite>
                <ButtonSite text={'Watch'} numberBTN={1}></ButtonSite>
                <ButtonSite text={'Manga'} numberBTN={1} onClick='manga'></ButtonSite>
                <ButtonSite text={'Help'} numberBTN={1}></ButtonSite>
            </div>
            <div className={styles.header_div_account}>
                <AccountHeader text={'Roman Whale'} />
            </div>
        </div >
    )
}

