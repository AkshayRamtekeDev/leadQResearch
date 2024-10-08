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
import Business from '../..//utils/images/business.jpg';


const courses = [
    {
        id: 1,
        img: [Business],
        title: 'Targeted List by Job Title',
        description: 'By tailoring your B2B email list, You can make sure that the right professionals are seeing your marketing communications according to certain job titles. This will increase the possibility of engagement and conversion. This method increases the efficacy of your email campaigns while saving you time and money.'
    },
    {
        id: 2,
        img: [Business],
        title: 'Targeted List by Industry',
        description: 'By customizing your B2B email list based on targeted job industries, you can ensure that your marketing messages are reaching professionals who are most likely to have a genuine interest in your offerings. This approach helps you save time and resources by focusing your efforts on the industries that are most relevant to your business.'
    },
    {
        id: 3,
        img: [Business],
        title: 'Targeted List by Country',
        description: ' Customizing your B2B email list based on targeted job countries enables you to tailor your marketing messages to the cultural and business nuances of each country. It allows you to address specific challenges and opportunities within those regions, ensuring your campaigns are more relevant and engaging for your audience.'
    },
    // {
    //     id: 4,
    //     img: [Business],
    //     title: 'Targeted List By Geography',
    //     description: 'One highly successful targeting strategy is to choose marketing data based on location. One of the best strategies to expedite the sales process is to concentrate on the areas where the greatest concentration of prospects work with the highest quality. Additionally, it can help with the establishment of focused outbound campaigns and new regional sales teams. You can search by radius, corridor, region, country, province, etc.'
    // },
    // {
    //     id: 5,
    //     img: [Business],
    //     title: 'Targeted List By Technology',
    //     description: 'Your competitive advantage can no longer be guaranteed by firmographics and demographics. Technographics is all the necessary information about the tools and technology that a consumer actively utilizes, just like demographics helps you learn more about the Age, Gender, Occupation, Annual Income, etc. of a target profile.'
    // },
    // {
    //     id: 6,
    //     img: [Business],
    //     title: 'Targeted List By B2B Email List',
    //     description: 'Have you been trying to expand your marketing campaigns by seeking for specialized B2B email lists? Thats exactly what we provide at LeadsQResarch. Our data sets, which contain information on the most well-known international industries, including larger enterprises, SMEs, and executive persons, are ideal for expanding your lead generation pipelines.'
    // },
    // {
    //     id: 7,
    //     img: [Business],
    //     title: 'Targeted List By C Level Executives',
    //     description: 'Our C-Level Executives List provides you with extremely accurate contact information to reach your prospects by phone, email, or letter, regardless of the C-Level Executives you wish to connect with: CEOs, CIOs, CFOs, CTOs, CMOs, CSOs, COOs, or any other C-Level Executive. With our C-Level Executives Email List, communicating with these executives is much simpler and takes less time because you wont need to go through several channels to get your point across.'
    // },
    // {
    //     id: 7,
    //     img: [Business],
    //     title: 'Targeted List By Data Mining',
    //     description: 'Our data mining service enhances your marketing strategy by identifying the decision-makers in the companies you wish to engage with. We curate specialized lists containing vital contacts tailored specifically for your needs. These lists expedite your sales and marketing endeavors by providing access to top-tier leads, thereby optimizing your resources and saving valuable time and money. Our precise data ensures greater chances of success when connecting with other businesses!'
    // },


];

const courses2 = [
    {
        id: 1,
        img: [Business],
        title: 'Lead Nurturing',
        description: 'We help you nurture your leads so that they are more likely to convert into customers. We can help you create lead magnets, send follow-up emails, and track your results.'
    },
    {
        id: 2,
        img: [Business],
        title: 'Pay Per Lead (PPL) Lead Generation',
        description: 'The PPL lead generation strategy involves paying a third party only when they generate a qualified lead, which is a potential customer who has expressed interest in your product or service.'
    },
    {
        id: 3,
        img: [Business],
        title: 'Email Marketing',
        description: 'We help you create and send email campaigns that are effective at generating leads. We can help you segment your audience, create compelling emails, and track your results.'
    }

];

const globalMarket = [
    {
        id: 1,
        img: [Business],
        title: 'Strategic Consulting Service',
        description: 'For centuries, market research has involved monitoring and calculating market share, making deductions while carrying out primary and secondary research, and contemplating the developments of market participants and their competitors, albeit in private. As consultants for strategic planning, we at LeadsQResearch view strategy as more than just a process map. Our staff works resolutely to reduce it to manageable tasks that yield meaningful outcomes.'
    },
    {
        id: 2,
        img: [Business],
        title: 'Research Service',
        description: 'Since global is a skewed perspective of markets, industries, situations, and statistics, our analysts have also developed the ability to look at the most detailed data at the lowest levels, separating it into even more detail-oriented fields. For diverse customer needs, our research artists combine and separate this data. Granular data is successfully integrated and analyzed when it is combined with data from outside sources.'
    }


];

function Courses() {
    return (
        <div className='courses-page'>
            <header className='height-header'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Our Services</h1>
                    <p className='text-center w-75 my-3'>Are you looking for B2B email lists to scale your marketing strategies? Our services are exactly what you need. The data sets we offer cover the most prominent global industries, including large corporations, SMEs, and executive staff.</p>
                    <h3>AND ALSO</h3>
                    <p className='text-center w-75 my-3'>LeadsQResearch offers detailed global market and customer analyses, utilizing multiple data sources to inform clients about current trends, future shifts, and actionable insights.
                    </p>
                </div>
            </header>
            <div className='container py-5'>
                <h1 className='text-center'>B2B Data Mining/ Data Scraping</h1>
                <h5>Are you looking for B2B data lists to scale your marketing strategies? Our services are exactly what you need. The data sets we offer cover the most prominent global industries, including large corporations, SMEs, and executive staff.

                </h5>
                <h5> <br /> Customize Your B2B Data Mining Based On -</h5>
                <div className='row g-4 mt-3'>
                    {courses.map((course) => (
                        <div key={course.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={course.img} className='img-height' />
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='fs-1 text-info text-center'>{course.title}</Card.Title>
                                    <Card.Text className='text-center'>{course.description}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>

                <h1 className='mt-5 fs-1 text-center'>Lead Generation </h1>
                <h5>
                    LeadsQResearch helps companies generate more leads by creating high-quality content, running targeted advertising campaigns, and building relationships with key decision-makers.
                </h5>
                <div className='row g-4 mt-3'>
                    {courses2.map((course) => (
                        <div key={course.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={course.img} className='img-height' />
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='fs-1 text-info text-center'>{course.title}</Card.Title>
                                    <Card.Text className='text-center'>{course.description}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>


                <h1 className='text-center mt-5 mb-3'>Study of global markets and customers Based On </h1>
                <div className='row g-4'>
                    {globalMarket.map((course) => (
                        <div key={course.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={course.img} className='img-height' />
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='fs-1 text-info text-center'>{course.title}</Card.Title>
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