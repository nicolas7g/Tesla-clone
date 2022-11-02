import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container className='home__section'>
        <Section 
            title='Model S' 
            description='Order Online Touchless Delivery' 
            image='model-s.jpg' 
            leftBtnText = 'Custom Order'
            rightBtnText = 'Existing inventory'/>
        <Section 
            title='Model Y' 
            description='Order Online Touchless Delivery' 
            image='model-y.jpg'
            leftBtnText = 'Custom Order'
            rightBtnText = 'Existing inventory'/>
        <Section 
            title='Model X' 
            description='Order Online Touchless Delivery' 
            image='model-x.jpg'
            leftBtnText = 'Custom Order'
            rightBtnText = 'Existing inventory'/>
        <Section 
            title='Model 3' 
            description='Order Online Touchless Delivery' 
            image='model-3.jpg'
            leftBtnText = 'Custom Order'
            rightBtnText = 'Existing inventory'/>
        <Section 
            title='Lowest Cost Solar Panels in America' 
            description='Money-back guarantee' 
            image='solar-panel.jpg'
            leftBtnText = 'Order Now'
            rightBtnText = 'Learn more'/>
        <Section 
            title='Accessories' 
            description='' 
            image='accessories.jpg'
            leftBtnText = 'Shop Now'
            />    
        
    </Container>
  )
}

export default Home



const Container = styled.div`
  height: 100vh;
`