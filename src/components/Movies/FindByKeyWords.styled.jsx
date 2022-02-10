import styled from "@emotion/styled";

export const Input = styled.input`
    width: 300px;
	font-size: 13px;
	padding: 6px 0 4px 10px;
    outline: none;
	border: 1px solid #cecece;
	background: #F6F6f6;
	border-radius: 2px;
    &:hover,
    &:focus {
        border-color: blue;
    }
`;

export const SearchBtn = styled.button`
  font-size: 13px;
  padding: 5px 8px 3px 8px;
  cursor: pointer;
  color: #4c4e50;

  &:hover,
  &:focus {
        
        color: black;
`;