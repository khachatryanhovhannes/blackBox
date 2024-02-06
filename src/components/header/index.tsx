import { useState, useEffect } from 'react';
import logo from "../../../public/logo.png"
import arrow from "../../assets/login line.png"
import classes from "./index.module.css"
import styled from 'styled-components';

// const SquareContainer = styled.div` 
//   width: 100px; 
//   height: 100px; 
//   background-color: #191919; 
//   position: absolute; 
//   transition: all ease-in-out; 
//   `;

// const TriangleContainer = styled.div` 
//   width: 0; 
//   height: 0; 
//   border-left: 50px solid transparent; 
//   border-right: 50px solid transparent; 
//   border-bottom: 100px solid #191919; 
//   position: absolute; 
//   transition: all ease-in-out; 
// `;

const Image = styled.div`
position: absolute; 
transition: all ease-in-out; 
`

const Header = () => {
    const [position, setPosition] = useState({ x: 0, y: 0, rotate: 0 });
    const [imageParams, setimageParams] = useState({
        width: 0,
        height: 0,
        borderLeft: '',
        borderRight: '',
        borderBottom: '',
        backgroundColor: "",
        borderRadius: 0,
    })

    useEffect(() => {

        const animationContainer = document.getElementById("animationContainer")!;
        const handleMouseMove = (event: MouseEvent) => {

            const containerWidth = animationContainer.offsetWidth;
            console.log(containerWidth / 3)
            setPosition({ x: event.layerX - 120, y: event.layerY - 10, rotate: position.rotate += 3 });
            if (event.layerX < containerWidth / 3) {
                setimageParams({
                    width: 100,
                    height: 100,
                    borderLeft: '',
                    borderRight: '',
                    borderBottom: '',
                    backgroundColor: "#191919",
                    borderRadius: 0,
                })
            } else if (event.layerX < 2 * (containerWidth / 3)) {
                console.log(containerWidth)
                console.log
                setimageParams({
                    width: 0,
                    height: 0,
                    borderLeft: '50px solid transparent',
                    borderRight: '50px solid transparent',
                    borderBottom: ' 100px solid #191919',
                    backgroundColor: "transparent",
                    borderRadius: 0,
                })
            } else {
                setimageParams({
                    width: 100,
                    height: 100,
                    borderLeft: '',
                    borderRight: '',
                    borderBottom: '',
                    backgroundColor: "#191919",
                    borderRadius: 50,
                })

            }
        }
        animationContainer.addEventListener('mousemove', handleMouseMove);

        return () => {
            animationContainer.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className={classes.header}>
                <div className={classes.logoAndLogin}>
                    <div className="logo">
                        <a href="#"> <img src={logo} alt="BlackBox" /></a>
                    </div>
                    <div className="login">
                        <a href="#" className={classes.loginLink}>
                            <span>Log in</span>
                            <img src={arrow} alt="arrow" className={classes.loginLinkImg} />
                        </a>
                    </div>
                </div>
                <div className={classes.companyName}>
                    <div className={classes.animationContainer} id='animationContainer'>

                        {

                            // position.x < containerWidth / 3 ? <SquareContainer
                            //     style={{ top: position.y, left: position.x, rotate: position.rotate + "deg", }}
                            // />
                            //     : position.x < 2 * (containerWidth / 3) ? <TriangleContainer
                            //         style={{ top: position.y, right: position.x, rotate: position.rotate + "deg", }}
                            //     />
                            //         : null

                            <Image style={{
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
                            }} />

                        }
                        <span className={classes.animationContainerText}>
                            Black Box
                        </span>

                    </div>
                </div>
                <div className={classes.headerDown}>
                    Multidisciplinary
                    <br />
                    Incubation Program
                </div>
            </div>

        </>
    )
}

export default Header