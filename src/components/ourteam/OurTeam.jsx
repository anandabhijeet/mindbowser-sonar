import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import "./ourteam.css"
import TeamProfileBg from "../../assets/svgs/team-profile-background.svg"
import AdvisorBg from "../../assets/svgs/advisor-background.svg"
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';

function OurTeam({
    isAdvisor
}) {

    const [teamList, setTeamList] = useState([
        {
            employee_image: "https://livedemo00.template-help.com/wt_prod-19846/images/user-16-100x100.jpg",
            employee_name: "Name",
            employee_role: "Role",
        },
        {
            employee_image: "https://livedemo00.template-help.com/wt_prod-19846/images/user-16-100x100.jpg",
            employee_name: "Name",
            employee_role: "Role",
        },
        {
            employee_image: "https://livedemo00.template-help.com/wt_prod-19846/images/user-16-100x100.jpg",
            employee_name: "Name",
            employee_role: "Role",
        },
        {
            employee_image: "https://livedemo00.template-help.com/wt_prod-19846/images/user-16-100x100.jpg",
            employee_name: "Name",
            employee_role: "Role",
        },
        {
            employee_image: "https://livedemo00.template-help.com/wt_prod-19846/images/user-16-100x100.jpg",
            employee_name: "Name",
            employee_role: "Role",
        },
        {
            employee_image: "https://livedemo00.template-help.com/wt_prod-19846/images/user-16-100x100.jpg",
            employee_name: "Name",
            employee_role: "Role",
        },
    ])
    const iconColor = isAdvisor ? "#2CA3D1" : "#BE65E6"
    return (
        <div>
            <Container className={isAdvisor ? 'advisor-container' : 'main-container'} >
                <h4 className='team-title'>{isAdvisor ? "Our Advisors" : "Our Team"}</h4>
                <div className="row d-flex justify-content-md-center list-wrapper">
                    {
                        teamList.map((obj) => {
                            return (
                                <div className='col-xs-6 col-sm-5 col-md-4 col-lg-3 team-card'>
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