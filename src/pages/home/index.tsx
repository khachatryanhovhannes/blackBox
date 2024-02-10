import { useEffect, useState } from 'react';
import styled from 'styled-components';
import classes from './home.module.css'

const Image = styled.div`
position: absolute; 
transition: all ease-in-out; 
`

const Home = () => {
  const [position, setPosition] = useState({ x: 160, y: 0, rotate: 70 });
  const [imageParams, setimageParams] = useState({
    width: 0,
    height: 0,
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
    borderBottom: ' 100px solid #191919',
    backgroundColor: "transparent",
    borderRadius: 0,
  })

  useEffect(() => {
    const animationContainer = document.getElementById("animationContainer")!;
    const handleMouseMove = (event: MouseEvent) => {

      const containerWidth = animationContainer.offsetWidth;
      console.log(event.layerX)
      setPosition({ x: event.layerX - 120, y: event.layerY - 10, rotate: position.rotate += 3 });
      if (event.layerX < containerWidth / 3 + 50 && event.layerX > 50) {
        setimageParams({
          width: 120,
          height: 120,
          borderLeft: '',
          borderRight: '',
          borderBottom: '',
          backgroundColor: "#191919",
          borderRadius: 0,
        })
      } else if (event.layerX < 2 * (containerWidth / 3) + 50 && event.layerX > 150) {
        console.log(containerWidth)
        console.log
        setimageParams({
          width: 0,
          height: 0,
          borderLeft: '70px solid transparent',
          borderRight: '70px solid transparent',
          borderBottom: ' 140px solid #191919',
          backgroundColor: "transparent",
          borderRadius: 0,
        })
      } else if (event.layerX < containerWidth - 10 && event.layerX > 50) {
        setimageParams({
          width: 120,
          height: 120,
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
          borderLeft: '70px solid transparent',
          borderRight: '70px solid transparent',
          borderBottom: ' 140px solid #191919',
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