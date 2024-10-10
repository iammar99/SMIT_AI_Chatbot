import React from 'react'
import Card from "../Components/Card"
// images for card of fields
import img1 from '../Assets/healthcare.png'
import img2 from '../Assets/finance.png'
import img3 from '../Assets/education.png'
// images for card of advantages
import img4 from '../Assets/efficiency.png'
import img5 from '../Assets/personalization.png'
import img6 from '../Assets/cost.png'


export default function Home() {


  // Variables to store description

  let des1 = "Generative AI assists in developing personalized treatment plans, discovering new drugs, and enhancing medical imaging, revolutionizing the healthcare industry with precision and innovation."

  let des2 = "Generative AI is used for financial modeling, risk assessment, fraud detection, and algorithmic trading, enabling more accurate predictions and automating complex financial processes."

  let des3 = "Generative AI creates personalized learning experiences, generates educational content, and provides intelligent tutoring, enhancing student engagement and tailoring education to individual learning needs"

  let des4 = "Generative AI rapidly generates large volumes of content, designs, or code, significantly faster than manual efforts, boosting productivity and reducing time-to-market."

  let des5 = "Generative AI creates personalized content or recommendations based on user preferences, enhancing user experience by delivering more relevant and engaging interactions."

  let des6 = "Automating content creation and task execution with Generative AI reduces operational costs, particularly in marketing and customer service, improving overall business efficiency."


  return (
    <main>
      <h1 className="main-heading">
        Welcome to my GEN AI website!
      </h1>
      <h2 className="main-heading">
        Fields For GEN AI
      </h2>
      <div className="fields">
        <Card heading="Healthcare" img={img1} description={des1} />
        <Card heading="Finance" img={img2} description={des2} />
        <Card heading="Education" img={img3} description={des3} />
      </div>
      <h2 className="main-heading">
        Advantages of GEN AI
      </h2>
      <div className="advantages">
        <Card heading="Efficiency and Speed" img={img4} description={des4} />
        <Card heading="Personalization" img={img5} description={des5} />
        <Card heading="Cost Savings" img={img6} description={des6} />
      </div>
    </main>
  )
}
