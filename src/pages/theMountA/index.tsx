import classes from "./theMountA.module.css"
import detailsImage from "../../assets/box.png"
import styled from 'styled-components';
import { useEffect, useState } from "react";
import image from "../../assets/sens-3.jpg";

const Image = styled.div`
  position: absolute;
  transition: all ease-in-out;
`;


const TheMountA = () => {
    const windowSize = window.innerWidth;
    const [position, setPosition] = useState({ x: 0, y: 0, rotate: 70 });
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
                        <span>The Mount A</span>
                    </h2>
                    <p>

                        <img src={image} className={classes.responsiveShowImage} alt="Meditation with Four Elements" />
                        "The Mount A" project authored by Gohar Martirosyan is a virtual reality film that immerses viewers in a metaphorical
                        journey up Mount Ararat, blurring reality and imagination. It draws parallels with the mystical Mount Analogue and
                        explores themes of identity, environment and spirituality. This project combines futuristic technology with breathtaking
                        landscapes, offering a personalized journey through time via virtual reality.
                    </p>
                </div>
                <img src={image} alt="Meditation with Four Elements" />

            </div>
            <div className={classes.detilsText}>
                <img src={detailsImage} alt="box" />
                The Mount A
            </div>
        </>
    );
}

export default TheMountA