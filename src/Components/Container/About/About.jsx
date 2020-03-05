import React from 'react';
import './About.css';
import logoBusiness from '../../../Assets/business.jpg';


const About = () => {
    return (
        <div className='containerAbout'>
            <div>
                <h2>Sobre nosotros</h2>
            </div>
            <div className='contentAbout'>
                <div>
                    <p>
                        It is a long established fact that a reader will <strong>be distracted</strong> by the readable content of a
                page when <strong>looking</strong> at its layout. The point of using Lorem Ipsum is that it
                            has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable <strong>English</strong>. Many desktop publishing
                            packages and web page editors now use Lorem Ipsum as their default model text, and a
                            search for 'lorem ipsum' will uncover many web sites still in their infancy.
                </p>
                </div>
                <div>
                    <img src={logoBusiness} />
                </div>
            </div>
        </div>
    )
}

export default About;