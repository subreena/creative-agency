import React from 'react';
import Footer from '../Footer/Footer';
import './ContactSection.css';
const ContactSection = () => {
    return (
        <section className="contact-section yellow-bg" id="contact">
            <div className="container">
                <div className="row" style={{ marginBottom: '100px' }}>
                    <div className="col-md-6">
                        <h2 className="contact-section-title">
                            Let us handle your
                  <br />
                         project, professionally.
                  </h2>
                        <p className="contact-section-text">
                            With well written codes, we build amazing apps for all
                  <br />
                        platforms, mobile and web apps in general.
                  </p>
                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <div className="form-group">
                                <input type="text" placeholder="Your email adress" className="contact-input form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Your name/ company's name" className="contact-input form-control" />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Your message" className="contact-textarea form-control"></textarea>
                            </div>
                        </form>
                        <button className="blueBtn">Submit</button>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </section>
    );
};

export default ContactSection;