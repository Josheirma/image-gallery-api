import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  font-size: .6rem;
  color:gray;
  cursor: pointer;
  &link{
    color gray;
  }
  &:visited{
    color:blue;
  }
  &:hover{
    color: red;
  }
  &:active{
    color:yellow;
  }
`;

export const NavigationContainer = styled.div` 
  font-size: 10px;
  button {
    font-size: 0.4rem;
  }
`;

