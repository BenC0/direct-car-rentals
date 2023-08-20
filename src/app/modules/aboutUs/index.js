import styles from './index.module.css'
import Image from 'next/image';
import { oswald, ptsans } from "../../styles/fonts"

export function AboutUs(props) {
	return  (
        <section className={`${styles.AboutUs} content-wrapper`}>
            <div className='content a-center j-center column'>
                <h3 className={`${styles.AboutUsTitle} ${oswald.className}`}>About Us</h3>
                <div className={styles.AboutUsContent}>
                    <div className={styles.AboutUsTable}>
                        <p className={styles.AboutUsTableLabel}>Location</p>
                        <p className={styles.AboutUsTableValue}>Sample House <br />Sample Street <br />Bury <br />BL8 000</p>
                        <p className={styles.AboutUsTableLabel}>Contact</p>
                        <p className={styles.AboutUsTableValue}>0161 761 1234<br />DirectCarHire@gmail.com</p>
                        <p className={styles.AboutUsTableLabel}>Business Hire</p>
                        <p className={styles.AboutUsTableValue}>Sam Pull</p>
                    </div>
                    <p>*  All price matches are like for like within the local area.</p>
                    <a href="">
                        <Image src="/map.png" width="420" height="254" />
                    </a>
                </div>
            </div>
        </section>
    )
}


export default AboutUs