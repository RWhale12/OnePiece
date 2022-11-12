import styles from '../../styles/Home.module.scss'

type ButtonProps = {
    text: string;
    numberBTN: number;
    onClick?: string;
}

export const ButtonSite = (props: ButtonProps) => {
    return (<div>
        {props.numberBTN === 1 && <div className={styles.button} onClick={() => window.location.assign(`/${props.onClick}`)}>{props.text}</div>}
        {props.numberBTN === 2 && <div className={styles.button_big}>{props.text}</div>}
    </div>
    )
}

