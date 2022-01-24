import React, { Component } from 'react';
import "./skills.css"
import "./jumbo"
import SkillIcons from './skillicons';

import animation from "./videos/pexels-kindel-media-7055025.mp4";
class Skills  extends Component {
    state={
        height:window.innerHeight,
        numberOfIcons:[0,1,2,3,4,5,6,7,8],
    }
    style={
        height:this.state.height-100,
        
    }
    
    
    
    render() {
        
        return <>
        <div className="container-fluid1 p-3" id="scrolled_container" >
            <h1 className="p-5 heading">My Skills</h1>
            <div className="col-lg-12 div_Container">
            <div className="skill_div col-lg-5">
                {this.state.numberOfIcons.map(num=><SkillIcons key={num}>{num}</SkillIcons>)}
            </div>
            <div className="animate_div col-lg-6 offset-1">
            <video  autoPlay loop height="90%" width="90%">Your browser does not support the &lt;video&gt; tag.
                <source src={animation}/>
            </video>
            </div>
            </div>

        </div>

        </>;
    }
}
 
export default Skills ;