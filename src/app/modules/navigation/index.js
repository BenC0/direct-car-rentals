'use client'
import styles from './index.module.css'
import { oswald, ptsans } from "../../styles/fonts"
import { CallToAction } from "../call_to_action"

export function ShowContactOverlay() {
    let ContactOverlay = document.querySelector(`.${styles.ContactOverlay}`)
    ContactOverlay.classList.add(styles.ContactOverlayActive)
}

export function HideContactOverlay() {
    let ContactOverlay = document.querySelector(`.${styles.ContactOverlay}`)
    ContactOverlay.classList.remove(styles.ContactOverlayActive)
}

export function Navigation() {
	return  (
        <div className={`${styles.Navigation} content-wrapper`}>
            <div className={`${styles.NavigationContent} content`}> 
                <h1 className={`${oswald.className} ${styles.logo}`}>Direct Car Rentals</h1>
                <div className={`${styles.NavigationButtonContainer}`}>
                <CallToAction
                    text="Get in Touch"
                    target=".ContactOverlay"
                    clickHandler={ShowContactOverlay}
                    trigger={true}
                ></CallToAction>
                </div>
            </div>
            <div className={`${styles.ContactOverlay}`}>
                <div className={`${styles.ContactOverlayContent}`}>
                    <span className={`${styles.ContactOverlayClose} ${oswald.className}`} onClick={_ => { HideContactOverlay() }}>
                        <svg version="1.1" viewBox="0 0 512 512">
                            <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" fill="#FFFFFF" />
                        </svg>
                    </span>
                    <CallToAction
                        text="0161 761 7773"
                        href="tel:01617617773"
                    ></CallToAction>
                    <a className={`${ptsans.className}`} href="mailto:Directvehiclerentals@gmail.com"><span>DirectVehicleRentals@gmail.com</span></a>
                </div>
            </div>
        </div>
    )
}


export default Navigation