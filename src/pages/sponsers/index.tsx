import classes from "./sponsers.module.css"
import styled from 'styled-components';
import sponserImage1 from "../../assets/sponser-1.png"
import sponserImage2 from "../../assets/sponser-2.png"
import sponserImage3 from "../../assets/sponser-3.png"
import sponserImage4 from "../../assets/sponser-4.png"
import { useEffect, useState } from "react";

const Image = styled.div`
  position: absolute;
  transition: all ease-in-out;
`;

const Sponsers = () => {

    const windowSize = window.innerWidth;
    const [position, setPosition] = useState({ x: 0, y: 120, rotate: 70 });
    const [imageParams, setimageParams] = useState({
        width: 0,
        height: 0,
        borderLeft: `${windowSize > 600 ? 60 : 25}px solid transparent`,
        borderRight: `${windowSize > 600 ? 60 : 25}px solid transparent`,
        borderBottom: `${windowSize > 600 ? 120 : 50}px solid #191919`,
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
                    width: windowSize > 600 ? 120 : 50,
                    height: windowSize > 600 ? 120 : 50,
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
                    borderLeft: `${windowSize > 600 ? 60 : 25}px solid transparent`,
                    borderRight: `${windowSize > 600 ? 60 : 25}px solid transparent`,
                    borderBottom: `${windowSize > 600 ? 120 : 50}px solid #191919`,
                    backgroundColor: "transparent",
                    borderRadius: 0,
                });
            } else if (newX < containerWidth - 10 && newX > 50) {
                setimageParams({
                    width: windowSize > 600 ? 120 : 50,
                    height: windowSize > 600 ? 120 : 50,
                    borderLeft: '',
                    borderRight: '',
                    borderBottom: '',
                    backgroundColor: "#191919",
                    borderRadius: 50,
                });
            } else {
                setPosition({ x: 0, y: 120, rotate: 70 });
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
                    <span>Collaborators and Sponsors
                    </span>
                </h2>
            </div>
            <div className={classes.images}>
                <div>
                    <img src={sponserImage4} alt="EIF" />
                </div>
                <div>
                    <img src={sponserImage2} alt="GTC" />
                </div>
                <div>
                    <img src={sponserImage3} alt="GALIQUE" />
                </div>
                <div>
                    <img src={sponserImage1} alt="EIF SCIENCE" />
                </div>
            </div>
        </>
    );
};

export default Sponsers;
