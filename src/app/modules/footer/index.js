import styles from './index.module.css'
import { oswald, ptsans } from "../../styles/fonts"
import { CallToAction } from "../call_to_action"

export function Footer() {
	return  (
        <div className={styles.Footer}>
            <p className={`${ptsans.className}`}>
                <span className={`${styles.copyright}`}>&copy; Direct Car Rentals | </span>
                <a href="https://benco.dev/" target="_blank" className={`${styles.authorship}`}>Built by BenCo</a>
            </p>
        </div>
    )
}


export default Footer