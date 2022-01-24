import React, { Component } from 'react';
import think from "./images/fairy-tale-1077863_1280.jpg"
import pfp from "./images/ahmed.jpeg"
import CourselControls from './coursel-controls';
import SecondCourselText from './Second-coursel-text';
import LargeDream from './largedream';
import SmallDream from './SmallJumbo';
import "./jumbo.css"
import "./jumbo"

class Jumbotron  extends Component {
    state={
        height:(window.innerHeight),
        shown:true,
        
    }
    style={
        height:this.state.height,
    }
    mouseToggle=()=>
    this.setState({shown:!this.state.shown})

    render() { 
        return <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner " id="coursel-scroller">
                <div className="carousel-item active main-coursel " style={this.style}>
                    <div className="text-holder p-3 animate__animated animate__fadeInLeft wow">
                    <h1 className="main-coursel-text">Hi</h1>
                    <h1 className="main-coursel-text">I am Ahmed</h1>
                    <h1 className="main-coursel-text">A Front End Developer</h1>
                    </div>

                </div>
                <div className="carousel-item  ">
                <img src={think} className="d-block w-100 " height={this.state.height} alt="..."/>
                {this.state.shown && (<div className="carousel-caption coursel-style1 animate__animated animate__bounce" onMouseEnter={this.mouseToggle} >
                <SmallDream/>
                </div>)}
                {!this.state.shown && (<div className="carousel-caption coursel-style2" onMouseLeave={this.mouseToggle}>
               <LargeDream/>
                </div>)}
                
                </div>
                <div className="carousel-item coursel-display  " style={this.style}>
                
                <div className=" coursel-style3 ">
                    
                    <div className="coursel-style3-inner2 col-lg-8 animate__animated animate__fadeInLeft animate__delay-1s" style={this.style}>
                       <SecondCourselText/>
                    </div>
                    <div className="coursel-style3-inner1 col-lg-4 offset-lg-1 animate__animated animate__fadeInRight animate__delay-2s" >
                        <img src={pfp} alt="..." className="image-design"  />
                    </div>
                </div>
                </div>
               
    </div>
    <CourselControls/>
    </div>
            
    
        </>
    }
}
 
export default Jumbotron ;