import styled from "styled-components";

export const DropDown = styled.div`
font-size:20px;
width:49%;
height: 12rem;
background-color:#F8F0e3;
z-index: 2;
overflow-y:scroll;

border:20rem;
text-align:center;
margin: auto;
margin-bottom:3rem;


 @media (min-width: 500px) {

height: 14rem;
width:41%;
background-color: blue;
}


@media (min-width: 734px) {

width:35%;
height: 16rem;
background-color:yellow;

}

@media (min-width: 872px) {

width: 32%;
height: 17rem;
background-color:red;

}

@media (min-width: 952px) {

width: 25%;
height: 16rem;
background-color:purple;


}

@media (min-width: 1220px) {

width: 20%;
height: 17rem;
background-color:pink;
}
}`;
