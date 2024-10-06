import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
import Person7 from '../../utils/images/person7.jpg';
import Person8 from '../../utils/images/person8.jpg';
import Person9 from '../../utils/images/person9.jpg';

const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    },
    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },
    {
        id: 6,
        img: [Person6]
    },
    {
        id: 7,
        img: [Person7]
    },
    {
        id: 8,
        img: [Person8]
    },
    {
        id: 9,
        img: [Person9]
    },
];

function About() {
    return (
        <div className='about-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>About Us</h1>
                    <p className='text-center w-75 mb-5'>When you choose LeadsQResearch for your lead generation needs, you're not just hiring another vendor—you're partnering with a dedicated team of experts who are invested in your success. With our innovative approach, agile mindset, and unwavering commitment to excellence, we're confident that we can help take your business to the next level.</p>
                </div>
            </header>

            <div className='container my-5'>
                <div className="row">
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-4 mb-lg-5'>Why us</h2>
                        <p>Why choose a startup for your lead generation needs? We get it, it's a valid question. Here's why we believe startups like ours offer a unique advantage:
                            <br></br>
                            <br />
                            <b> Fresh Perspective:</b> As a startup, we bring a fresh perspective to lead generation. We're not bound by traditional norms or outdated practices. Instead, we're constantly exploring new ideas, technologies, and strategies to deliver innovative solutions that drive real results for our clients.
                            <br></br>
                            <br />
                            <b>Agility and Adaptability: </b> Startups are known for their agility and adaptability. We thrive in fast-paced environments, where change is constant and flexibility is key. This agility allows us to quickly pivot and adjust our strategies based on evolving market trends and client needs, ensuring that our lead generation efforts are always ahead of the curve.
                            <br></br>
                            <br />
                            <b>Passion and Dedication: </b> At LeadsQResearch, lead generation isn't just a job—it's our passion. We're deeply committed to helping our clients succeed, and that dedication shines through in everything we do. From our meticulous attention to detail to our unwavering commitment to delivering exceptional results, you can trust that we'll go above and beyond to exceed your expectations.
                            <br></br>
                            <br />
                            <b>Personalized Attention:</b> Unlike larger agencies where you might feel like just another client, you're more than just a number at LeadsQResearch. We take the time to truly understand your business, your goals, and your target audience, allowing us to develop customized lead-generation strategies that are tailored to your unique needs and objectives.
                        </p>
                        <p><b>Market Research:</b> As a global market research firm, LeadsQResearch takes pride in delivering thorough and precise studies of diverse global markets and customer segments. Leveraging multiple data sources and proprietary information, our strategies provide a holistic understanding of current trends, anticipated changes, and actionable recommendations tailored to each client's needs. </p>
                        <Link to="/contact">
                            <button type='button' className='btn btn-info btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                        </Link>
                    </div>

                </div>
            </div>

            {/* <div className='bg-dark text-light py-5'>
                <ChooseSection />
            </div> */}

            {/* <div className='bg-body-tertiary py-5'>
                <div className="container">
                    <h2 className='text-center mb-5'>Our Winners</h2>
                    <div className='row g-4'>
                        {persons.map((person) => (
                            <div key={person.id} className='col-md-4'>
                                <img src={person.img} className='img-fluid' alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default About;