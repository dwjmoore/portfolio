import profilePicture from "../../images/profile-pic.jpg";

export default function About() {
    return (
      <div className="content-page-wrapper">
        <div
          className="left-column"
          style={{
            background: "url(" + profilePicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="right-column">
          <p>
            Hi! My name is David Moore. I am a full-stack developer who graduated from Bottega University's Full-Stack Development Certificate program in December 2022. I am certified in JavaScript, ReactJS, Python 3, UML, HTML5, CSS, Flask, JSON, Git, MongoDB, SQL Databases, SCSS/SASS, Flexbox, CSS Grid.
          </p>
          <p>
            I enjoy languages, so for my final project I created a website that puts some natural method learning materials that are in the public domain into a digital, dynamic format. I'm continuing to work on the project, and I am excited about where it is going.
          </p>
        </div>
      </div>
    );
  }