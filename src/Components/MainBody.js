import React from "react";
import "./MainBody.css";
import project_1_Img from "../Images/project1.JPG";
import project_2_Img from "../Images/project2.JPG";
import { Link } from "react-router-dom";
import nameLogo from "../Images/logo.png";
import leaf1 from "../Images/leaf1.png";
import leaf2 from "../Images/leaf2.png"
import Media from "react-media";

import skillArray from "./SkillData/skills.js";

export default function MainBody() {
  const [skills] = React.useState(skillArray);

  let skillElements = skills.map((item) => {
    return (
      <div key={item.name} className="skillBlock">
        <img src={item.image} className="skillIMG" alt="" />
        <p>{item.name}</p>
      </div>
    );
  });

  function project1Component() {
    return (
      <div className="projectContainer">
        <img src={project_1_Img} alt="" className="projectIMG" />
        <p>
          „CookBook“ yra paprasta, bet intuityvi svetainė, kurios tikslas –
          padėti išsirinkti kitą patiekalą. Ji parašyta naudojant React JSX,
          CSS.
        </p>
        <Link to="/portfolio/projects" className="primaryButton">
          Go to projects
        </Link>
      </div>
    );
  }
  function project2Component() {
    return (
      <div className="projectContainer">
        <img src={project_2_Img} alt="" className="projectIMG" />
        <p>
          “BookLook” yra svetainė, kurios tikslas – padėti vartotojui susirasti
          naują knygą. Ši svetainė yra sukurta naudojant React, TypeScript ir
          CSS.
        </p>
        <Link to="/portfolio/projects" className="primaryButton">
          Go to projects
        </Link>
      </div>
    );
  }
  return (
    <main>
      <section className="intro row">
        <div className="headText">
          <div className="nameTextContainer">
            <h1>Sveiki, aš</h1>
            <img src={nameLogo} alt="" className="austeja"/>
          </div>
          <h1> Esu Front-end programuotoja iš Lietuvos, Vilniaus.</h1>
          <p>
            Šiuo metu studijuoju Vilnius Tech Universitete. Programavimą
            savarankiškai mokausi jau apie 1-erius metus. Įvairius projektus
            atlieku ne tik Universitete, tačiau ir savo laisvalaikiu.
          </p>
        </div>
      </section>
      {/* <Media queries={{ small: { maxWidth: 999 }}}>
      {(matches) =>
            !matches.small ? (
              <div className="leaves">
                <img src={leaf1} className="leaf1" alt=" "/>
                <img src={leaf2} className="leaf2" alt=" "/>
              </div>
            ) : (
              <div className="leaves smaller">
               <img src={leaf1} className="leaf1 smallLeaf " alt=" "/>
                <img src={leaf2} className="leaf2 smallLeaf" alt=" "/>
              </div>
            )
          }
      
      </Media> */}
      <Media queries={{ small: { maxWidth: 999 }, phone: {maxWidth: 450}}}>
      {(matches) =>
            !matches.small ? (
              <div className="leaves">
                <img src={leaf1} className="leaf1" alt=" "/>
                <img src={leaf2} className="leaf2" alt=" "/>
              </div>
            ) : (
              matches.phone ? (
                <div className="leaves smaller">
                  <img src={leaf1} className="leaf1 phoneleaf " alt=" "/>
                  <img src={leaf2} className="leaf2 phoneleaf" alt=" "/>
                </div>
              ) : (
                  <div className="leaves smaller">
                    <img src={leaf1} className="leaf1 smallLeaf " alt=" "/>
                    <img src={leaf2} className="leaf2 smallLeaf" alt=" "/>
                  </div>
              )
              
            )
          }
      
      </Media>

      <section className="skills">
        <section className="projectTitle skills">
          <div className="waviy">
            <span style={{ "--i": 1 }}>Į</span>
            <span style={{ "--i": 2 }}>G</span>
            <span style={{ "--i": 3 }}>Ū</span>
            <span style={{ "--i": 4 }}>D</span>
            <span style={{ "--i": 5 }}>Ž</span>
            <span style={{ "--i": 6 }}>I</span>
            <span style={{ "--i": 7 }}>A</span>
            <span style={{ "--i": 8 }}>I</span>
          </div>
        </section>
        <div className="skillContainer">
          <div className="skillRow">{skillElements}</div>
        </div>
      </section>
     
      <section className="projects">
        <section className="projectTitle projects">
          <div className="waviy">
            <span style={{ "--i": 1 }}>P</span>
            <span style={{ "--i": 2 }}>r</span>
            <span style={{ "--i": 3 }}>o</span>
            <span style={{ "--i": 4 }}>j</span>
            <span style={{ "--i": 5 }}>e</span>
            <span style={{ "--i": 6 }}>k</span>
            <span style={{ "--i": 7 }}>t</span>
            <span style={{ "--i": 8 }}>a</span>
            <span style={{ "--i": 9 }}>i</span>
          </div>
        </section>
        <Media queries={{ small: { maxWidth: 768 } }}>
          {(matches) =>
            !matches.small ? (
              <div className="projectsOuter">
                {project1Component()}
                {project2Component()}
              </div>
            ) : (
              <div className="projectsOuter small">
                {project1Component()}
                {project2Component()}
              </div>
            )
          }
        </Media>
      </section>

      <section className="footer">
        <h2>Susisiekite su manimi!</h2>

        <ul>
          <li>austeja.mintak@gmail.com</li>
          <li>
            <a
              href="https://www.linkedin.com/in/aust%C4%97ja-kazlauskait%C4%97-550368252/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Calypsea"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </section>
      
      <Media queries={{ small: { maxWidth: 999 } }}>
      {(matches) =>
            !matches.small ? (
              <div className="leavesBottom">
                <img src={leaf1} className="leaf3" alt=" "/>
                <img src={leaf2} className="leaf4" alt=" "/>
              </div>
            ) : (
              <div className="leavesBottom smaller">
               <img src={leaf1} className="leaf3 smallLeaf2 " alt=" "/>
                <img src={leaf2} className="leaf4 smallLeaf2" alt=" "/>
              </div>
            )
          }
      
      </Media>
      
      
    </main>
    
  );
}
