import styled from "styled-components";

export const DropDown = styled.div`
font-size:20px;
background-color:yellow;
z-index: 2;
overflow-y:scroll;
border:20rem;
text-align:center;
margin: auto;
margin-bottom:1rem;
border: 2px solid black;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
width:80%;
height:30vh;
grid-column:3;


@media (max-width: 871px) {
  background-color: red;
  height: 33vh;
  width: 65%;
}

@media (max-width: 723px) {
  background-color: yellow;
  height: 30vh;

  }


@media (max-width: 627px) {
width: 60%;
  height: 30vh;
  background-color:blue;
}



@media (max-width: 627px) {
width : 69%;
background-color:purple;
height : 25vh;

}

@media (max-width: 500px) {
background-color:yellow;
width: 70%;
height: 21vh;
margin:0;
padding:0

}



@media (max-width: 385px) {
  width: 35%;
  height: 22vh;
  background-color: orange;
}

@media (max-width: 284px) {
background-color: red;
height: 19vh;

}







`;

