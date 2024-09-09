import React from 'react'
import { Link } from 'react-router-dom'
import image from "../../Assets/about_image.jpg"
import Arrow from 'Components/OtherComponents/Arrow'
import SectionHeading from 'Components/OtherComponents/SectionHeading'
import Skills from 'Components/OtherComponents/Skills'

export default function About() {
    return (
        <section id='about'>
            {/* HEading Container */}
            <SectionHeading number="01." name="About Me" />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="about_description">
                            <div>
                                Hello! I'm Ahmad, a full-stack software engineer from Faisalabad, PK.
                            </div>
                            <div>
                                I have expertise in building Generative AI applications (Python, LLMs, Vectara, RAG), web applications (MERN), and mobile applications (React Native). I bring a diverse background, having worked collaboratively in teams professionally, participated in International Hackathons, worked independently as a freelancer .
                            </div>
                            <div>
                                As a tech trainer at the <Link to={"https://pk.worldorgs.com/catalog/faisalabad/accountant/saylani-mass-training-faisalabad"}>Saylani Welfare Mass Training & Job Creation Program</Link> I've taught 1000+ students by simplifying complex programming concepts (wanna see how I provide training to my students? <Link to={"https://www.linkedin.com/posts/ahmad-jajja_learn-to-code-with-activity-7151895134744256512-Dmyf?utm_source=share&utm_medium=member_desktop"}>click here</Link> ).
                            </div>
                            <div>
                                I helped over 100 international folks around the globe🌍 solve coding problems in Python as a <Link to={"https://www.linkedin.com/feed/update/urn:li:activity:7186385467846639620/"}>Section Leader</Link> and <Link to={"https://www.linkedin.com/posts/ahmad-jajja_stanfordabrcodeabrinabrplaceabrlearnings-activity-7195142429073633281-zNhV/?utm_source=share&utm_medium=member_desktop"}>Section Leader Mentor</Link> (<i>teaching one-on-one</i>) at  <Link to={"https://codeinplace.stanford.edu/"}>Stanford's Code in Place</Link> .
                            </div>
                            <div>
                                I have <Link to={"https://lablab.ai/u/@ahmad_jajja288"}>participated</Link> in multiple AI International Hackathons and <Link to={"https://www.linkedin.com/feed/update/urn:li:activity:7176624410651504641/"}>won</Link> one of them (Unhallucinate Challenge).
                            </div>
                            <div>
                                I graduated from the <Link to={"http://web.uaf.edu.pk/"}>University of Agriculture, Faisalabad</Link> in June, 2024.
                            </div>
                            <div>
                                I aim to pursue further studies in the United States to advance in technology research and innovation.
                            </div>
                            {/* Skills */}
                            <div className="container p-0">
                                <div className="row">
                                    Here are a few technologies I've been working with recently:
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 my-0">
                                        <Skills name="C" />
                                        <Skills name="Dart" />
                                        <Skills name="Python" />
                                        <Skills name="Typescript" />
                                        <Skills name="CSS3" />
                                        <Skills name="Chakra-UI" />
                                        <Skills name="Bootstrap" />
                                        <Skills name="React-Native" />
                                        <Skills name="FireStore" />
                                        <Skills name="Express-JS" />
                                        <Skills name="Git" />
                                        <Skills name="Rest-APIs" />
                                        <Skills name="Generative AI" />
                                    </div>
                                    <div className="col-12 col-md-6 my-0">
                                        <Skills name="C++" />
                                        <Skills name="Java" />
                                        <Skills name=" JavaScript (ES6+)" />
                                        <Skills name="HTML5" />
                                        <Skills name="SCSS, SASS" />
                                        <Skills name="Ant-Design" />
                                        <Skills name="React-JS" />
                                        <Skills name="Firebase" />
                                        <Skills name="Node-JS" />
                                        <Skills name="Mongo-DB" />
                                        <Skills name="Github" />
                                        <Skills name="GraphQL" />
                                        <Skills name="LLMs" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="image_card">
                            <img src={image} alt="" style={{ "width": "-webkit-fill-available", "cursor": "pointer", "height": "-webkit-fill-available" }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}






