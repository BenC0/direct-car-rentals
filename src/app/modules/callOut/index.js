import styles from './index.module.css'
import { oswald, ptsans } from "../../styles/fonts"
import { CallToAction } from "../call_to_action"

export function CallOut() {
	return  (
        <div className={`content-wrapper ${styles.CallOut}`}>
            <div className={`${styles.CallOutContent} content column`}>
                <h2 className={`${oswald.className} ${styles.title}`}>Call Today For The Best Possible Quote</h2>
                <div className={styles.ButtonContainer}>
                    <CallToAction
                        text="Get in Touch"
                        href="tel:01617617773"
                    ></CallToAction>
                </div>
            </div>
        </div>
    )
}


export default CallOut