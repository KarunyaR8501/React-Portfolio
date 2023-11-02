import React from "react";
import "./Projects.css";
import Event from '../../assets/event.png'
import Postcode from '../../assets/Postcode.jpg'
import Pizza from '../../assets/Pizza.png'
import Chat from '../../assets/Chat.png';
import Pokemon from '../../assets/Pokemon.png'
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different"> Projects</h2>
        <div>
        <h3  className="project_videocontainer">Credential</h3>
        <p  className="project_videocontainer">Email : admin@gmail.com</p>
        <p  className="project_videocontainer">Password : admin123</p>
        </div>
        <div className="allProjects">
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
                <h2>Zen Event Management</h2>
                <p>
                  Created a comprehensive web application inspired by ZenClass Event Management,
                  that the functionality of the student dashboard.such as a
                  student dashboard, assignment submission , and event management.
                </p>
                <div>
                  
                </div>
                <div>
                  <a
                    href="https://enchanting-truffle-314141.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/KarunyaR8501/Zen-Class-Event-Management-for-Student-Frontend.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Frontend
                    </span>
                  </a>
                  <a
                    href="https://github.com/KarunyaR8501/Zen-Class-Event-Management-for-Student-Backend.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Backend
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
                    src={Pizza}
                    alt="Pizza"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Pizza Paradise</h2>
                <p>
                Pizza Paradise is a pizza delivery web application that allows customers to order pizzas online.Customers can browse the available pizza menu and select the pizzas they want to order.This website with some features User registration and authentication system
                </p>
                <div>
                 
                </div>
                <div>
                  <a
                    href="https://pizza-paradise-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/KarunyaR8501/Pizza-Paradise-Frontend.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Frontend
                    </span>
                  </a>
                  <a
                    href="https://github.com/KarunyaR8501/Pizza-Paradise-Backend.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    Backend
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
                   src={Chat}
                   alt="Chat"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Chat App</h2>
                <p>
                A Real-Time Chat App with MERN and SocketIO. 
                We will use Socket.io to receive and send messages between clients,
                that enables users to exchange messages and communicate with each other in real-time. 
                It allows individuals or 
                groups to have conversations, 
                share information and receive updates in real-time
                </p>
                <div>
                 
                </div>
                <div>
                  <a
                    href="https://funny-talk-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/KarunyaR8501/ChatApp-Frontend.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Frontend
                    </span>
                  </a>
                  <a
                    href="https://github.com/KarunyaR8501/ChatApp-Backend.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    Backend
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
                  <a
                    href="https://github.com/KarunyaR8501/StackOverFlow-Clone-Frontend.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Frontend
                    </span>
                  </a>
                  <a
                    href="https://github.com/KarunyaR8501/StackOverFlow-Clone-Backend.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    Backend
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
                    src={Postcode}
                    alt="Postcode"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2> Postcode</h2>
                <p>
                 This project enables users to share their daily coding progress through brief posts. 
                With the ability to update their "about" status, users can highlight their current focus. 
                The platform allows users to add, read, edit, and delete their posts and status.
                </p>
                <div>
               
                </div>
                <div>
                  <a
                    href="https://postcode-app.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/KarunyaR8501/Postcode/tree/main/client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Frontend
                    </span>
                  </a>
                  <a
                    href="https://github.com/KarunyaR8501/Postcode/tree/main/server"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Backend
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
                    src={Pokemon}
                    alt="Pokemon"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Pokemon API</h2>
                <p>
                Developed a Pokemon API using async/await with fetch.
                Technologiess used : HTML , CSS , Javascript
                Implement the Pagination.
                The API supports asynchronous programming using the async/await.

                </p>
                <div>
                  
                </div>
                <div>
                  <a
                    href="https://chipper-chebakia-268cb5.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/KarunyaR8501/Pokemon-API"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Frontend
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
