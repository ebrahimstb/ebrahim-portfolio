import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl, about, iconUrl, imgLink, logoWeb }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{about}</p>
          <span className="icons">
                 <a href="https://github.com/ebrahimstb" className="icn">{iconUrl}</a>
                <a href="#" className="icn">{imgLink}</a>
                <a href="https://logofolio.vercel.app/" className="icn1">{logoWeb}</a>
          </span>
             
        </div>
      </div>
    </Col>
  )
}