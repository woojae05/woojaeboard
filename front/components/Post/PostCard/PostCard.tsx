import React from "react";
import { PostInfo } from "../../../interface/postDetail";
import styled from "styled-components";
import { convertTime } from "../../../util/convertTime";

interface PostCardProps {
  postInfo: PostInfo;
}
const PostCard = ({ postInfo }: PostCardProps) => {
  const { title, author, createdTime, views } = postInfo;
  const convertedTime: Date = convertTime(createdTime);
  return (
    <Container>
      <h1 className="title">{title}</h1>
      <p className="author">글 쓴이: {author}</p>
      <p className="createdTime">
        제작:{" "}
        {`${convertedTime.getFullYear()}년 ${
          convertedTime.getMonth() + 1
        }월 ${convertedTime.getDate()}일`}
      </p>
      <p className="views">조회수: {views}</p>
    </Container>
  );
};

export default PostCard;

const Container = styled.div`
  position: relative;
  padding-left: 20px;
  border-radius: 16px;
  border: 2px solid #8a8a8a;
  width: 750px;
  height: 150px;
  margin-bottom: 20px;
  > .views {
    position: absolute;
    bottom: 0px;
    right: 60px;
  }
`;
