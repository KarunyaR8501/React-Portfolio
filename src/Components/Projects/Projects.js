import React from "react";
import "./Projects.css";
import Event from '../../assets/event.png'
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different"> Recent Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFIEWL2aiwrELIYLPfWLV-IMU-yxjADAYSbmqnd3WmxKLKg0WBuZCugGqzMxfawB7u1s&usqp=CAU"
                    alt="Stack-overflow"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Stack Overflow clone</h2>
                <p>
                  Stack Overflow is a question-and-answer website for
                  programmers. we build clone of their website with some
                  features User registration and authentication system, Posting
                  questions and answers, Commenting on questions and answers,
                  voting etc.,
                </p>
                <div>
                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://marvelous-strudel-f12e8f.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Event}
                    alt="event"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2> Event Management</h2>
                <p>
                  Created a comprehensive web application inspired by ZenClass Event Management,
                  that the functionality of the student dashboard.such as a
                  student dashboard, assignment submission , and event management.
                </p>
                <div>
                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://admirable-elf-c6f132.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
