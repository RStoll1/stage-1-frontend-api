import "./About.css";
import avatar from "../../assets/placeholder_img.svg";

function About() {
  return (
    <section className="about">
      <img className="about__avatar" src={avatar} alt="Avatar" />
      <div className="about__info">
        <h2 className="about__title">About the Author</h2>
        <p className="about__text">
          This project was developed by Ryan Stolinski, a passionate software
          engineer with an interest in full stack development. This application
          showcases skills in React, API integration, and responsive design.
        </p>
      </div>
    </section>
  );
}
export default About;
