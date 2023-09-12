import styles from './index.module.css'
import { oswald, ptsans } from "../../styles/fonts"
import Image from 'next/image';
import { CallToAction } from "../call_to_action"

const ReviewsContent = [
    {
        key: 0,
        rating: 5,
        content: "Hired a few times the last month or so whilst ours is off the road; quick in and out with no sales pitch selling extras.  Provide what you need at a good price. Would recommend.",
        author: "Kathryn Hart"
    },
    {
        key: 1,
        rating: 5,
        content: "Best car hire amazing people great prices amazing people to talk too 👍 I would certainly recommend this car hire best keep the good work up guy's well done 👏",
        author: "Richard James"
    },
    {
        key: 2,
        rating: 5,
        content: "I've hired vans on an ongoing basis now for approximately 6 months from Totty Van Hire. I've found them to be reasonably priced vans, ran by nice people who go out of their way to help...",
        author: "Sean Swimby"
    },
    {
        key: 3,
        rating: 5,
        content: "Hired Ford Focus for 2 days, 2 drivers; £80. Marvellous. Really enjoyed the experience. No hidden extras like most other companies. Know where to go next time",
        author: "Brian Pattila"
    },
]

export function Reviews(props) {
	return  (
        <section className={`${styles.Reviews} content-wrapper`}>
            <div className='content a-center j-center column'>
                <h3 className={`${styles.ReviewTitle} ${oswald.className}`}>What do our customers think?</h3>
                <div className={styles.ReviewScroller}>
                    {ReviewsContent.map(review => {
                        return (
                            <div className={`${styles.Review} column`} key={review.key}>
                                <div className={`${styles.ReviewRating} j-center a-center`}>{[...Array(review.rating)].map((n, key) => <Image src="/star.svg" width="28" height="28" key={key} alt="star" /> )}</div>
                                <p className={`${styles.ReviewContent} ${ptsans.className}`}>{review.content}</p>
                                <p className={`${styles.ReviewAuthor} ${ptsans.className}`}><strong>{review.author}</strong></p>
                            </div>
                        ) 
                    })}
                </div>
                <div className={`${styles.ButtonContainer} j-center`}>
                    <CallToAction
                        text="Read more reviews"
                        href="https://www.google.com/search?client=ms-android-samsung-ss&sca_esv=560305232&cs=0&output=search&q=Direct+Car+and+Van+Rentals&ludocid=9518490544439094226&lsig=AB86z5VUdgnZ7Vo6ACMd-RkcWCWJ&kgs=ce6bae3e293fa750&shndl=-1&shem=lbsc,lsp&source=sh/x/kp/local/m1/2#lrd=0x487ba4f69e60323d:0x841878b81334ebd2,1,,,,"
                    ></CallToAction>
                </div>
            </div>
        </section>
    )
}


export default Reviews