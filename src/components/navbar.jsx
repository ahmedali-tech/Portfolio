import React, { Component } from 'react';
import Listitem from './listitem';




class Navbar extends Component {
    state={
        nameclass:"nav-item",
        nav_titles:["About Me","My skills","My Experience","Contact Me"],
        
        
    }
    
    styles={
        color:"white"
    }
   
   
     
    render() { 
        return <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top " >
        <div className="container-fluid">
            <button className="bg-dark border-0"><i className="fab fa-affiliatetheme fa-3x " style={this.styles} /></button>
            
            <button className="navbar-toggler offset-8" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon light"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 offset-sm-5 offset-lg-4  ">
            {this.state.nav_titles.map(e=><Listitem key={e} >{e}</Listitem>)}
             
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
        </>;
    }
}
 
export default Navbar ;