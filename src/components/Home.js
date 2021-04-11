import styles from '../stylesheets/home.module.css'
import LehighImage from '../images/lehigh.jpeg';
import IdeaIcon from '../images/idea.png';
import SearchIcon from '../images/transparency.png';
import ContactIcon from '../images/honesty.png';

function Home() {
    return (
        <div className={styles.wrapper}>

            <div className={styles.image}>
                <div className={styles.overlay}></div>
                <img className={styles.homeImage} src={LehighImage} alt="Lehigh" />  

                <div className={styles.welcomeTitle}>
                    Open Data Lehigh
                </div>

                <div className={styles.welcomeText}>
                    Welcome to the Lehigh Open Data Portal! Here we have a catalog of open data in Lehigh University. We believe that having data shared comes with great value, so we invite you to browse our datasets and explore more!
                </div>

            </div>

            <div>
                <div className={styles.exploreTitle}>Explore Our Data Portal</div>
                <div className={styles.iconContainer}>
                    <div className={styles.column}>
                        <div class={styles.circle1}>
                            <img src={IdeaIcon} className={styles.icon1} alt=""/>
                        </div>

                        <div class={styles.circleTitle}>
                            Learn Open Data
                        </div>

                        <div class={styles.circleText}>
                            Start learning what open data is and the power of open data.
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div class={styles.circle2}>
                            <img src={SearchIcon} className={styles.icon2} alt=""/>
                        </div>

                        <div class={styles.circleTitle}>
                            Browse Datasets
                        </div>

                        <div class={styles.circleText}>
                            Take a look and browse the datasets we have in our data portal.
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div class={styles.circle3}>
                            <img src={ContactIcon} className={styles.icon3} alt=""/>
                        </div>

                        <div class={styles.circleTitle3}>
                            Our Initiative
                        </div>

                        <div class={styles.circleText3}>
                            Get in touch with us, view our initiative and provide suggestions!
                        </div>
                    </div>
                </div>


            </div>
            
            
        </div>

    )
}

export default Home