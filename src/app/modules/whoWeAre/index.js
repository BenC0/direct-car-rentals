import styles from './index.module.css'
import { oswald, ptsans } from "../../styles/fonts"
import Image from 'next/image';
import { CallToAction } from "../call_to_action"

export function WhoWeAre(props) {
	return  (
        <section className={`${styles.WhoWeAre} content-wrapper`}>
            <div className={`${styles.WhoWeAreContent} content a-center j-center column`}>
                <h3 className={`${styles.WhoWeAreTitle} ${oswald.className}`}>Who We Are</h3>
                <div className={styles.WhoWeAreCopy}>
                    <p className={`${ptsans.className}`}>
                        At Direct Car Hire, We are a family run business, we are more than just a car rental service; we are your trusted travel companion, committed to enhancing your journey every step of the way. Our mission is to provide you with an unparalleled car rental experience that goes beyond simply handing you the keys. We believe that every road trip, business venture, or family vacation should be an unforgettable adventure, and we're here to make that happen. Here's what sets us apart and strengthens our bond with you, our valued customers: 
                    </p>
                    <ul className={`${ptsans.className}`}>
                        <li>For over 25 years we have been providing car and van rental services.</li>
                        <li>Transparency No hidden fees, no surprises. We believe in transparent pricing and contract terms, so you know exactly what to expect when renting from us. "The price we quote is the price you pay"</li>
                        <li>Exceptional Fleet: We take pride in offering a diverse and well-maintained fleet of vehicles to suit your every need.</li>
                        <li>Impeccable Service: Our commitment to service excellence is unwavering. Our friendly and knowledgeable staff are dedicated to ensuring that your rental experience is seamless, from the moment you enquire about a vehicle to the return of your rental.</li>
                        <li>All drivers must be over 27 years old, with 3 years driving experience. </li>
                        <li>Safety First: Your safety is paramount to us. We meticulously maintain and regularly inspect our vehicles to ensure they meet the highest safety standards. We also provide optional add-ons like GPS navigation and child seats for your peace of mind.</li>
                        <li>Payments are card payments only.</li>
                        <li>We can offer a Free local delivery and collection service.</li>
                        <li>Affordability: We understand that budget considerations play a significant role in your travel plans. That's why we offer competitive pricing and a range of rental options to accommodate various budgets. We offer a Price match guarantee, on like for like quotes in the local area.  </li>
                        <li>Your Feedback Matters: We value your feedback and actively seek your opinions to improve our services continually. Your input helps us shape a better car rental experience for all our customers. </li>
                        <li>At Direct Car Hire, we don't just rent cars; we provide the means for unforgettable journeys and memories that last a lifetime. We invite you to experience the difference when you choose us as your travel partner. Thank you for entrusting us with your car rental needs. Your satisfaction is our utmost reward.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}


export default WhoWeAre