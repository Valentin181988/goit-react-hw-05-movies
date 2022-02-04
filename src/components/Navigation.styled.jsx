import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Link = styled(NavLink)`
  margin-right: 20px;
 &.active {
     color: tomato;
 };
`;