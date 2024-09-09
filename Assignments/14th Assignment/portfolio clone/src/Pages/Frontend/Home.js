import Button from 'Components/Button/Button'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <section id="home">
                <span id="home_intro">
                    Hi, my name is
                </span>
                <h1 className="home_intro_name">
                    Ahmad Jajja
                </h1>
                <h1 className="home_intro_job">
                    Software Engineer and Trainer
                </h1>
                <div className="description">
                    As a Software Engineer, I bring a diverse background with expertise in building Generative AI applications (Python, LLMs, Vectara, RAG), web applications (MERN), and mobile applications (React Native). Additionally, as a Tech Trainer, I have trained 1000+ students in various programming languages and technologies at <Link to={"https://www.linkedin.com/company/saylanimassittraining?_l=en_US"}>SMIT</Link>, <Link to={"https://www.linkedin.com/company/icode-guru"}>iCodeGuru</Link> and Stanford University (as a <Link to={"https://www.linkedin.com/posts/ahmad-jajja_stanfordabrcodeabrinabrplaceabrlearnings-activity-7195142429073633281-zNhV/?utm_source=share&utm_medium=member_desktop"}>Section Leader Mentor</Link>).
                </div>
                <Button name="Get in Touch" padding="20px 20px" margin="50px 0px" link="mailto:ahmadjajja86@gmail.com" />
            </section>
            <div className="fixed_links">
                {/* Github */}
                <Link to={"https://github.com/Ahmadjajja"}>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        height="25px"
                        width="25px"
                    >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                </Link>
                {/* Leetcode */}
                <Link to={"https://leetcode.com/ahmadjajja86/"}>
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="25px"
                        width="25px"
                    >
                        <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z" />
                    </svg>
                </Link>
                {/* Twitter */}
                <Link to={"https://twitter.com/AhmadJajja786"}>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        height="25px"
                        width="25px"
                    >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                </Link>
                {/* LinkdIn */}
                <Link to={"https://www.linkedin.com/in/ahmad-jajja-ba8b34210/"}>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        height="25px"
                        width="25px"
                    >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <path d="M6 4 A2 2 0 0 1 4 6 A2 2 0 0 1 2 4 A2 2 0 0 1 6 4 z" />
                    </svg>
                </Link>
                {/* Line */}
                <div className="links_line"></div>
            </div>
            <div className="email">
                <a href="mailto:ahmadjajja86@gmail.com">ahmadjajja86@gmail.com</a>
                <div className="email_line"></div>
            </div>
        </>
    )
}
