import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { BrowserChrome, Github } from "react-bootstrap-icons";

export const Projects = () => {

  const gitIcon = <Github size={25}  alt="" />;
  const webLink = <BrowserChrome size={25}  alt="" />;
  const logoWeb = <BrowserChrome size={25} alt="" />;
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      about: " Welcome to a realm where beauty meets technology, where innovation embraces elegance behold our cosmetic website, meticulously designed and flawlessly powered by the brilliance of React. ",
      imgUrl: projImg1,
      imgLink: webLink,
      iconUrl: gitIcon
    },
    {
      type : "web",
      title: "Crypto app",
      description: "Design & Development",
      imgUrl: projImg2,
      about: " Welcome to a revolutionary digital domain where finance meets cutting-edge technology, where innovation shapes the future behold our React-powered crypto website, your gateway to the captivating world of cryptocurrency.",
      imgLink: webLink,
      iconUrl: gitIcon
    },
    {
      title: "A TODO application",
      description: "Design & Development",
      imgUrl: projImg3,
      about: " Experience the transformative power of our React-infused Todo App as it empowers you to conquer your tasks with effortless efficiency, our website provides a dynamic and streamlined platform to manage your daily responsibilities.",
      imgLink: webLink,
      iconUrl: gitIcon
    },
    {
      title: "Jumia.com Clone",
      description: "Design & Development",
      imgUrl: projImg4,
      about: " redesined the jumia website that looks exactly like the original with its functionalities (ONLY TO BE VIEWED ON WIDE SCREEN )",
      imgLink: webLink,
      iconUrl: gitIcon
    },
    {
      title: "Logo Designs",
      description: "Design & critical thinking",
      imgUrl: projImg5,
      about: "Prepare to be captivated and inspired as i craft visually stunning and compelling logos that embody the very soul of your business.",
      logoWeb: logoWeb
    },
    {
      title: "Graphics Flyers",
      description: "Creative Design",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounce": ""}>
                <h2>Projects</h2>
                <p>Are you ready to witness the perfect blend of innovation, aesthetics, and cutting-edge technology? Look no further, for you have stumbled upon a true creative powerhouse, your go-to web developer and graphics designer extraordinaire!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Designs/Logos</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project.type}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
