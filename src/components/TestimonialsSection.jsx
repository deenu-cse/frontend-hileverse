import React, { useState } from 'react';
import '../styles/TestimonialsSection.css';

export default function TestimonialsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            img: "https://i.postimg.cc/ydBjdm20/michael-dam-m-EZ3-Po-FGs-k-unsplash-1.jpg",
            name: "Cassi",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
            rating: 4,
        },
        {
            img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/451270/profile/profile-80.jpg",
            name: "Md Nahidul",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
            rating: 5,
        },
        {
            img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/451270/profile/profile-80.jpg",
            name: "Md Nahidul",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
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
                                <h2 className="section-title">What Clients Say</h2>
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
