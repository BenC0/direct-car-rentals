import styles from './index.module.css'
import { ptsans } from "../../styles/fonts"

export function Hero() {
	return  (
        <div className={`${styles.Hero} content-wrapper`}>
            <div className={`${styles.HeroContent} content column a-center`}>
                <h2 className={`${styles.HeroText} ${ptsans.className}`}>Price Match Guarantee*</h2>
                <h3 className={`${styles.HeroText} ${ptsans.className}`}>Call Today For The Best Possible Quote</h3>
                <a className={`${styles.HeroText} ${styles.HeroTextLink} ${ptsans.className}`} href="tel:01617617773"><span>0161 761 7773</span></a>
            </div>
        </div>
    )
}


export default Hero