import styles from '../stylesheets/about.module.css'

function About() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.iconContainer}>
                <div className={styles.column}>
                    <div className={styles.circle1}>
                        <div className={styles.circleTitle1}>About This Project</div>
                        <div className={styles.text1}>
                            This project is inspired by and based on <a href="https://stanfordopendata.org/" className={styles.textLink}>the Stanford Open Data Project (SODP)</a>. It was initially developed during April 9, 2021 - April 11, 2021, when the first Stanford Open Datathon took place. It was an amazing opportunity for me to get more exposure to open datasets and building React apps. I am glad that I learned a lot during this datathon.
                        </div>
                        <div className={styles.circle3}></div>
                    </div>
            
                </div>

                <div className={styles.column}>
                    <div className={styles.circle2}>
                        <div className={styles.circleTitle2}>Future Plans</div>
                        <div className={styles.text2}>
                            Current datasets on the portal only provide a prototype and are not open data from Lehigh University. Since the entire goal of this project is to make university data public and accessible, I researched whether my institution maintains open data. It turns out that <a href="https://oirsa.lehigh.edu/data-center" className={styles.textLink2}>Lehigh University’s Data Center</a> publics current and past data on university profile, admission, majors and etc. However, these data are either in the formats of pdfs or Tableau, and thus pose difficulties to further study and analyze. Therefore, I'm looking forward to transform these data into more common dataset file formats.
                            <br></br><br></br>
                            With more datasets being added to this data portal, I hope to integrate some more advanced functionalities beside providing the datasets' overview and downloads. It will be great if data visualization could be integrated with datasets.
                        </div>
                        <div className={styles.circle4}></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About