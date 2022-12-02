import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import "./ourteam.css"
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import TeamProfileBg from "../../assets/svg/team/team-profile-background.svg"
import AdvisorBg from "../../assets/svg/advisor/advisor-background.svg"
import { teamListData } from '../../data/StaticData';
import AOS from 'aos';
import 'aos/dist/aos.css';

function OurTeam({
    isAdvisor
}) {
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, [])
    const iconColor = isAdvisor ? "#2CA3D1" : "#BE65E6"
    return (
        <div>
            <Container className={isAdvisor ? 'advisor-container' : 'main-container'} >
                <h4 className='team-title' data-aos="fade-zoom-in" data-aos-duration="600">{isAdvisor ? "Our Advisors" : "Our Team"}</h4>
                <div className="row d-flex justify-content-md-center list-wrapper">
                    {
                        teamListData.map((obj) => {
                            return (
                                <div className='col-xs-6 col-sm-5 col-md-4 col-lg-3 team-card' data-aos="fade-zoom-in" data-aos-duration="600">
                                    <div className='position-relative'>
                                        <img src={isAdvisor ? AdvisorBg : TeamProfileBg} className={'team-background'} />
                                        <img src={obj.employee_image} className={'rounded-circle  p-0 employee-image'} />
                                    </div>
                                    <h5 className='employee-name'>{obj.employee_name}</h5>
                                    <h5 className='employee-name employee-role'>{obj.employee_role}</h5>
                                    <div>
                                        <FaLinkedinIn size={18.33} color={iconColor} />
                                        <BsGlobe size={18.33} color={iconColor} className='global-icon' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
}

export default OurTeam