import { useEffect, useState } from 'react';
import styled from 'styled-components';
import classes from './home.module.css'

const Image = styled.div`
position: absolute; 
transition: all ease-in-out; 
`

const Home = () => {
  const windowSize = window.innerWidth;
  const [position, setPosition] = useState({ x: 160, y: 0, rotate: 70 });
  const [imageParams, setimageParams] = useState({
    width: 0,
    height: 0,
    borderLeft: `${windowSize > 600 ? 50 : 25}px solid transparent`,
    borderRight: `${windowSize > 600 ? 50 : 25}px solid transparent`,
    borderBottom: `${windowSize > 600 ? 100 : 50}px solid #191919`,
    backgroundColor: "transparent",
    borderRadius: 0,
  })

  useEffect(() => {
    const animationContainer = document.getElementById("animationContainer")!;
    const handleMouseMove = (event: MouseEvent) => {

      const containerWidth = animationContainer.offsetWidth;
      setPosition({ x: event.layerX - 120, y: event.layerY - 10, rotate: position.rotate += 3 });
      if (event.layerX < containerWidth / 3 + 50 && event.layerX > 50) {
        setimageParams({
          width: windowSize > 600 ? 120 : 60,
          height: windowSize > 600 ? 120 : 60,
          borderLeft: '',
          borderRight: '',
          borderBottom: '',
          backgroundColor: "#191919",
          borderRadius: 0,
        })
      } else if (event.layerX < 2 * (containerWidth / 3) + 50 && event.layerX > 150) {
        setimageParams({
          width: 0,
          height: 0,
          borderLeft: `${windowSize > 600 ? 70 : 35}px solid transparent`,
          borderRight: `${windowSize > 600 ? 70 : 35}px solid transparent`,
          borderBottom: `${windowSize > 600 ? 140 : 70}px solid #191919`,
          backgroundColor: "transparent",
          borderRadius: 0,
        })
      } else if (event.layerX < containerWidth - 10 && event.layerX > 50) {
        setimageParams({
          width: windowSize > 600 ? 120 : 60,
          height: windowSize > 600 ? 120 : 60,
          borderLeft: '',
          borderRight: '',
          borderBottom: '',
          backgroundColor: "#191919",
          borderRadius: 50,
        })
      } else {
        setimageParams({
          width: 0,
          height: 0,
          borderLeft: `${windowSize > 600 ? 70 : 35}px solid transparent`,
          borderRight: `${windowSize > 600 ? 70 : 35}px solid transparent`,
          borderBottom: `${windowSize > 600 ? 140 : 70}px solid #191919`,
          backgroundColor: "transparent",
          borderRadius: 0,
        })

        setPosition({ x: 160, y: 0, rotate: 70 })
      }
    }
    animationContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      animationContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <div className={classes.home}>
      <div className={classes.companyName}>
        <div className={classes.animationContainer} id='animationContainer'>

          {
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
  )
}

export default Home