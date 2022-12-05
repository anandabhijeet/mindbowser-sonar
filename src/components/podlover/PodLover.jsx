import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import './podlover.css';
import { CgArrowLongRight } from 'react-icons/cg';
import ThinkingLady from "../../assets/svg/podlover/pod-thinking-lady.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

function PodLover() {
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, [])

    const podDetails = {
        pod_title: 'Our Pod Loves Sonar',
        pod_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat elementum ultricies vel volutpat lacinia tellus mattis hac.",
        pod_writer: "Pod Fam",
    }

    return (
        <div className='pod-container' >
            <Container>
                <div className="row d-flex justify-content-md-center screen-container">
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-5 pod-left-container' data-aos="fade-zoom-in" data-aos-duration="1000">
                        <h2 className='pod-title'>{podDetails?.pod_title}</h2>
                        <p className='pod-description'>"{podDetails?.pod_description}"</p>
                        <p className='pod-writer'>-{podDetails?.pod_writer}</p>
                        <button type="button" className="pod-btn">{'Next Quote'}
                            <CgArrowLongRight color='#BE65E6' size={23} className='arrow-right-icon' />
                        </button>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-5 d-flex justify-content-md-center pod-right-container' data-aos="fade-zoom-in" data-aos-duration="1000">
                        <div className='pod-image-bg'>
                            <img src={ThinkingLady} className='pod-thinking-lady-image' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PodLover