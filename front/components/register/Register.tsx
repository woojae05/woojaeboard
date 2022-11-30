import React, { useState } from "react";
import styled from "styled-components";
import { UserInfo } from "../../interface/userInfo";
import AuthApi from "../../api/Auth";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: "",
    password: "",
    name: "",
  });

  const onChange = (value: string, name: string) => {
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pageContainer">
      <Wrapper>
        <label>이름</label>
        <input
          value={userInfo.name}
          type="text"
          name="name"
          placeholder="이름"
          onChange={(e) => {
            const { value, name } = e.target;
            onChange(value, name);
          }}
        />
        <div>
          <label>아이디</label>
          <input
            value={userInfo.id}
            type="text"
            name="id"
            placeholder="id"
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
        <button
          onClick={() => {
            AuthApi.tryRegister(userInfo).then((res) => {
              alert("회원가입 성공");
              router.push("/login");
            });
          }}
        >
          회원가입
        </button>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  label {
    display: block;
    font-weight: 700;
  }
  > input {
    width: 150px;
  }
`;

export default Register;
