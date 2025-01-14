import React, { useState } from 'react';
import '../styles/TestimonialsSection.css';

export default function TestimonialsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            img: "https://i.pinimg.com/736x/4c/78/89/4c7889d12e4655d9a78329f7b482c139.jpg",
            name: "Cassi",
            text: "I've never felt more cared for in a meal service. The personalized diet plan has been perfect for my allergies and dietary needs. It makes life so much easier!",
            rating: 5,
        },
        {
            img: "https://i.pinimg.com/736x/31/37/5c/31375c33e0beee1a27121ef94f501a34.jpg",
            name: "Md Nahidul",
            text: "As someone with multiple health conditions, finding a service that customizes meals to my needs has been life-changing. The dashboard makes it so easy to track everything.",
            rating: 5,
        },
        {
            img: "https://i.pinimg.com/736x/48/b9/96/48b996eb793ed8f516fac6e8f7b4b9d2.jpg",
            name: "Sarah",
            text: "The personalized meal plans have been amazing! I feel better, healthier, and more energetic, thanks to the dietary options based on my health conditions.",
            rating: 5,
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <section>
            <div className="customer-feedback">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm-offset-2 col-sm-8">
                            <div>
                                <h2 className="section-title">What Our Clients Are Saying</h2>
                            </div>
                        </div>
                    </div>

                    <div className="rowtes">
                        <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                            <div className="feedback-slider">
                                <div
                                    className="feedback-slider-item"
                                    style={{
                                        display: currentSlide === 0 ? 'block' : 'none',
                                    }}
                                >
                                    <img
                                        src={testimonials[0].img}
                                        className="center-block img-circle"
                                        alt="Customer Feedback"
                                    />
                                    <h3 className="customer-name">{testimonials[0].name}</h3>
                                    <p>{testimonials[0].text}</p>
                                    <span className="light-bg customer-rating">
                                        {testimonials[0].rating}
                                        <i className="fa fa-star"></i>
                                    </span>
                                </div>
                                <div
                                    className="feedback-slider-item"
                                    style={{
                                        display: currentSlide === 1 ? 'block' : 'none',
                                    }}
                                >
                                    <img
                                        src={testimonials[1].img}
                                        className="center-block img-circle"
                                        alt="Customer Feedback"
                                    />
                                    <h3 className="customer-name">{testimonials[1].name}</h3>
                                    <p>{testimonials[1].text}</p>
                                    <span className="light-bg customer-rating">
                                        {testimonials[1].rating}
                                        <i className="fa fa-star"></i>
                                    </span>
                                </div>
                                <div
                                    className="feedback-slider-item"
                                    style={{
                                        display: currentSlide === 2 ? 'block' : 'none',
                                    }}
                                >
                                    <img
                                        src={testimonials[2].img}
                                        className="center-block img-circle"
                                        alt="Customer Feedback"
                                    />
                                    <h3 className="customer-name">{testimonials[2].name}</h3>
                                    <p>{testimonials[2].text}</p>
                                    <span className="light-bg customer-rating">
                                        {testimonials[2].rating}
                                        <i className="fa fa-star"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="feedback-slider-thumb hidden-xs">
                                <div className="thumb-prev" onClick={prevSlide}>
                                    <span>
                                        <img
                                            src={testimonials[(currentSlide - 1 + testimonials.length) % testimonials.length].img}
                                            alt="Previous Customer Feedback"
                                        />
                                    </span>
                                </div>

                                <div className="thumb-next" onClick={nextSlide}>
                                    <span>
                                        <img
                                            src={testimonials[(currentSlide + 1) % testimonials.length].img}
                                            alt="Next Customer Feedback"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
