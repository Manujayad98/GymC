import React from 'react'
import './LandingPage.css'
import aboutImg from '../../images/about.png'

function About() {
    return (
        <div id='about'>
            <h1 className='about-head'>ABOUT US</h1>
            <div id='about-sub'>
                <div className='about-image'>
                    <img src={aboutImg} alt="" />
                </div>
                <div className='about-text'>
                    <h2>Every Day Is A Chance To Become Better</h2>
                    <h4>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Ratione
                        Accusamus Dicta Inventore Nobis Obcaecati Vero Odio, Id Dolorum.
                        Consequatur Ex, Aperiam Deserunt Nostrum Perferendis </h4>
                    <div className='about-text-card-container'>
                        <div className='about-text-card'>
                            <h4>Body And Mind</h4>
                            <p>Lorem Ipsum Dolor Sit Amet
                                Consectetur Adipisicing Elit. Est,</p>
                        </div>
                        <div className='about-text-card'>
                            <h4>Healthy Life</h4>
                            <p>Lorem Ipsum Dolor Sit Amet
                                Consectetur Adipisicing Elit. Est,</p>
                        </div>
                        <div className='about-text-card'>
                            <h4>Strategies</h4>
                            <p>Lorem Ipsum Dolor Sit Amet
                                Consectetur Adipisicing Elit. Est,</p>
                        </div>
                        <div className='about-text-card'>
                            <h4>Workout</h4>
                            <p>Lorem Ipsum Dolor Sit Amet
                                Consectetur Adipisicing Elit. Est,</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About