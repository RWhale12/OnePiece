import styles from '../../styles/Home.module.scss'

type ButtonProps = {
    text: string;
    numberBTN: number;
}

export const ButtonSite = (props: ButtonProps) => {
    return (<div>
        {props.numberBTN === 1 && <div className={styles.button}>{props.text}</div>}
        {props.numberBTN === 2 && <div className={styles.button_big}>{props.text}</div>}
    </div>
    )
}

