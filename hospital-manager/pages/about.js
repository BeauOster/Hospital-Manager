import React from "react";

import aboutStyle from "../Styles/aboutPage.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Image from "next/image";
import patientExperience from "../images/patientExperience.jpg";
import missionImage from "../images/missionImage.jpg";
import dataImage from "../images/dataImage.jpg";
import workloadImage from "../images/workloadImage.jpg";

export default function AboutPage() {
    return (
        <div className={aboutStyle.aboutMain}>
            <Header />
            <NavBar />

            <div className={aboutStyle.introParagraph}>
                <h2>The Mission</h2>
                <Image
                    src={missionImage}
                    className="missionImage"
                    alt="Our System's Goal"
                />
                <p>
                    This system is designed to help staff members add and
                    organize important information about their patients in order
                    to provide them with the best care possible. The Rest
                    Assured Hospital Management system automates administrative
                    tasks such as patient registration, prescription handlings,
                    and record collection in order to foster a more organized
                    work environment for hospital staff members. The system's
                    integrated software improves the clincal workflow and makes
                    all of the other goals a reality in the process.
                </p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="experienceParagraph">
                <h2>Improved Patient Experience</h2>
                <Image
                    src={patientExperience}
                    className="patientImage"
                    alt="Foster healthy experience"
                />
                <p className={aboutStyle.experienceFont}>
                    Rest Assured Hospital Management aims to create an
                    environment that fosters a seamless experience for both
                    staff and patients. Both patients and staff members are
                    provided with a streamline way of booking appointments based
                    on availability. When patient flow is optimized, it can lead
                    to reduced waiting periods, provide real-time updates, and
                    make for more personable visits. All of which lead to
                    satisfied patients.
                </p>
            </div>

            <br></br>

            <div className="workloadParagraph">
                <h2>Reduced Workload and Paperwork Stress</h2>
                <Image
                    src={workloadImage}
                    className="workloadImage"
                    width={450}
                    height={300}
                    alt="Reduced Workload"
                />
                <p className={aboutStyle.workloadFont}>
                    By developing a system that streamlines workflow, this
                    management system helps relieve the burden of managing large
                    loads of paperwork for health care staff. Having a digitized
                    way of organizing patient information can also play a
                    crucial role in preventing or minimizing errors, such as
                    misdiagnosis, medication errors, and mistakes with billing.
                    Ultimately, this increased level of effciency gives staff
                    the opportunity to focus more on caring for their patients.
                </p>
            </div>

            <div className="managementParagraph">
                <h2>Data Management</h2>
                <Image
                    src={dataImage}
                    className="dataImage"
                    alt="Improved data management"
                />
                <p className={aboutStyle.managementFont}>
                    The Rest Assured Management System ensures precise
                    record-keeping of patient information such as their medical
                    history, prescriptions, and test results. Maintaining this
                    accuracy is important in terms of providing patients with
                    the most efficient care. Being able to quickly access this
                    information also allows health care providers to make quick
                    and well-informed decisions. Any errors that may occur along
                    the way can lead to serious and potentially life-threatening
                    outcomes for the patients.
                </p>

                <p className={aboutStyle.managementFont}>
                    In terms of its technical benefits, this system utilizes the
                    accurate patient data in order to make sure that billing
                    claims properly reflect the services being provided. As
                    hospital staff members, it is important to note that
                    inaccuracies in this information can lead to losses for the
                    hospital. There is also the system's legal components. All
                    hospitals must make all legal requirements, which is why
                    properly managing this data simplifies this process. This
                    data can then be used for analytical purposes in terms of
                    medical studies such as health studies and hospital
                    performance. Even though those things are of great
                    importance, the Rest Assured Hospital Management system
                    prides itself on patient privacy and data security. Having
                    authentification protocols set in place is what helps the
                    system make sure that sensitive is never accessed by
                    unauthorized personnel.
                </p>
            </div>
            <Footer />
        </div>
    );
}
