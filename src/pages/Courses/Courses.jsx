import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Targeted List by Job Title',
        description: 'By tailoring your B2B email list, You can make sure that the right professionals are seeing your marketing communications according to certain job titles. This will increase the possibility of engagement and conversion. This method increases the efficacy of your email campaigns while saving you time and money.'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Targeted List by Industry',
        description: 'By customizing your B2B email list based on targeted job industries, you can ensure that your marketing messages are reaching professionals who are most likely to have a genuine interest in your offerings. This approach helps you save time and resources by focusing your efforts on the industries that are most relevant to your business.'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Targeted List by Country',
        description: ' Customizing your B2B email list based on targeted job countries enables you to tailor your marketing messages to the cultural and business nuances of each country. It allows you to address specific challenges and opportunities within those regions, ensuring your campaigns are more relevant and engaging for your audience.'
    },

];

function Courses() {
    return (
        <div className='courses-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Our Services</h1>
                    <p className='text-center w-75 mb-5'>Are you looking for B2B email lists to scale your marketing strategies? Our services are exactly what you need. The data sets we offer cover the most prominent global industries, including large corporations, SMEs, and executive staff.</p>
                </div>
            </header>

            <div className='container py-5'>
                <h1 className='text-center'>Customize Your B2B Email List Based On </h1>
                <div className='row g-4'>
                    {courses.map((course) => (
                        <div key={course.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={course.img} />
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='fs-1 text-info'>{course.title}</Card.Title>
                                    <Card.Text className='text-center'>{course.description}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className='courses-background-color text-light py-5'>
                <FaqAccordion />
            </div> */}
        </div>
    )
}

export default Courses;