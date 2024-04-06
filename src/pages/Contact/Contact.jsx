import React, { useRef } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LondonLocationImg from '../../utils/images/London-location.jpg';
import ManchesterLocationImg from '../../utils/images/Manchester-location.jpg';
import LiverpoolLocationImg from '../../utils/images/Liverpool-location.jpg';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';

function Contact() {
    const [show, setShow] = useState(false);
    const [first_name, setFName] = useState("");
    const [last_name, setLName] = useState("");
    const [isValid, setValid] = useState(false);


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0k7wnc6', 'template_d1qc8nz', form.current, '0xRZ3s4JOEv2fgBJ6')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                setValid(false);
            }, (error) => {
                console.log(error.text);
            });
    };

    const validate = () => {
        return first_name.length & last_name.length;
    };

    useEffect(() => {
        const isValid = validate();
        setValid(isValid);
    }, [first_name, last_name]);

    return (
        <div className='contact-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Get In Touch</h1>
                    <p className='text-center w-75 mb-5'>Finalize the Purchase: Once you've made your decision, follow the provider's instructions for finalizing the purchase. This may involve signing an agreement, making a payment, or providing any necessary information.</p>
                </div>
            </header>

            <div className='container my-5 d-flex justify-content-center'>


                <Form ref={form} onSubmit={sendEmail}>
                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name={first_name} onChange={(e) => setFName(e.target.value)} placeholder='First name' />
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name={last_name} onChange={(e) => setLName(e.target.value)} placeholder='Last name' />
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="mail" placeholder='Enter email' />
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder='Your address' />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" name='message' rows={3} />
                    </Form.Group>

                    <Button variant="info btn-lg" type="submit" value="Send" disabled={!isValid} onClick={() => setShow(true)} >Submit</Button>
                </Form>

            </div>
            <div className='container my-5 d-flex justify-content-center'>

                {['Success'].map((variant, idx) => (
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide
                        className="d-inline-block m-1"
                        bg={variant.toLowerCase()}
                        key={idx}
                    >
                        <Toast.Body className={variant === 'Dark' && 'text-white'}>
                            Thanks, we will get in touch with you soon!!
                        </Toast.Body>
                    </Toast>
                ))}

            </div>
            {/* 
            <div className='bg-dark text-light p-5'>
                <div className='container'>
                    <h2 className='text-center mb-5'>Our Locations</h2>
                    <div className='row g-4'>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img src={LondonLocationImg} className='img-fluid' alt="" />
                            <h3 className='text-center mt-3'>Pune</h3>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img src={ManchesterLocationImg} className='img-fluid' alt="" />
                            <h3 className='text-center mt-3'>Hyderabad</h3>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img src={LiverpoolLocationImg} className='img-fluid' alt="" />
                            <h3 className='text-center mt-3'>Banglore</h3>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Contact;