import styles from './index.module.css'
import Image from 'next/image';
import { oswald, ptsans } from "../../styles/fonts"

export function AboutUs(props) {
	return  (
        <section className={`${styles.AboutUs} content-wrapper`}>
            <div className={`${styles.AboutUsContainer} content a-center j-center column`}>
                <h3 className={`${styles.AboutUsTitle} ${oswald.className}`}>About Us</h3>
                <div className={`${styles.AboutUsContent} m-column`}>
                    <div className={styles.AboutUsTable}>
                        <p className={styles.AboutUsTableLabel}>Location</p>
                        <p className={styles.AboutUsTableValue}>Woolfold Industrial Estate<br />ALSTON HOUSE<br />Alston St<br/>Bury<br/>BL8 1SF</p>
                        <p className={styles.AboutUsTableLabel}>Contact</p>
                        <p className={styles.AboutUsTableValue}>0161 761 7773<br /><a href="mailto:Directvehiclerentals@gmail.com">DirectVehicleRentals@gmail.com</a></p>
                    </div>
                    <a href="https://g.co/kgs/MLPjdW" target="_blank">
                        <Image src="/map.png" width="600" height="400" alt="map" className={styles.AboutUsMap} />
                    </a>
                </div>
            </div>
        </section>
    )
}


export default AboutUs