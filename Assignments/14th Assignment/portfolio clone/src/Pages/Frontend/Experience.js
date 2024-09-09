import React from 'react'
import { Link } from 'react-router-dom';
import Arrow from 'Components/OtherComponents/Arrow';
import ExperinceHeading from 'Components/OtherComponents/ExperinceHeading';
import SectionHeading from 'Components/OtherComponents/SectionHeading'

export default function Experience() {

    const handleActive = (id) => {

        // For Navbar

        let Link_array = ['ecofactor', 'lablab', 'icodeguru', 'smit', 'stanford', 'zxtech', 'seeraht', 'freelancing']
        for (let i = 0; i < Link_array.length; i++) {
            document.getElementById(Link_array[i]).classList.remove("active");
        }
        document.getElementById(id).classList.add("active");

        // For Description

        let desc_array = ['ecofactor_desc', 'lablab_desc', 'icodeguru_desc', 'smit_desc', 'stanford_desc', 'zxtech_desc', 'seeraht_desc', 'freelancing_desc']
        for (let i = 0; i < desc_array.length; i++) {
            document.getElementById(desc_array[i]).classList.remove("active");
        }
        document.getElementById(id + "_desc").classList.add("active");
    }


    return (
        <section id='experience'>
            {/* Heading */}
            <SectionHeading number="02." name="Where I've Worked" />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <div className="experience_navbar">
                            <ul>
                                <li id='ecofactor' className="ecofactor active" onClick={() => { handleActive("ecofactor") }}>EcoFactor</li>
                                <li id='lablab' className="lablab" onClick={() => { handleActive("lablab") }}>lablab.ai</li>
                                <li id='icodeguru' className="icodeguru" onClick={() => { handleActive("icodeguru") }}>iCodeGuru</li>
                                <li id='smit' className="smit" onClick={() => { handleActive("smit") }}>SMIT</li>
                                <li id='stanford' className="stanford" onClick={() => { handleActive("stanford") }}>Stanford Univ.</li>
                                <li id='zxtech' className="zxtech" onClick={() => { handleActive("zxtech") }}>ZWTech</li>
                                <li id='seeraht' className="seeraht" onClick={() => { handleActive("seeraht") }}>SEERAHT</li>
                                <li id='freelancing' className="freelancing" onClick={() => { handleActive("freelancing") }}>Freelancing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="expereince_description">
                            {/* Ecofactor Description */}
                            <div id="ecofactor_desc" className="ecofactor_desc active">
                                <ExperinceHeading heading="Co-Founder & Dev Lead" link="@EcoFactor" url="https://ecofactorsite.netlify.app/" date="Feb 2024 - present" />
                                <div className="pt mt-4">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        As a Co-Founder, I'm putting my best efforts with my team into making <b>EcoFactor</b> a reality.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow" style={{ "width": "60px" }}>
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        <b>As a Dev Lead</b>, my focus is on the development side of our project EcoFactor. I'm handling front-end, AI integration, and backend with my team. We, as Dev members, are working collaboratively on this project.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        <b>EcoFactor</b> currently consists of a team of 7 members: 4 from Pakistan, 2 from Brazil, and 1 from Latvia.
                                    </div>
                                </div>
                            </div>
                            {/* lablab Description */}
                            <div id="lablab_desc" className="lablab_desc">
                                <ExperinceHeading heading="Hackathon Enthusiast" url="https://lablab.ai/" link="@lablab.ai" date="Jun 2023 - present" />
                                <div className="pt mt-4">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        <Link>Participated</Link> in multiple AI International Hackathons and <Link>won</Link> one of them (Unhallucinate Challenge).
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Focused on enhancing my generative AI skills through these hackathons by building something cool.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Embraced the advent of ChatGPT, recognizing that everyone has equal opportunities in generative AI.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        It's worth spending time in hackathons to create truly amazing and innovative projects using generative AI, LLMs, and other AI technologies.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Spent time in hackathons to create truly amazing and innovative projects using generative AI, LLMs, and other AI technologies.
                                    </div>
                                </div>
                            </div>
                            {/* icodeguru Description */}
                            <div id="icodeguru_desc" className="icodeguru_desc">
                                <ExperinceHeading heading="Trainer" url="https://www.linkedin.com/company/icode-guru/mycompany/" link="@iCodeGuru" date="Feb 2023 - present" />
                                <div className="pt mt-4">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Trainer and moderator at <b>iCodeGuru</b> platform, with 20,000+ <b>members</b>.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow" >
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Teaching <b>Python Programming language</b> and <b>DSA Through Leetcode</b>.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Conducting <b>Weekly Workshops</b> on key DSA topics to help underprivileged students learn freely.
                                    </div>
                                </div>
                                <div className="pt mt-4">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Voluntarily taught the <b>Duolingo English Proficiency Test</b> to students.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        <Link><h2>(Python,DSA,LeetCode) Playlist</h2></Link>
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        <Link><h2>(Duolingo English Proficiency ) Playlist</h2></Link>
                                    </div>
                                </div>
                            </div>
                            {/* smit Description */}
                            <div id="smit_desc" className="smit_desc">
                                <ExperinceHeading heading="Tech Trainer" url="https://pk.worldorgs.com/catalog/faisalabad/accountant/saylani-mass-training-faisalabad" link="@SMIT" date="Dec 2022 - present" />
                                <div className="pt mt-4">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Instructed 1000+ students.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow" style={{ "width": "60px" }}>
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        My role involves delivering comprehensive training sessions on the MERN stack, covering frontend and backend development, database management, and mobile app development using React Native.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        I aim to empower students to become proficient MERN stack developers, providing them with practical knowledge and guidance to build real-world applications using the MERN stack.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Providing instructions in HTML5, CSS3, SCSS, SASS, Bootstrap 5, JavaScript ES6+, TypeScript, React JS (Context API, Router, State Management), React Native, Redux, Firebase, Firestore, Node JS (ExpressJS, Authentication, API Endpoint Handling), MongoDB, Heroku, Surge, Netlify (Hosting), Git, Github.
                                    </div>
                                </div>
                                {/* Course */}
                                <div className="course_heading">
                                    🔄 Courses
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        <Link>GenAI_Chatbot_1.0  <span className='link_text'>(Current)</span></Link>
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        <Link>Backend_Development_1.0  <span className='link_text'>(Completed)</span></Link>
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        <Link>Full_Stack_Development_1.0  <span className='link_text'>(Current)</span></Link>
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        <Link>Web_Designing_Bootcamp_1.0  <span className='link_text'>(Completed)</span></Link>
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        <Link>Web_Designing_Bootcamp_2.0  <span className='link_text'>(Completed)</span></Link>
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        <Link>Frontend_Web_Development_1.0   <span className='link_text'>(Completed)</span></Link>
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        <Link>Frontend_Mobile_Development_1.0   <span className='link_text'>(Completed)</span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* stanford Description */}
                            <div id="stanford_desc" className="stanford_desc">
                                <ExperinceHeading heading="Section Leader Mentor" url="https://codeinplace.stanford.edu/" link="@Stanford University" date="Apr 2024 - jun 2024" />
                                <div className="pt mt-4">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Selected as a <Link>Section Leader</Link> for <b>Stanford's code in place</b> to teach <b>Python</b> to international students in groups of 10-15.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow" style={{ "width": "60px" }}>
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Later, I was promoted to <Link>Section Leader Mentor</Link> for <b>one-on-one Student Support</b> and taught 56 <b>TeachNow sessions</b>.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        I helped 100+ <b>international folks</b> worldwide, including countries like the <b>𝐔𝐒𝐀, 𝐂𝐚𝐧𝐚𝐝𝐚, 𝐑𝐮𝐬𝐬𝐢𝐚, 𝐭𝐡𝐞 𝐔𝐊, 𝐈𝐧𝐝𝐢𝐚, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡, 𝐁𝐫𝐚𝐳𝐢𝐥, 𝐆𝐞𝐫𝐦𝐚𝐧𝐲,</b> and others.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Observed students aged 18-80, showcasing <b>universal interest inprogramming</b>, even among those <b>over</b> 60.
                                    </div>
                                </div>
                            </div>
                            {/* zwtech Description */}
                            <div id="zxtech_desc" className="zxtech_desc">
                                <ExperinceHeading heading="MERN Stack Develope" link="@ZWTech" date="Sep 2022 - Mar 2023" />
                                <div className="pt mt-4">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Implemented new features and modified existing ones on the front-end using React JS for a business website similar to LinkedIn, specifically designed for employee recruitment for a UAE-based client.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow" style={{ "width": "60px" }}>
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Built a GraphQL API from scratch and modified existing GraphQL APIs using Node.js on the back-end, facilitating efficient data management and integration with the Dashboard.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Contributed to the development of a comprehensive platform that streamlined the hiring process for companies, leveraging React JS for the front-end and a robust GraphQL API with Node.js on the back-end, enhancing the client's ability to find and hire suitable employees.
                                    </div>
                                </div>
                            </div>
                            {/* seeraht Description */}
                            <div id="seeraht_desc" className="seeraht_desc">
                                <ExperinceHeading heading="MERN Stack Developer" url="https://seeraht.com/" link="@SEEHRAT" date="May 2022 - Aug 2022" />
                                <div className="pt mt-4">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Developed and maintained web applications using the MERN stack, focusing on delivering high-quality, scalable, and efficient code for clients at Seeraht software company.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow" style={{ "width": "60px" }}>
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Collaborated with cross-functional teams to understand business requirements and implemented technical solutions, utilizing modern development techniques to design and implement complex software features.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Conducted code reviews, participated in the software development lifecycle, and troubleshooted and debugged code issues. Demonstrated a deep understanding of the MERN stack, Agile development practices, and effective communication and collaboration skills to create cutting-edge web applications that transformed business operations.
                                    </div>
                                </div>
                            </div>
                            {/* frelancing Description */}
                            <div id="freelancing_desc" className="freelancing_desc">
                                <ExperinceHeading heading="MERN Stack Developer" link="@Fb and local Clients" date="Nov 2021 - present" />
                                <div className="pt mt-4">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Developed and delivered a wide range of web-based solutions, utilizing front-end technologies such as HTML, CSS, and JavaScript, as well as back-end technologies such as Node.js and Express js.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow" style={{ "width": "60px" }}>
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Built and maintained strong relationships with clients through effective communication and problem-solving skills, ensuring timely completion and adherence to project requirements.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Accomplished in utilizing version control systems such as Git and SVN, and implementing agile methodologies for efficient project management.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Proven ability to work independently as well as part of a team, successfully delivering projects on time and within budget.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Experience with database management systems such as MongoDB.
                                    </div>
                                </div>
                                <div className="pt">
                                    <div className="experience_arrow">
                                        <Arrow width="25px" height="25px" />
                                    </div>
                                    <div className='ps-3'>
                                        Experience in integrating web applications with third-party APIs and services.
                                        03.Somethings I've built
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
