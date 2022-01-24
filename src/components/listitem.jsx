import React, { Component } from 'react';
import { aboutmeView,SkillsView,ExperienceView,ContactView} from './jumbo';


class Listitem  extends Component {
    CallChecker=(children,aboutmeView,SkillsView,ExperienceView,ContactView)=>{
 
        if (children=== "About Me"){
            
            return aboutmeView
        }
        if (children=== "My skills"){
            return SkillsView
            
        }
        if (children=== "My Experience"){
            return ExperienceView   
        }
        if (children=== "Contact Me"){
             return ContactView
            
        }
        
    }
    render() { 
        return (<>
        <li className=" nav-item active " >
            <button className="nav-link bg-dark border-0 m-2 " aria-current="page" onClick={this.CallChecker(this.props.children,aboutmeView,SkillsView,ExperienceView,ContactView)}>{this.props.children}</button>
        </li>

        </>);
    }
}
 
export default Listitem ;