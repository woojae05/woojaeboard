import React from "react";
import styled from "styled-components";
import { useLogin } from "./useLogin";

const Login = () => {
  const { userInfo, handleLogin, onChange } = useLogin();
  return (
    <Wrapper>
      <div>
        <label>아이디</label>
        <input
          value={userInfo.id}
          placeholder="id"
          name="id"
          onChange={(e) => {
            const { value, name } = e.target;
            onChange(value, name);
          }}
        />
      </div>
      <div>
        <label>비밀번호</label>
        <input
          value={userInfo.password}
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            const { value, name } = e.target;
            onChange(value, name);
          }}
        />
      </div>
      <input
        type="button"
        id="loginBtn"
        value={"로그인"}
        onClick={() => {
          handleLogin();
        }}
      />
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    display: block;
    font-weight: 700;
  }
  input {
  }
`;
