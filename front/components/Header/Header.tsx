import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import AuthApi from "../../api/Auth";

const Header = () => {
  const [name, setName] = useState("");

  const getName = async () => {
    const { data } = await AuthApi.GetUserInfo();
    setName(data.name);
  };

  useEffect(() => {
    getName().catch(() => {
      setName("");
    });
  });
  return (
    <Container>
      <Link href={"/"}>
        <h1>WoojaeBoard</h1>
      </Link>
      <div className="rightBox">
        <input
          type="text"
          placeholder="검색"
          onKeyDown={(e: any) => {
            if (e.keyCode == 13) {
              Router.push(`/post/search?q=${e.target?.value}`);
            }
          }}
        />
        {name ? (
          <div className="loginedBox">
            <h5>{name}님</h5>
            <button
              onClick={() => {
                alert("로그아웃 되었습니다");
                localStorage.removeItem("token");
                setName("");
              }}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div>
            <Link href={"/login"}>로그인</Link> |
            <Link href={"/register"}> 회원가입</Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  padding: 0 20px 0 20px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.4px solid black;

  input {
    width: 150px;
    height: 40px;
  }
  .rightBox {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .loginedBox {
    display: flex;
    align-items: center;
    > button {
      width: 70px;
      height: 30px;
    }
  }
`;
