import styles from '../../styles/Home.module.scss'

type WikiElProps = {
    text: string;
    route: string;
    image?: string;
}

export const WikiElement = (props: WikiElProps) => {
    return (<div className={styles.wiki_el} onClick={() => window.location.assign(`/wiki/${props.route}`)}>
        <div >{props.text}</div>
    </div>
    )
}

