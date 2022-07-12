import "./about.css"
import photo1 from  "../../assets/hatchphoto.png"

//revise about me add job history and fix grammar
const About = () => {
    return (
        <section className="aboutbody">
            <div className="textcontainer">
                <h1>ABOUT ETHAN</h1>
                <p> Ethan grew up in Montana and spent most of his childhood fascinated by tech. 
                    He spent a large portion of his childhood expanding his mind and body by doing 
                    independent learning projects and extreme sports such as rock climbing, kayaking, 
                    and snowboarding. In adulthood he began entrupreneuarship starting and selling his 
                    first company at 17 Ethan spends his time increasing his knowledge as a software 
                    engineer and Market Anyilest. Ethan hopes his skills can bring 
                    good to the world and create new paths for people.</p>
            </div>
            <img className="aimg" src={photo1}/>
        </section>
    );
};

export default About;
