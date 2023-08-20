import styles from './index.module.css'
import { oswald, ptsans } from "../../styles/fonts"
import { CallToAction } from "../call_to_action"

export function Navigation() {
	return  (
        <div className={styles.Navigation}>
            <h1 className={`${oswald.className} ${styles.logo}`}>Direct Car Rentals</h1>    
            <CallToAction
                text="Get in Touch"
                href="tel:01617980000"
            ></CallToAction>
        </div>
    )
}


export default Navigation