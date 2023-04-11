import { React } from "react";
import { useState,useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import  Header  from "../assets/img/header-img.svg";

export const Banner = () => {
    
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleteing, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
    const [text, setText] = useState('');
    const [delta, setDelta] =useState(300- Math.random() * 100)
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
           tick() 
        },delta)
        return() =>{clearInterval(ticker)};
    },[text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleteing ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleteing) {
            setDelta(prevDelta => prevDelta /2)
        } 
        if (!isDeleteing && updatedText ===fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleteing && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Ebrahim `}<span className="wrap">{text}</span></h1>
                        <p> loremipsum dj ,eh  lcq hb  hib jhhbdijbiujhb  hbiebq ajib bicv la jib l ujb h b;ihc jh jhkn jhub j hibi jh h bi  b jhhb </p>
                        <button onClick={() => console.log("connect")}>Let's connect<ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={Header} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}