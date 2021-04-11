import { Link } from "react-router-dom";
import styles from '../stylesheets/home.module.css'
import LehighImage from '../images/lehigh.jpeg';
import IdeaIcon from '../images/idea.png';
import SearchIcon from '../images/transparency.png';
import ContactIcon from '../images/honesty.png';
import BarchartIcon from '../images/educational-bars-graphic.png';
import GraduationIcon from '../images/graduation.png';
import MajorIcon from '../images/paint.png';
import GlobeIcon from '../images/school-globe.png';

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

                <div className={styles.welcomeQuote}>
                “Data really powers everything that we do.”
                </div>

                <div className={styles.welcomeAuthor}>– Jeff Weiner</div>

            </div>

            <div>
                <div className={styles.exploreTitle}>Explore Our Data Portal</div>
                <div className={styles.iconContainer}>
                    <div className={styles.column}>
                        <div className={styles.circle1}>
                            
                            <img src={IdeaIcon} className={styles.icon1} alt=""/>
                        </div>

                        <div className={styles.circleTitle}>
                            Learn Open Data
                        </div>

                        <div className={styles.circleText}>
                            Start learning what open data is and the power of open data.
                            <Link to="/Resources" className={styles.button}> &#62; Learn More</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.circle2}>
                            <img src={SearchIcon} className={styles.icon2} alt=""/>
                        </div>

                        <div className={styles.circleTitle}>
                            Browse Datasets
                        </div>

                        <div className={styles.circleText}>
                            Take a look and browse the datasets we have in our data portal. &ensp;
                            <Link to="/Datasets" className={styles.button}> &#62; Learn More</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.circle3}>
                            <img src={ContactIcon} className={styles.icon3} alt=""/>
                        </div>

                        <div className={styles.circleTitle3}>
                            Our Initiative
                        </div>

                        <div className={styles.circleText3}>
                            Get in touch with us, view our initiative and provide suggestions!
                            <Link to="/About" className={styles.button}> &#62; Learn More</Link>
                        </div>
                    </div>
                </div>


            </div>

            <div className={styles.wrapper2}>
                <div className={styles.searchTitle}>Search Data by Category</div>
                <div className={styles.searchIconContainer}>
                    <div className={styles.column2}>
                        <img src={BarchartIcon} className={styles.searchIcon} alt=""/>
                        <div className={styles.searchIconTitle}>Admission</div>
                    </div>

                    <div className={styles.column2}>
                        <img src={GraduationIcon} className={styles.searchIcon} alt=""/>
                        <div className={styles.searchIconTitle2}>Graduation</div>
                    </div>

                    <div className={styles.column2}>
                        <img src={MajorIcon} className={styles.searchIcon} alt=""/>
                        <div className={styles.searchIconTitle3}>Major</div>
                    </div>

                    <div className={styles.column2}>
                        <img src={GlobeIcon} className={styles.searchIcon} alt=""/>
                        <div className={styles.searchIconTitle4}>Diversity</div>
                    </div>

                </div>
            </div>
            
            
        </div>

    )
}

export default Home