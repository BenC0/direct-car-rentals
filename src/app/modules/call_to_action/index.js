import styles from './index.module.css'
import { oswald } from "../../styles/fonts"

export function CallToAction(props) {
    if ( !!props.trigger ) {
        return (
            <span className={`${styles.CallToAction}`} onClick={() => { props.clickHandler()} }>
                <span className={`${oswald.className}`}>{props.text}</span>    
            </span>
        )
    } else {
        return (
            <a className={styles.CallToAction} href={props.href} target="_blank">
                <span className={`${oswald.className}`}>{props.text}</span>    
            </a>
        )
    }
}

export default CallToAction