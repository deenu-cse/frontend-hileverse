import React, { useState } from "react";
import "../styles/TestimonialsSection.css"; // Import your CSS file for styles

const TestimonialsSlider = () => {

    const [selected, setSelected] = useState(1);

    const handleSelect = (index) => {
        setSelected(index);
    };

    return (
        <div className="testimonialcontainer">
            <h1>What our client say</h1>
            <div className="container">
                <input
                    type="radio"
                    name="nav"
                    id="first"
                    checked={selected === 1}
                    onChange={() => handleSelect(1)}
                />
                <input
                    type="radio"
                    name="nav"
                    id="second"
                    checked={selected === 2}
                    onChange={() => handleSelect(2)}
                />
                <input
                    type="radio"
                    name="nav"
                    id="third"
                    checked={selected === 3}
                    onChange={() => handleSelect(3)}
                />

                <label
                    htmlFor="first"
                    className={`first ${selected === 1 ? 'active' : ''}`}
                ></label>
                <label
                    htmlFor="second"
                    className={`second ${selected === 2 ? 'active' : ''}`}
                ></label>
                <label
                    htmlFor="third"
                    className={`third ${selected === 3 ? 'active' : ''}`}
                ></label>

                <div className={`slide ${selected === 1 ? 'one' : ''}`}>
                    <blockquote>
                        <span className="leftq quotes"></span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again. <span className="rightq quotes"></span>
                    </blockquote>
                    <div className="seconflex">
                        <div className="seconimg">
                            <img
                                src="https://i.pinimg.com/736x/97/f7/b4/97f7b4f2aaa9d473cb81f30521567ad1.jpg"
                                alt="testimonial 1" className="img1"
                            />
                        </div>
                        <div className="secondname">
                            <cite className="author">Daniel Lee</cite>
                            <span className="company">Creative CEO</span>
                        </div>
                    </div>
                </div>

                <div className={`slide ${selected === 2 ? 'two' : ''}`}>
                    <blockquote>
                        <span className="leftq quotes"></span> The website was designed very efficiently, and the communication and quality of the final work exceeded my expectations. Highly recommended for anyone in need of web development expertise. <span className="rightq quotes"></span>
                    </blockquote>
                    <div className="seconflex">
                        <div className="seconimg">
                            <img
                                src="https://i.pinimg.com/736x/97/f7/b4/97f7b4f2aaa9d473cb81f30521567ad1.jpg"
                                alt="testimonial 1" className="img1"
                            />
                        </div>
                        <div className="secondname">
                            <cite className="author">Daniel Lee</cite>
                            <span className="company">Creative CEO</span>
                        </div>
                    </div>
                </div>

                <div className={`slide ${selected === 3 ? 'three' : ''}`}>
                    <blockquote>
                        <span className="leftq quotes"></span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again. <span className="rightq quotes"></span>
                    </blockquote>
                    <div className="seconflex">
                        <div className="seconimg">
                            <img
                                src="https://i.pinimg.com/736x/97/f7/b4/97f7b4f2aaa9d473cb81f30521567ad1.jpg"
                                alt="testimonial 1" className="img1"
                            />
                        </div>
                        <div className="secondname">
                            <cite className="author">Daniel Lee</cite>
                            <span className="company">Creative CEO</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSlider;
