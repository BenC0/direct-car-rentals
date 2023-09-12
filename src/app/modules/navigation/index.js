import styles from './index.module.css'
import { oswald, ptsans } from "../../styles/fonts"
import { CallToAction } from "../call_to_action"

export function Navigation() {
	return  (
        <div className={`${styles.Navigation} content-wrapper`}>
            <div className={`${styles.NavigationContent} content`}> 
                <h1 className={`${oswald.className} ${styles.logo}`}>Direct Car Rentals</h1>    
                <CallToAction
                    text="Get in Touch"
                    href="tel:01617617773"
                ></CallToAction>
            </div>
        </div>
    )
}


export default Navigation