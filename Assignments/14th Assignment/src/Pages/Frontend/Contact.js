import Button from 'Components/Button/Button'
import SectionHeading from 'Components/OtherComponents/SectionHeading'
import React from 'react'

export default function Contact() {


    const containerStyle = {
        "minHeight": "250px",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-evenly"
      }

    return (
        <section id="contact">
            <div className="section-container" style={containerStyle}>
                <SectionHeading number="04.What's Next?" name="Get In Touch" display="none" direction="column" style={{ "width": "fit-content", "margin": "auto", "alignItems": "center" }} />
                <div className="contact_para">
                    I'm currently in a search of new and better opportunities. My inbox is always open. Whether you wanna hire or just say hi, I'll try my best to get back to you!
                </div>
            </div>
            <Button name="Say Hello" padding="15px 25px" border="white" link="mailto:ahmadjajja86@gmail.com"/>
        </section>
    )
}
