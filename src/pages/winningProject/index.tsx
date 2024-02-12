import image1 from "../../assets/sensorial-xplorers.jpg";
import image2 from "../../assets/sens-2.jpg";
import image3 from "../../assets/sens-3.jpg";
import rightArrow from "../../assets/right-arrow.png";
import classes from "./winningProject.module.css";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useEffect, useState } from "react";


const Image = styled.div`
  position: absolute;
  transition: all ease-in-out;
`;


const WinningProject = () => {
  const windowSize = window.innerWidth;
  const [position, setPosition] = useState({ x: 0, y: 20, rotate: 70 });
  const [imageParams, setimageParams] = useState({
    width: 0,
    height: 0,
    borderLeft: `${windowSize > 600 ? 50 : 25}px solid transparent`,
    borderRight: `${windowSize > 600 ? 50 : 25}px solid transparent`,
    borderBottom: `${windowSize > 600 ? 100 : 50}px solid #191919`,
    backgroundColor: "transparent",
    borderRadius: 0,
  });

  useEffect(() => {
    const animationContainer = document.getElementById("animationContainer")!;
    let animationFrameId: number;

    const animate = () => {
      const containerWidth = animationContainer.offsetWidth;
      const newX = (position.x + 3) % containerWidth;
      setPosition(prevPosition => ({
        ...prevPosition,
        x: newX,
        rotate: prevPosition.rotate + 3,
      }));

      animationFrameId = requestAnimationFrame(animate);

      if (newX < containerWidth / 3 + 50) {
        setimageParams({
          width: windowSize > 600 ? 100 : 50,
          height: windowSize > 600 ? 100 : 50,
          borderLeft: '',
          borderRight: '',
          borderBottom: '',
          backgroundColor: "#191919",
          borderRadius: 0,
        });
      } else if (newX < 2 * (containerWidth / 3) + 50 && newX > 150) {
        setimageParams({
          width: 0,
          height: 0,
          borderLeft: `${windowSize > 600 ? 50 : 25}px solid transparent`,
          borderRight: `${windowSize > 600 ? 50 : 25}px solid transparent`,
          borderBottom: `${windowSize > 600 ? 100 : 50}px solid #191919`,
          backgroundColor: "transparent",
          borderRadius: 0,
        });
      } else if (newX < containerWidth - 10 && newX > 50) {
        setimageParams({
          width: windowSize > 600 ? 100 : 50,
          height: windowSize > 600 ? 100 : 50,
          borderLeft: '',
          borderRight: '',
          borderBottom: '',
          backgroundColor: "#191919",
          borderRadius: 50,
        });
      } else {
        setPosition({ x: 0, y: 20, rotate: 70 });
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  return (
    <div className={classes.slideContainer}>
      <div id="animationContainer" className={classes.animationContainer}>

        <Image
          style={{
            left: position.x,
            top: position.y,
            rotate: position.rotate + "deg",
            width: imageParams.width,
            height: imageParams.height,
            borderLeft: imageParams.borderLeft,
            borderRight: imageParams.borderRight,
            borderBottom: imageParams.borderBottom,
            backgroundColor: imageParams.backgroundColor,
            borderRadius: imageParams.borderRadius + "%",
          }}
        />
        <h2>
          Winning
          <br />
          projects of the NigrumArca
        </h2>
      </div>
      <div className={classes.slider}>
        <div className={classes.slide1} >
          <Link className={classes.imageLink} to="/meditation-with-four-elements">
            <img src={image2} alt="Sensorial Xplorers" />
          </Link>
          <div className={classes.sectionText}>
            <p>Meditation with Four
              <br />
              Elements</p>
            <Link to="/meditation-with-four-elements" className={classes.seeMore}>See More <img src={rightArrow} alt="-->" /></Link>
          </div>
        </div>

        <div className={classes.slide2} >
          <Link className={classes.imageLink} to="/immersion">
            <img src={image1} alt="Sensorial Xplorers" />
          </Link>
          <div className={classes.sectionText}>
            <p>Immersion</p>
            <Link to="/immersion" className={classes.seeMore}>See More <img src={rightArrow} alt="-->" /></Link>
          </div>
        </div>

        <div className={classes.slide3} >
          <Link className={classes.imageLink} to="/the-mount-a">
            <img src={image3} alt="Sensorial Xplorers" />
          </Link>
          <div className={classes.sectionText}>
            <p>The Mount A</p>
            <Link to="/the-mount-a" className={classes.seeMore}>See More <img src={rightArrow} alt="-->" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinningProject;
