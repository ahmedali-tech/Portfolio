import React, { Component } from 'react';
import "./foot.css"

class Footer extends Component {
    
    render() { 
        return <>
 

  <section class="">
  
  <footer class="text-center text-white footer-style p-2" id="footer-container" >
   
    <div class="container p-4 pb-0">
     
    <section class="mb-4">
      
      <a
        class="btn btn-primary btn-floating m-1 fb animate__animated animate__fadeInDown wow"
        
        href="#!"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      
      <a
        class="btn btn-primary btn-floating m-1 twitter animate__animated animate__fadeInDown wow"
        
        href="#!"
        role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      
      <a
        class="btn btn-primary btn-floating m-1 google animate__animated animate__fadeInDown wow"
        
        href="#!"
        role="button"
        ><i class="fab fa-google"></i
      ></a>

      
      <a
        class="btn btn-primary btn-floating m-1 insta animate__animated animate__fadeInDown  wow"
        
        href="#!"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      
      <a 
        class="btn btn-primary btn-floating m-1 linkedin animate__animated animate__fadeInDown 	wow"
        
        href="#!"
        role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <a
        class="btn btn-primary btn-floating m-1 github animate__animated animate__fadeInDown wow 	"
        
        href="#!"
        role="button"
        ><i class="fab fa-github"></i
      ></a>
      <p> Contact me Using my Handles :)</p>
      <h4 className=" footer heading">-Created using REACT-</h4>
    </section>
     
    </div>
   

    
   
    
  </footer>
  
</section>
  

        </>;
    }
}
 
export default Footer;