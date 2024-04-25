import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../Styles/global.module.css';

import Image from 'next/image';
import welcomeImage from '../images/welcomeImage.jpg';





export default function Home() {
    return (
        <div className={styles.font}>
            <Header />
            <NavBar /> 
            <br></br>
            
        
            <article className={styles.welcomeParagraph}>
                <h2>Welcome to Rest Assured</h2>
                
                <p>A new and improved way of capturing, storing, and retreiving patient
                    records.<br></br> The Rest Assured Hospital Management System is the
                    gateway to improved wellness. <br></br>
                </p>
                <p>From primary care to radiology, our new and improved system providers
                    mediacal <br></br> personnel the ability to cater to all
                    of their patient's needs. Authorized staff members <br></br>
                    will be able to readily access patient records, test results, and
                    assist in checking, <br></br> schedueling, or cancelling appointments 
                    for their patients. 
                </p>
                <p>The staff members of Rest Assured Hospital are dedicated to provide
                    the best service <br></br> possible for the patients. Aside from
                    technical skills, the best way this can be done is <br></br> to
                    learn how this system works. Staff members will be required to go
                    through a 3-4 <br></br> day training course in order to gain a proper
                    understanding of how to use system in order <br></br> to store and
                    retreive patient information. 
                </p>
            </article>
            <Image src={welcomeImage} className={styles.welcomeImage}  width={400} height={300} alt="Welcome to Rest Assured" />
            <Footer />
        </div>
    );
}