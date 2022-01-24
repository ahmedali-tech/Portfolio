import React, { Component } from 'react';
import css3 from "./images/css3.png";
import html5 from "./images/html5.png";
import bootstrap from "./images/bootstrap.png";
import js from "./images/js.png";
import java from "./images/java.png";
import adobe from "./images/adobe.png";
import apache from "./images/tomcat.png"
import react from "./images/react.png";
import python from "./images/python.png";

class SkillIcons  extends Component {
    state={
        icons:[css3,html5,bootstrap,js,java,adobe,apache,react,python],
        names:["CSS3","HTML5","Bootstrap","JS","Java","Adobe","Apache","React","python"]
    }
    render() { 
        return <>
        <div className="total-icon offset-lg-1 animate__animated animate__backInDown wow">
        <div className="cover">
        <img className="skill_icon_design" src={this.state.icons[this.props.children]} alt="..."/>
        </div>
        <h3 className="icon-text-style">{this.state.names[this.props.children]}</h3>
        </div>

        </>;
    }
}
 
export default SkillIcons ;