import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useSelector} from 'react-redux' // used to grab data into redux, similar to dispatch
import {selectCars} from '../features/car/carSlice'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);


  return (
    <Container>
        
          
        <a className='logo__link' href='https://www.tesla.com/'> 
          {/*<img src='/images/logo.svg' alt=''/>*/}
            <img  className='logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tesla_Motors_Logo.svg/2880px-Tesla_Motors_Logo.svg.png' 
            alt=''
            />
        </a>
        
       
        <Menu>
        {
          cars.map((car, index)=>(
            <button key={index} href='#'>
                    {car}
            </button>
            ))
          }

        </Menu>
        <RightMenu>
            <button href='#'>Shop</button>
            <button href='#'>Account</button>
            <CustomMenu  onClick={() =>setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>{/* se crea para alinear la X de cierre. TIP: siempre que se quiera alinear algo primero envolverlo en un div*/}
              <CustomClose  onClick={() =>setBurgerStatus(false)}/>
          </CloseWrapper>
          
          <li><a href='#'>Existing Inventory</a></li>
          <li><a href='#'>Used Inventory</a></li>
          <li><a href='#'>Trade-in</a></li>
          <li><a href='#'>Cybertruck</a></li>
          <li><a href='#'>Roadster</a></li>
          {
          cars.map((car, index)=>(
            <li><a key={index} href='#'>
                    {car}
            </a></li>
            ))
          }
        </BurgerNav>
        
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height = 60px;
  position: fixed; //por mas que haga scroll hacia abajo, el container se sigue viendo en la parte superior 
  display: flex;
  padding: 10px 40px;
  justify-content: space-between;
  top: 0; // con los atributos top + left + right hago que el container se posicione arriba y ocupe todo el ancho de la pagina
  left: 0;
  right:0;
  z-index:1 ; //establece que elemento esta por sobre cual cuando se superponen, a mayor indice mas arriba esta


  .logo__link{
    max-width: 25%;
    
  }
  .logo {
    flex:0.3;
    padding: 10px 0px;
    max-width: 30%;
    -webkit-filter: grayscale(1);
  }
`


const Menu = styled.div`
  display:flex;
  align-items: center;
  flex: 0.6;
  z-index:10 ;

  button{
    
    cursor: pointer;
    font-size: 16px;
    background: none; 
    border: none;
    height: 30px;
    font-weight: 600 ;
    padding: 0 10px;
  }
  @media(max-width: 768px){
      display:none;
  }
  button:hover {
    border-radius: 4px;
    background-color: rgba(23,26,32,0.15);
    transition: background-color 1.3s ease;
  }
`

const RightMenu = styled.div`
  display:flex;
  align-items: center;
  flex: 0.1;
  button{
    cursor: pointer;
    font-size: 16px;
    background: none; 
    border: none;
    height: 30px;
    font-weight: 600 ;
    padding: 0 10px;
    
    }
    button:hover {
      border-radius: 4px;
      background-color: rgba(23,26,32,0.15);
      transition: background-color 1.3s ease;
    }

`

const CustomMenu = styled(MenuIcon)`
margin-left: 20px;
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top:0;
  bottom:0;
  right:0;
  background: white;
  width: 300px;
  z-index: 16; //le pongo el mayor indice comparado con los otros componentes para que e visualice por encima del resto
  list-style: none;
  padding: 20px;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'}; //muestra u oculta el menu desplegado
  transition: transform 0.25s ease-in; 
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
    a{
      font-weight: 600;
    }
  }
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div` 
  display: flex;
  justify-content: flex-end;
`