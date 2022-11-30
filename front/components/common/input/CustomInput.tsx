import React from "react";
import styled from "styled-components";

interface props {
  placeholder?: string;
  onChange?: (e: InputEvent) => void;
}

const CustomInput = (porps: props) => {
  // return <StyledInput {...porps}></StyledInput>;
};

export default CustomInput;

const StyledInput = styled.input``;
