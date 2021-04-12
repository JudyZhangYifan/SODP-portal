import styles from '../stylesheets/about.module.css'

function About() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.iconContainer}>
                <div className={styles.column}>
                    <div className={styles.circle1}>
                        <div className={styles.circleTitle1}>About This Project</div>
                        <div className={styles.text1}>
                            This project is inspired by and based on <a href="https://stanfordopendata.org/" className={styles.textLink}>the Stanford Open Data Project (SODP)</a>. It was initially developed during April 9, 2021 - April 11, 2021, when the first Stanford Open Datathon took place. It was an amazing opportunity for me to get more experience with open datasets and building React apps. I am glad that I learned a lot during these days.
                        </div>
                        <div className={styles.circle3}></div>
                    </div>
            
                </div>

                <div className={styles.column}>
                    <div className={styles.circle2}>
                        <div className={styles.circleTitle2}>Future Plans</div>
                        <div className={styles.text2}>
                            Similar to the data portal built by <a href="https://github.com/StanfordOpenData/open-data-portal" className={styles.textLink2}>Stanford Open Data Project</a>, this data portal was also started by Create React App. Since it doesn’t handle backend logic or databases, I set up an AWS S3 bucket to store objects in .csv and .json format. Data was uploaded to AWS and then retrieved. I used to encounter some issues with CORS policy, but after some fixes the problem seemed to be associated only with certain browsers. It'll be great if the portal could be compatible on all browsers.
                            <br></br><br></br>
                            Since the entire goal of this project is to make university data public and accessible, I researched whether my institution maintains open data and found that <a href="https://oirsa.lehigh.edu/data-center" className={styles.textLink2}>Lehigh University’s Data Center</a> publics current and past data on university profile, admission, majors and etc. However, these data are either in the formats of pdfs or Tableau, and thus pose difficulties to further study and analyze. Therefore, I'm also looking forward to transform these data into more common dataset file formats.
                        </div>
                        <div className={styles.circle4}></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About