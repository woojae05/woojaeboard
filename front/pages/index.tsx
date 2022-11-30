import { NextPage, GetServerSideProps } from "next";
import { PostInfo } from "../interface/postDetail";
import React from "react";
import { customAxios } from "../lib/customAxios";
import PostCard from "../components/Post/PostCard/PostCard";
import styled from "styled-components";
import Link from "next/link";

interface HomeProps {
  postList: PostInfo[];
}

const Home: NextPage<HomeProps> = ({ postList }) => {
  console.log(postList);

  return (
    <div className="pageContainer">
      <div>
        {postList.length != 0 ? (
          <>
            {postList.map((post) => (
              <Link href={`/post/${post.id}`} key={post.id}>
                <PostCard postInfo={post} />
              </Link>
            ))}
          </>
        ) : (
          <h1>게시물이 없습니다</h1>
        )}

        <Link href={"/post/register"}>
          <RegisterButton>글 쓰기</RegisterButton>
        </Link>
      </div>
    </div>
  );
};

export default Home;

const RegisterButton = styled.button`
  bottom: 50px;
  right: 80px;
  position: absolute;
  border-radius: 16px;
  font-weight: 700;
  font-size: 16px;
  width: 100px;
  height: 40px;
`;

export async function getServerSideProps() {
  const { data } = await customAxios.get("post/");

  return {
    props: { postList: data }, // will be passed to the page component as props
  };
}
