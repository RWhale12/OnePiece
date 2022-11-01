import styles from '../../styles/Home.module.scss'

type AccountHeaderProps ={
    text: string;
} 

export const AccountHeader = (props: AccountHeaderProps) => {
    return (
                <div className={styles.account_header}>
                    <div className={styles.account_header_img}></div>
                    <div className={styles.account_header_name}>{props.text}</div>
                </div>
    )
}

