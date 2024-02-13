import classes from "./contact.module.css"
import styled from 'styled-components';
import { useEffect, useState } from "react";
import phone from "../../assets/phone 1.png"
import email from "../../assets/mail 1.png"
import location from "../../assets/location 1.png"
import instagram from "../../assets/instagram 1.png"
import facebook from "../../assets/facebook 1.png"
import linkedin from "../../assets/linkedin 1.png"

const Image = styled.div`
  position: absolute;
  transition: all ease-in-out;
`;
const Contact = () => {

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
            } else if (newX < containerWidth - 50 && newX > 50) {
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
                    <span>Contact and Support</span>
                </h2>
                <div className={classes.addressData}>
                    <a href="tel:+37455135558"><img src={phone} alt="" /><span> Phone: +(374)55 135558</span></a>
                    <a href="mailto:gtc@eif.am"><img src={email} alt="" /><span> Gmail: gtc@eif.am</span></a>
                    <p><img src={location} alt="" /><span> Location: 1 Gayi Street, Gyumri, Armenia</span></p>
                </div>
                <div className={classes.socialMedia}>
                    <a href="https://www.instagram.com/gyumritechnologycenter/" target="_black"><img src={instagram} alt="instagram" /></a>
                    <a href="https://www.facebook.com/GyumriTechnologyCenter" target="_black"><img src={facebook} alt="facebook" /></a>
                    <a href="https://www.linkedin.com/company/gyumritechnologycenter/" target="_black"><img src={linkedin} alt="linkedin" /></a>
                </div>
            </div>

        </>
    );
}

export default Contact