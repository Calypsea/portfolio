import project_1_Img from "../Images/project1.JPG";
import project_2_Img from "../Images/project2.JPG";
import leaf1 from "../Images/leaf1.png";
import leaf2 from "../Images/leaf2.png";
import leaf3 from "../Images/leaf3.png";

import Media from "react-media";
import "./Examples.css";
export default function Examples() {
  
  
  return (
    <div className="projectPage">
      <section className="projectTitle">
        <div className="waviy">
          <span style={{"--i":1}}>P</span>
          <span style={{"--i":2}}>r</span>
          <span style={{"--i":3}}>o</span>
          <span style={{"--i":4}}>j</span>
          <span style={{"--i":5}}>e</span>
          <span style={{"--i":6}}>k</span>
          <span style={{"--i":7}}>t</span>
          <span style={{"--i":8}}>a</span>
          <span style={{"--i":9}}>i</span>
        </div>
      </section>
      <Media queries={{ small: { maxWidth: 999 } }}>
      {(matches) =>
            !matches.small ? (
              <div className="leaves">
                <img src={leaf1} className="projectleaf1" alt=" "/>
                <img src={leaf3} className="projectleaf3" alt=" "/>
              </div>
            ) : (
              <div className="leaves">
               <img src={leaf1} className="projectleaf1 projectsmallLeaf " alt=" "/>
                <img src={leaf3} className="projectleaf3 projectsmallLeaf" alt=" "/>
              </div>
            )
          }
      
      </Media>   

      <div className="projectsPageOuter ">
        <Media queries={{ small: { maxWidth: 768 } }}>
          {(matches) =>
            matches.small ? (
              <div className="projectPageContainer examplesSmall">
                <img src={project_2_Img} alt="" className="projectIMG" />
                <div>
                  <h2>BOOKLOOK</h2>
                  <p>
                    “BookLook” yra svetainė, kurios tikslas – padėti vartotojui
                    susirasti naują knygą. Ši svetainė yra sukurta naudojant
                    React, TypeScript ir CSS. Ji yra dinaminė, kelių puslapių
                    gylio, kam sukurti buvo naudojama React Router technologija.
                    Svetainėje galima susikurti savo paskyrą, naršyti knygas,
                    skaityti apie jas, išsisaugoti patikusias. Knygų duomenims
                    gauti naudojama „Google Book Api“.
                  </p>
                  <div>
                    <a
                      href="https://calypsea.github.io/BookLook/"
                      target="_blank"
                      rel="noreferrer"
                      className="primaryButton"
                    >
                      Go to site
                    </a>
                    <a
                      href="https://github.com/Calypsea/BookLook"
                      target="_blank"
                      rel="noreferrer"
                      className="primaryButton"
                    >
                      Github
                    </a>
                  </div>
                </div>
                <img src={project_1_Img} alt="" className="projectIMG" />
                <div>
                  <h2>COOKBOOK</h2>
                  <p>
                    „CookBook“ yra paprasta, bet intuityvi svetainė, kurios
                    tikslas – padėti išsirinkti kitą patiekalą. Ji parašyta
                    naudojant React JSX, CSS. Užpildžius mažą anketą, pasirinkus
                    pageidaujamą virtuvę, dietas ir ingredientus, svetainė
                    susisiekia su SpoonacularAPI ir gauna 3 receptus. Jei jie
                    nepatinka, pasirodo mygtukas, leidžiantis vartotojui
                    pabandyti dar kartą ir gauti naujus receptus.
                  </p>
                  <div>
                    <a
                      href="https://calypsea.github.io/CookBook/"
                      target="_blank"
                      rel="noreferrer"
                      className="primaryButton"
                    >
                      Go to site
                    </a>
                    <a
                      href="https://github.com/Calypsea/CookBook"
                      target="_blank"
                      rel="noreferrer"
                      className="primaryButton"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <>
              <div className="projectPageContainer">
                <img src={project_2_Img} alt="" className="projectIMG" />
                <div>
                  <h2>BOOKLOOK</h2>
                  <p>
                    “BookLook” yra svetainė, kurios tikslas – padėti vartotojui
                    susirasti naują knygą. Ši svetainė yra sukurta naudojant
                    React, TypeScript ir CSS. Ji yra dinaminė, kelių puslapių
                    gylio, kam sukurti buvo naudojama React Router technologija.
                    Svetainėje galima susikurti savo paskyrą, naršyti knygas,
                    skaityti apie jas, išsisaugoti patikusias. Knygų duomenims
                    gauti naudojama „Google Book Api“.
                  </p>
                  <div>
                    <a
                      href="https://calypsea.github.io/BookLook/"
                      target="_blank"
                      rel="noreferrer"
                      className="primaryButton"
                    >
                      Go to site
                    </a>
                    <a
                      href="https://github.com/Calypsea/BookLook"
                      target="_blank"
                      rel="noreferrer"
                      className="primaryButton"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div  className="projectPageContainer">
              
                <div>
                  <h2>COOKBOOK</h2>
                  <p>
                    „CookBook“ yra paprasta, bet intuityvi svetainė, kurios
                    tikslas – padėti išsirinkti kitą patiekalą. Ji parašyta
                    naudojant React JSX, CSS. Užpildžius mažą anketą, pasirinkus
                    pageidaujamą virtuvę, dietas ir ingredientus, svetainė
                    susisiekia su SpoonacularAPI ir gauna 3 receptus. Jei jie
                    nepatinka, pasirodo mygtukas, leidžiantis vartotojui
                    pabandyti dar kartą ir gauti naujus receptus.
                  </p>
                  <div>
                    <a
                      href="https://calypsea.github.io/CookBook/"
                      target="_blank"
                      rel="noreferrer"
                      className="primaryButton"
                    >
                      Go to site
                    </a>
                    <a
                      href="https://github.com/Calypsea/CookBook"
                      target="_blank"
                      rel="noreferrer"
                      className="primaryButton"
                    >
                      Github
                    </a>
                  </div>
                </div>
                <img src={project_1_Img} alt="" className="projectIMG" />
              </div>
              </>)
          }
        </Media>
      </div>
    </div>
  );
}
