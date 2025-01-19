import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  
  font-size: .5rem;
  padding-top:1px;
  color:gray;
  cursor: pointer;
  &link{
    color gray;
  }
  &:visited{
    color:blue;
  }
  &:hover{sty
    color: red;
  }
  &:active{
    color:yellow;
  }
`;

export const NavigationContainer = styled.div` 
  font-size: 10px;
  
`;

