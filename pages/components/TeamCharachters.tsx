import { useEffect, useState } from "react"
import { Charachter, ReadingCharachters } from "../api/charachters"
import styles from '../../styles/Home.module.scss'

export const TeamCharachters = () => {
    const [team, setTeam] = useState<Array<Charachter>>();

    useEffect(() => {
        ReadingCharachters().then((characters) => {
            if (characters) {
                setTeam(characters);
            }
        })
    }, [])
    return (
        <div className={styles.blockteam}>
            <div className={styles.blockteam_title}>Straw Hat Pirates</div>
            <div className={styles.blockteam_team}>
                {team && team.map((charachter: Charachter) => {
                    return <div className={styles.blockteam_charachter}>
                        <div className={styles.blockteam_charachter_name}>{charachter.name}</div>
                        <img src={`/image/${charachter.id}.png`} className={styles.blockteam_charachter_img} alt="" />
                    </div>
                })}
            </div>
        </div>
    )
}