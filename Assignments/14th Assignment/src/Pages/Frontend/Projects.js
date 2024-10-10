import React from 'react'
import ProjectsCard from 'Components/OtherComponents/ProjectsCard'
import SectionHeading from 'Components/OtherComponents/SectionHeading'
// ------------------ Images ---------------------
import ecoFactor from "../../Assets/EcoFactor.jpg"
import plant from "../../Assets/PlantDiseaseDetection.jpg"
import podcast from "../../Assets/AIPodcasteGenerator.png"
import dsa from "../../Assets/JAVADSA.png"
import bank from "../../Assets/BankApp.png"
import realEstate from "../../Assets/RealEstateMobileApp.png"
import crud from "../../Assets/CRUDMERN.png"
import mern from "../../Assets/MERN-Bootcamp.jpg"

export default function Projects() {
    return (
        <>
            <section id="projects" >
                <SectionHeading number="03." name="Something I've built" />
                <div className="my-5"></div>
                <ProjectsCard
                    name="EcoFactor"
                    description="AI-powered tool: Optimize processes, reduce waste, save costs with eco-friendly materials for diverse industries."
                    techs="HTML, CSS, Bootstrap 5, JavaScript, React, Python, Flask, Generative AI(GPT-4o, Weaviate Vector database, RAG Application)"
                    img={ecoFactor}
                    link="https://github.com/Ahmadjajja/ecofactory"
                />
                <ProjectsCard
                    name="Plant Disease Detection System"
                    description="Plant disease detection using Flask for web, TensorFlow and Keras for AI, OpenCV for image processing."
                    techs="
Flask, TensorFlow, Keras, OpenCV, Pillow, NumPy, SciPy, Matplotlib, Seaborn, IPython"
                    img={plant}
                    link="https://github.com/Ahmadjajja/plant_disease_detection"
                />
                <ProjectsCard
                    name="AI Podcast Generator"
                    description="This project transforms written content into captivating, lifelike podcasts effortlessly using ElevenLabs API-powered speech synthesis."
                    techs="HTML5 CSS3 Bootstrap5 React-JS Context-API Generative AI, Langchain, Python"
                    img={podcast}
                    link="https://github.com/Ahmadjajja/AIpodcastgenerator"
                />
                <ProjectsCard
                    name="JAVA DSA in 6 Months"
                    description="This is the Curriculum to learn Java DSA from scratch to expert. This repository contains all of code samples during my DSA Learning Journey."
                    techs="Markdown"
                    img={dsa}
                    link="https://github.com/Ahmadjajja/JAVA_DSA"
                />
                <ProjectsCard
                    name="Bank Web App"
                    description="Bank-App is a web application allowing users to manage accounts, perform transactions, and view transaction history conveniently."
                    techs="HTML5 CSS3 Bootstrap5 React-JS Context-API Firebase Firestore"
                    img={bank}
                    link="https://github.com/Ahmadjajja/React_Bank"
                />
                <ProjectsCard
                    name="Real Estate Mobile App"
                    description="Real-Estate Mobile App with authentication, dashboard, property management, searching, browsing and call-to-action feature for property tansactions, powered by REST APIs using Node JS."
                    techs="ReactNative Redux NativeBase NodeJS ExpressJS MongoDB cloudinary"
                    img={realEstate}
                    link="https://github.com/Ahmadjajja/Hackathon_Frontend_2022_Batch_04"
                />
                <ProjectsCard
                    name="CRUD MERN WEB APP"
                    description="CRUD MERN application for streamlined employee management, allowing seamless creation, retrieval, updating, and deletion of employee records."
                    techs="HTML5 CSS3 Bootstrap5 ReactJS NodeJS ExpressJS MongoDB"
                    img={crud}
                    link="https://github.com/Ahmadjajja/MERN-Projects/tree/main/MERN-Projects/CRUD%20-%20MERN"
                />
                <ProjectsCard
                    name="MERN Stack Bootcamp"
                    description="This is the class repository of MERN Stack Development Bootcamp that contains all of code samples and related stuff while i'm instructing."
                    techs="Markdown"
                    img={mern}
                    link="https://github.com/Ahmadjajja/SMIT-WMA-6-A-E"
                />
            </section>
        </>
    )
}
