import React, { Component } from 'react';
import "./exper.css"
import "./experiencejs"

import frontend from "./images/frontend-4342425_1280.png";
import programmer from "./images/programmer-1653351_1280.png";
import sunbeam1 from "./images/sunbeams.png";
import sunbeams2 from "./images/sunbeams2.jfif";
import collab1 from "./images/collab1.png";
import collab2 from "./images/collab2.png";
import telenor from "./images/telenor.jfif";
import telenor1 from "./images/logo.png";
import bitcoin1 from "./images/bitcoin1 (1).jpg";
import bitcoin2 from "./images/bitcoin1 (2).jpg";
import ml1 from "./images/ml2.jpg";
import ml2 from "./images/ml1.png";


class experience extends Component {
    render() { 
        return <div className=" p-5 main-container  " id="skills-container">
            <h1 className="main-heading"> My Experience</h1>
            <div className="card-container ">
            <div class="card animate__animated animate__backInDown wow" >
            <h1 className="card-heading">Front end Development on Fiverr</h1>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={frontend} class="d-block w-100 img" alt="..,"/>
                </div>
                <div class="carousel-item">
                <img src={programmer} class="d-block w-100 img" alt="..."/>
                </div>
                
            </div>
            </div>
            <div class="card-body">
                <p class="card-text">I have been working as a Frontend developer on fiverr for the past 2 years and have worked on multiple projects with clients all across the globe</p>
            </div>
            </div>

            <div class="card animate__animated animate__backInDown wow" >
            <h1 className="card-heading p-2">Graphic Intern for SunBeams</h1>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={sunbeam1} class="d-block w-100 img" alt="..,"/>
                </div>
                <div class="carousel-item">
                <img src={sunbeams2} class="d-block w-100 img" alt="..."/>
                </div>
                
            </div>
            </div>
            <div class="card-body">
                <p class="card-text">I have worked with SunBeams in a 3-month volunteer internship and was responsible for providing the graphic content for the websites and posts</p>
            </div>
            </div>

            <div class="card animate__animated animate__backInDown wow" >
            <h1 className="card-heading">Co-founder COLLAB</h1>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={collab1} class="d-block w-100 img1" alt="..,"/>
                </div>
                <div class="carousel-item">
                <img src={collab2} class="d-block w-100 img1" alt="..."/>
                </div>
                
            </div>
            </div>
            <div class="card-body">
                <p class="card-text">COLLAB is an online FYP repository which is currently in mvp state and will be deployed in universities where practical research can be stored for later use</p>
            </div>
            </div>

            <div class="card animate__animated animate__backInDown wow" >
            <h1 className="card-heading">Telenor Hackathon-Code for Pakistan</h1>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={telenor} class="d-block w-100" alt="..,"/>
                </div>
                <div class="carousel-item">
                <img src={telenor1} class="d-block w-100" alt="..."/>
                </div>
                
            </div>
            </div>
            <div class="card-body">
                <p class="card-text">I took part in the Telenor hackathon-Code for Pakistan  where our Team project reached the finals</p>
            </div>
            </div>

            <div class="card animate__animated animate__backInDown wow" >
            <h1 className="card-heading">Bitcoin Price Predictor</h1>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={bitcoin2} class="d-block w-100" alt="..,"/>
                </div>
                <div class="carousel-item">
                <img src={bitcoin1} class="d-block w-100" alt="..."/>
                </div>
                
            </div>
            </div>
            <div class="card-body">
                <p class="card-text">I have been working to Develop Bitcoin Price prediction model which is capable of predicting its price with 98% accuracy irrespective of random events</p>
            </div>
            </div>

            <div class="card animate__animated animate__backInDown wow" >
            <h1 className="card-heading p-2">Machine Learning</h1>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={ml1} class="d-block w-100 img1" alt="..,"/>
                </div>
                <div class="carousel-item">
                <img src={ml2} class="d-block w-100 img1" alt="..."/>
                </div>
                
            </div>
            </div>
            <div class="card-body">
                <p class="card-text">I am currently working on several machine learning models.Data has been collected from various from sources including kaggle and is now being deployed in different models after wrangling</p>
            </div>
            </div>
            </div>

            

        </div>;
    }
}
 
export default experience;
