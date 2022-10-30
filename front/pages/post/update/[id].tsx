import { NextPage } from "next";
import Router from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { PostInfo } from "../../../interface/postDetail";
import { customAxios } from "../../../lib/customAxios";

interface PostUpdatePagePros {
  currentPostInfo: PostInfo;
}

const UpdatePage: NextPage<PostUpdatePagePros> = ({ currentPostInfo }) => {
  const updatePost = (postInfo: PostInfo) => {
    customAxios.patch(`/post/${postInfo.id}`, postInfo).then((res) => {
      Router.push("/");
    });
  };
  const [postInfo, setPostInfo] = useState(currentPostInfo);
  return (
    <div className="pageContainer">
      <Container>
        <input
          type="text"
          className="title"
          placeholder="제목"
          value={postInfo.title}
          onChange={(e) => {
            setPostInfo((prev) => ({ ...prev, title: e.target.value }));
          }}
        />
        <input
          type="text"
          className="author"
          placeholder="작성자"
          value={postInfo.author}
          onChange={(e) => {
            setPostInfo((prev) => ({ ...prev, author: e.target.value }));
          }}
        />
        <input
          className="content"
          placeholder="내용"
          value={postInfo.content}
          onChange={(e) => {
            setPostInfo((prev) => ({ ...prev, content: e.target.value }));
          }}
        />
        <button
          className="submitButton"
          onClick={() => {
            updatePost(postInfo);
          }}
        >
          완료
        </button>
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: 400px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;

  > input {
    background: 0;
    border: 0;
    outline: none;
    width: 80vw;
    max-width: 400px;
    font-size: 1.5em;
    transition: padding 0.3s 0.2s ease;

    &:focus {
      padding-bottom: 5px;
    }
  }
  > .submitButton {
    width: 200px;
    align-items: center;
    background-color: initial;
    background-image: linear-gradient(#464d55, #25292e);
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

  > .submitButton:hover {
    box-shadow: rgba(0, 1, 0, 0.2) 0 2px 8px;
    opacity: 0.85;
  }

  > .submitButton:active {
    outline: 0;
  }

  > .submitButton:focus {
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 3px;
  }

  @media (max-width: 420px) {
    .submitButton {
      height: 48px;
    }
  }
`;
export default UpdatePage;

type Props = {
  query: { id: number };
};

export async function getServerSideProps({ query: { id } }: Props) {
  const { data } = await customAxios.get(`post/${id}`);

  return {
    props: { currentPostInfo: data }, // will be passed to the page component as props
  };
}
