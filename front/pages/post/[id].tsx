import React from "react";
import PostDetail from "../../components/Post/PostDetail/PostDetail";
import { NextPage } from "next";
import { customAxios } from "../../lib/customAxios";
import { PostInfo } from "../../interface/postDetail";

interface PostDetailPagePros {
  postInfo: PostInfo;
}
const PostDetailPage: NextPage<PostDetailPagePros> = ({ postInfo }) => {
  return (
    <div className="pageContainer">
      <PostDetail data={postInfo}></PostDetail>
    </div>
  );
};

export default PostDetailPage;

type Props = {
  query: { id: number };
};
export async function getServerSideProps({ query: { id } }: Props) {
  const { data } = await customAxios.get(`post/${id}`);
  console.log(data);

  return {
    props: { postInfo: data }, // will be passed to the page component as props
  };
}
