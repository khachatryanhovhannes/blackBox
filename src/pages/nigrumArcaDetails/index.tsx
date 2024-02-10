import classes from "./nigrumDetails.module.css"
import detailsImage from "../../assets/box.png"
import styled from 'styled-components';
import { useEffect, useState } from "react";


const Image = styled.div`
  position: absolute;
  transition: all ease-in-out;
`;

const NigrumArcaDetails = () => {
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
          <span>First iniciative details: <br /> Nigrum Arca
          </span>
        </h2>
        <p>
          Nigrum Arca is the first iniciative of the Black Box multidisciplinary incubation program—connecting art, science, technology,
          and human senses. In a world where technological strides can sometimes distance us from our inherent senses, this project seeks
          to reconnect individuals with their emotions and creativity.

        </p>
        <p>
          Here, artists, scientists, and engineers synergize their expertise, infusing inspiration and knowledge to produce captivating
          experiences. Within “Nigrum Arca” three winning teams created unique sensory experiences with their projects.

        </p>
        <p>
          Explore the “Nigrum Arca” projects below to witness the extraordinary synergy of creativity, science, and human experience, as
          these winning teams unravel the mysteries within the black box, reshaping our perceptions and inviting us to appreciate the
          intricate dance of art and innovation.

        </p>
      </div>

      <div className={classes.detilsText}>
        <img src={detailsImage} alt="box" />
        Nigrum Arca
      </div>
    </>
  );
};

export default NigrumArcaDetails;
