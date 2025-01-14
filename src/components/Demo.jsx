import React from 'react'
import '../styles/Demo.css'

export default function Demo() {
    return (
        <>
            <div className="twosection">
                <div className="leftone">
                    <h1>Food Menu with Nutritional and Dietary Management</h1>
                    <p>The Nutrio application provides images of the menu available, a description of the meal and also informs patients of the nutritional content. Patients select their choices on their device and the information is delivered directly to the hospital catering software. This reduces lead-times by 1-2 hours. The Nutrio service has been implemented in many hospitals and care facilities.</p>
                    <button>Request Demo</button>
                </div>
                <div className="rightone">
                    <img src='https://i.pinimg.com/736x/5b/dd/6c/5bdd6ce3b496272cfb343f64241893cd.jpg'/>
                </div>
            </div>
        </>
    )
}
