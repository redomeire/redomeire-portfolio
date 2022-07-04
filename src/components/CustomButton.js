import { Button } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: box-shadow .15s,transform .15s;
  touch-action: manipulation;
  padding: 14px;
  color: ${props => props.clr};

  &:focus {
    box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px #D6D6E7 0 -3px 0 inset;
    background-color: ${props => props.bg};
    color: ${props => props.clr};
    };

&:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
  background-color: ${props => props.bg};
  color: ${props => props.clr};
};

&:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
  background-color: ${props => props.bg};
  color: ${props => props.clr};
};`

function CustomButton(props){
    return <StyledButton variant={props?.variant} type={props?.type} clr={props.clr} startIcon={props.startIcon} endIcon={props.endIcon} bg={props.bg} style={props.style} onClick={props.onClick}>{props.children}</StyledButton>
}

export default CustomButton;