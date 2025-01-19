import styled from "styled-components";


export const ButtonContainer = styled.div`

display: flex;
justify-content: center;
`;

export const ButtonShow = styled.button`
 

font-size: .8rem;

@media (min-width: 1080px) {
font-size:1rem;

}

`;


export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  text-align:center;
  margin-bottom:5rem;
  margin-left:2rem;
  margin-right:2rem;


@media (min-width: 500px) {

 display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  margin:0px;

}  

 

  @media (max-width: 500px) {

  display: flex;
  flex-direction: column;
  


}


 @media (min-width: 730px) {

   grid-template-columns: repeat(3, 1fr);
  


}

@media (min-width: 1024px) {

 grid-template-columns: repeat(4, 1fr);
 max-width:2000px;
 
 
}
 


 
`;

export const Title = styled.div`
color:blue;
font-size: 20rem;
margin-top:90 rem
margin-bottom: 15 rem;
align-text:center;

`;
