import Button from 'Components/Button/Button'
import OtherProjectCard from 'Components/OtherComponents/OtherProjectCard'
import React, { useState } from 'react'

export default function OtherProjects() {

    const [display, setDisplay] = useState(true)


    const handleMore = () => {
        document.getElementById("moreProjects").style.display = "block";
        setDisplay(false)
    }

    const handleLess = () => {
        document.getElementById("moreProjects").style.display = "none";
        setDisplay(true)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="other_projects_heading my-5">
                    Other Projects
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <OtherProjectCard
                        heading="Full Stack E-Commerce Mobile App Frontend"
                        description="E-commerce mobile app with user registration, product catalog, cart, wishlist, checkout, payment, order tracking, and admin dashboard."
                        techs="JavaScript, React-Native, Redux, Context-API, Native-Base, Node-JS, Express JS, Mongodb"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <OtherProjectCard
                        heading="Full Stack E-Commerce Mobile App Backend"
                        description="Manages data, handles business logic, and provides APIs for frontend interactions, including user authentication, product management, and search functionality."
                        techs="Javascript, Node-JS, Express-JS, MongoDB (Aggragation, populate)"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <OtherProjectCard
                        heading="TODO List Mobile App"
                        description="Organize tasks, set reminders, and track progress with a user-friendly interface for efficient task management."
                        techs="React-Native, Redux, Local-Storage"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <OtherProjectCard
                        heading="CRUD - ReactJS, Firebase"
                        description="Create, Read, Update, and Delete data seamlessly with a dynamic and interactive user interface."
                        techs="HTML, CSS, Bootstrap5, JavaScript, React JS, Firebase, Firestore"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <OtherProjectCard
                        heading="React Color Flipper"
                        description="Dynamic color generator inspired by WhatsApp text status. Simple and fun!"
                        techs="HTML, CSS, Bootstrap5, JavaScript, React"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <OtherProjectCard
                        heading="Beat the Button: Piano"
                        description="A fun and interactive web-based piano game built using HTML, CSS, and JavaScript, where players strive to beat the buttons in a thrilling musical challenge."
                        techs="HTML, CSS, Bootstrap5, Javascript"
                    />
                </div>
            </div>
            <Button name="Show More" padding="13px 20px" margin="50px auto" display={display ? "block" : "none"} handleClick={handleMore} />
            {/* More Projects */}
            <div className="container" id="moreProjects">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <OtherProjectCard
                            heading="Calculator"
                            description="Versatile calculator with arithmetic operations, backspace, and clear functionality, designed for seamless calculations."
                            techs="HTML, CSS, Bootstrap5, Javascript"
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <OtherProjectCard
                            heading="Wine Shop"
                            description="E-Commerce Shop design featuring a dynamic carousel, intuitive navigation, and convenient cart for wine purchases."
                            techs="HTML, CSS, Bootstrap5"
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <OtherProjectCard
                            heading="User Management System"
                            description="user management system with features like user list generation, addition, deletion, and login."
                            techs="HTML, CSS, Bootstrap5, Javascript, Local Storage"
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <OtherProjectCard
                            heading="Smart Kitchen"
                            description="Designed a user-friendly website for a pizza shop, showcasing a variety of pizzas with an intuitive ordering system."
                            techs="HTML, CSS, Bootstrap5"
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <OtherProjectCard
                            heading="Versatile SBUI Kit"
                            description="Crafted a versatile SBUI kit, empowering businesses with a captivating design template adaptable to various industries."
                            techs="HTML, CSS, Bootstrap5"
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <OtherProjectCard
                            heading="Chatify"
                            description="Chatify is a user-friendly chat application that utilizes local storage for seamless and secure messaging experiences."
                            techs="HTML, CSS, Bootstrap5, Javascript, Local Storage"
                        />
                    </div>
                </div>
                <Button name="Show Less" padding="13px 20px" margin="50px auto" display="block" handleClick={handleLess} />
            </div>
        </div>
    )
}
