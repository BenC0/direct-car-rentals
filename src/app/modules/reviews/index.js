import styles from './index.module.css'
import { oswald, ptsans } from "../../styles/fonts"
import Image from 'next/image';
import { CallToAction } from "../call_to_action"

const ReviewsContent = [
    {
        key: 0,
        rating: 5,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan et elit id aliquam. Morbi vel augue id leo semper vehicula. Ut fringilla mauris in neque ullamcorper consequat.",
        author: "Mrs. Lauren Ipsum, New Zealand"
    },
    {
        key: 1,
        rating: 4,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan et elit id aliquam. Morbi vel augue id leo semper vehicula. Ut fringilla mauris in neque ullamcorper consequat.",
        author: "Mrs. Lauren Ipsum, New Zealand"
    },
    {
        key: 2,
        rating: 3,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan et elit id aliquam. Morbi vel augue id leo semper vehicula. Ut fringilla mauris in neque ullamcorper consequat.",
        author: "Mrs. Lauren Ipsum, New Zealand"
    },
    {
        key: 3,
        rating: 2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan et elit id aliquam. Morbi vel augue id leo semper vehicula. Ut fringilla mauris in neque ullamcorper consequat.",
        author: "Mrs. Lauren Ipsum, New Zealand"
    },
    {
        key: 4,
        rating: 1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan et elit id aliquam. Morbi vel augue id leo semper vehicula. Ut fringilla mauris in neque ullamcorper consequat.",
        author: "Mrs. Lauren Ipsum, New Zealand"
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
                        href="#reviews-link"
                    ></CallToAction>
                </div>
            </div>
        </section>
    )
}


export default Reviews