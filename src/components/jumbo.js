import sound from "./sound/mixkit-spacey-swish-spin-1500.mp3"
window.addEventListener("mouseenter", moveToNextComponent());

function moveToNextComponent(){
    setTimeout(
        function(){ 
        const element = document.getElementById("scrolled_container")
        element.scrollIntoView();
        var audio = new Audio(sound);
        audio.play();    

}, 20000);
        }

 export function aboutmeView(){
     let aboutme=document.getElementById("coursel-scroller");
     aboutme.scrollIntoView();

}
export function SkillsView(){
    let skills=document.getElementById("scrolled_container");
    skills.scrollIntoView();

}
export function ExperienceView(){
    let experience=document.getElementById("skills-container");
    experience.scrollIntoView();

}
export function ContactView(){
    let footer=document.getElementById("footer-container");
    footer.scrollIntoView();

}