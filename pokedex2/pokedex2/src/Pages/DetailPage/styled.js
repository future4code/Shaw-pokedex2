import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;
height: 100vh;
align-items: center;
margin-top: -200px;

.button1 {
    margin-right: 300px;
    margin-bottom: 20px;
    
    
}

.button2 {
    margin-left: 300px;
    margin-bottom: 20px;
   

}

`

export const ContainerSon = styled.div`
display: grid;
align-items: center;
grid-template-rows: 1fr 1fr;
grid-template-columns: 1fr 1fr;
`


export const ContainerPowerPoke = styled.div`
display: flex;
align-items: center;
flex-direction: column;




`

export const ContainerTypePoke = styled.div`
display: flex;
align-items: center;
flex-direction: column;



`

export const ContainerAttacks = styled.div`
display: flex;
align-items: center;
flex-direction: column;


`

export const CardPhoto = styled.div`
display: flex;
align-items: center;
flex-direction: column;



img {
    width: 100px;
}

`