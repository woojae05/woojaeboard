import React from "react";
import { PostInfo } from "../../../interface/postDetail";
import styled from "styled-components";
import { customAxios } from "../../../lib/customAxios";
import Router from "next/router";
import Link from "next/link";

interface PostDetailProps {
  data: PostInfo;
}
const PostDetail = ({ data }: PostDetailProps) => {
  const { id, title, views, content, author } = data;

  const DeletePost = (id: number) => {
    customAxios.delete(`/post/${id}`).then((res) => {
      Router.push("/");
    });
  };

  return (
    <Container>
      <h1>{title}</h1>
      <p className="author">글쓴이:{author}</p>
      <p className="views">조회수:{views}</p>
      <p>{content}</p>
      <div className="buttonBox">
        <Link href={`/post/update/${id}`}>
          <button className="updateButton">수정하기</button>
        </Link>
        <button
          onClick={() => {
            DeletePost(id);
          }}
        >
          삭제하기
        </button>
      </div>
    </Container>
  );
};

export default PostDetail;

const Container = styled.div`
  position: relative;
  width: 600px;
  height: 700px;
  > .buttonBox {
    position: absolute;
    right: 20px;
    bottom: 100px;
    width: 220px;
    display: flex;
    justify-content: space-between;
  }
  .author {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  .views {
    position: absolute;
    top: 30px;
    right: 20px;
  }
  button {
    width: 100px;
    align-items: center;
    background-color: initial;
    background-image: linear-gradient(#bd0505, #bd0505);
    border-radius: 8px;
    border-width: 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    font-family: expo-brand-demi, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-size: 18px;
    height: 52px;
    justify-content: center;
    line-height: 1;
    margin: 0;
    outline: none;
    overflow: hidden;
    padding: 0 32px;
    text-align: center;
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    transition: all 150ms;
    vertical-align: baseline;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .updateButton {
    background-image: linear-gradient(#2a2dc9, #2a2dc9);
  }

  > button:hover {
    box-shadow: rgba(0, 1, 0, 0.2) 0 2px 8px;
    opacity: 0.85;
  }

  > button:active {
    outline: 0;
  }

  > button:focus {
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 3px;
  }

  @media (max-width: 420px) {
    button {
      height: 48px;
    }
  }
`;
