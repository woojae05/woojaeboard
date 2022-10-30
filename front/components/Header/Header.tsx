import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import styled from "styled-components";
import { customAxios } from "../../lib/customAxios";
import Router from "next/router";

const Header = () => {
  const searchPost = () => {};

  return (
    <Container>
      <Link href={"/"}>
        <h1>WoojaeBoard</h1>
      </Link>
      <input
        type="text"
        placeholder="검색"
        onKeyDown={(e: any) => {
          if (e.keyCode == 13) {
            Router.push(`/post/search?q=${e.target?.value}`);
          }
        }}
      />
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

  > input {
    width: 200px;
    height: 40px;
  }
`;
