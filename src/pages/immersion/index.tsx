import classes from "./immersion.module.css"
import detailsImage from "../../assets/box.png"
import styled from 'styled-components';
import { useEffect, useState } from "react";
import image from "../../assets/sensorial-xplorers.jpg";

const Image = styled.div`
  position: absolute;
  transition: all ease-in-out;
`;


const Immersion = () => {
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
            <div className={classes.container}>

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
                        <span>Immersion</span>
                    </h2>
                    <p>
                        The "Immersion" project created by Gevorg Grigoryan takes participants on a sensory journey by capturing real-life
                        experiences through a variety of multi-sensory devices. These captured experiences are then recreated in a physical
                        space, allowing participants to engage with them firsthand. The space is a tunnel that gradually narrows, creating
                        an immersive, multi-dimensional self-expression experience. Within this space, various sensors record data, including
                        sound, wave color, temperature, and light, transforming them into individual rhythms through artificial intelligence.


                    </p>
                </div>
                <img src={image} alt="Meditation with Four Elements" />

            </div>
            <div className={classes.detilsText}>
                <img src={detailsImage} alt="box" />
                Immersion
            </div>
        </>
    );
}

export default Immersion