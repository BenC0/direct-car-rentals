import styles from './index.module.css'
import { oswald, ptsans } from "../../styles/fonts"
import { CallToAction } from "../call_to_action"

export function Hero() {
	return  (
        <div className={styles.Hero}>
            <h2 className={`${styles.HeroText} ${ptsans.className}`}>Price Match Guarantee*</h2>
            <h3 className={`${styles.HeroText} ${ptsans.className}`}>Call Today For The Best Possible Quote</h3>
            <a className={`${styles.HeroText} ${styles.HeroTextLink} ${ptsans.className}`} href="tel:01617980000"><span>0161 761 1234</span></a>
        </div>
    )
}


export default Hero