import "./about.css"
import photo1 from  "../../assets/hatchphoto.png"

const About = () => {
    return (
        <section className="aboutbody">
            <div className="textcontainer">
                <h1>ABOUT ETHAN</h1>
                <p> Ethan grew up in the beautiful state of Montana and spent most of his childhood fascinated by tech. 
                    He spent a large portion of his life expanding his mind and body by doing 
                    independent learning projects, attending buisness/networking events, and doing extreme sports such as rock climbing, kayaking, 
                    and snowboarding. Ethan began his software engineering journey in March of 2022 and hopes his skills can bring 
                    good to the world and create new paths for people.</p>
            </div>
            <img className="aimg" src={photo1} alt="Hatch_Photo" />
        </section>
    );
};

export default About;
