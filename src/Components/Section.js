import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({title, description, image, leftBtnText, rightBtnText}) {

    const endOfPageRef = useRef(null);

    const onArrowPress = () => {
        endOfPageRef.current?.scrollIntoView({behavior: 'smooth'});
    }


  return (
    <div className='section'>
        <Wrap image={image}>
            <Fade top>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}   
                        </LeftButton>
                        {rightBtnText && //si existe (si no es null digamos) entonces muestro el boton
                        <RightButton>
                            {rightBtnText}
                        </RightButton>}
                    </ButtonGroup>
                </Fade>
                <DownArrow onClick={onArrowPress} src="/images/down-arrow.svg"/>
            </Buttons>
            
        </Wrap>
        <div ref={endOfPageRef}/> {/*este div solo cumple como funcion marcar el final de la pagina para que al presionar la flecha se posicione sobre este y haga un scroll down completo de la pagina*/}
    </div>    
  )
}

export default Section

//permite crear componentes y darles estilo sin necesidad de js ni css//
const Wrap = styled.div`

    width:100vw; 
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image: ${props=>`url('/images/${props.image}')`};
    display:flex;
    flex-direction:column;
    justify-content: space-between; //vertical
    align-items: center; //horizontal
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    font-family:"Gotham SSm";
    
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    
    @media (max-width: 768px){
        flex-direction:column; //para pantallas menores a 768px pone un boton debajo del otro
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    opacity: 0.85;
    text-transform: uppercase;
    cursor: pointer;
    margin: 8px;
    font-size: 14px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`



const Buttons = styled.div`
    display: flex;
    flex-direction:column;
`


const DownArrow = styled.img`
    height: 35px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    filter: invert(1);
`
 