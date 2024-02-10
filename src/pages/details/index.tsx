import classes from "./details.module.css"
import detailsImage from "../../assets/box.png"
import styled from 'styled-components';
import { useEffect, useState } from "react";

const Image = styled.div`
  position: absolute;
  transition: all ease-in-out;
`;

const Details = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, rotate: 70 });
  const [imageParams, setimageParams] = useState({
    width: 0,
    height: 0,
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
    borderBottom: ' 100px solid #191919',
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
          width: 100,
          height: 100,
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
          borderLeft: '50px solid transparent',
          borderRight: '50px solid transparent',
          borderBottom: '100px solid #191919',
          backgroundColor: "transparent",
          borderRadius: 0,
        });
      } else if (newX < containerWidth - 10 && newX > 50) {
        setimageParams({
          width: 100,
          height: 100,
          borderLeft: '',
          borderRight: '',
          borderBottom: '',
          backgroundColor: "#191919",
          borderRadius: 50,
        });
      } else {
        setPosition({ x: 0, y: 0, rotate: 70 });
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  return (
    <>
      <div className={classes.details}>
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
        <h2 id="animationContainer">
          <span>Black Box: Multidisciplinary <br /> Incubation Program</span>
        </h2>
        <p>
          Welcome to Black Box, a unique exploration at the crossroads of science, art, and
          human emotions. In our tech-driven world, detachment from natural senses
          hampers creativity. The project introduces the "Black Box" metaphor to decipher the
          human experience, which is similar to the hidden mechanisms of science and
          technology.
        </p>
        <p>
          “Black Box” treats the multidisciplinary creative process as a pleace, where artists,
          scientists, and engineers input inspiration, knowledge, and skills, resulting in
          captivating experiences.
        </p>
        <p>
          EIF/GTC and Galique Art Space collaborate with multimedia artists to craft a unique
          "Black Box" environment. It showcases multimedia presentations reflecting
        </p>
        <p>
          scientific, artistic, and cultural facets of time, heritage, and space.
          Join us to unravel the mysteries within the “Black Box”: Where the creative
          algorithm comes to life.
        </p>
      </div>

      <div className={classes.detilsText}>
        <img src={detailsImage} alt="box" />
        Program Details
      </div>
    </>
  );
};

export default Details;
