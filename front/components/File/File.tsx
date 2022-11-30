import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
const File = () => {
  const [contentImage, setContentImage] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  useEffect(() => {
    console.log(contentImage);
  }, [contentImage]);

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // e.stopPropagation();
    setIsDragging(true);
  };
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      setIsDragging(true);
    }
  };
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    setContentImage(e.dataTransfer.files[0]);
    setIsDragging(false);
  };
  return (
    <Container>
      <input
        id="fileButton"
        type={"file"}
        onChange={(e) => {
          console.log(e.target.files?.item);
          setContentImage(e.target.files![0]);
        }}
      ></input>
      <FileBox
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        isDragging={isDragging}
        onClick={(e) => {
          e.stopPropagation();
          console.log("hi");
        }}
      >
        {contentImage && (
          <Image
            id="previewImg"
            src={window.URL.createObjectURL(contentImage)}
            alt=""
            width={100}
            height={100}
          />
        )}
        <label htmlFor="fileButton" id="button">
          파일 업로드
        </label>
      </FileBox>
    </Container>
  );
};

export default File;

const Container = styled.div`
  position: relative;
  > #fileButton {
    display: none;
  }
`;

const FileBox = styled.div<{ isDragging: boolean }>`
  position: relative;
  padding: 40px;
  width: 500px;
  height: 350px;
  border: 3px dashed ${({ isDragging }) => (isDragging ? "#2f80ed" : "gray")};
  border-radius: 16px;
  > #previewImg {
    /* position: absolute; */
    /* top: 20px; */
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  > #button {
    /* position: absolute; */
    appearance: none;
    backface-visibility: hidden;
    background-color: #2f80ed;
    border-radius: 10px;
    border-style: none;
    box-shadow: none;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
      sans-serif;
    font-size: 15px;
    font-weight: 500;
    height: 50px;
    letter-spacing: normal;
    line-height: 1.5;
    outline: none;
    overflow: hidden;
    padding: 14px 30px;
    position: absolute;
    text-align: center;
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
    bottom: 20px;
    right: 180px;
    margin: 0 auto;

    :hover {
      background-color: #1366d6;
      box-shadow: rgba(0, 0, 0, 0.05) 0 5px 30px, rgba(0, 0, 0, 0.05) 0 1px 4px;
      opacity: 1;
      transform: translateY(0);
      transition-duration: 0.35s;
    }

    :hover:after {
      opacity: 0.5;
    }

    :active {
      box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px 0, rgba(0, 0, 0, 0.1) 0 0 10px 0,
        rgba(0, 0, 0, 0.1) 0 1px 4px -1px;
      transform: translateY(2px);
      transition-duration: 0.35s;
    }

    :active:after {
      opacity: 1;
    }

    @media (min-width: 768px) {
      .button-65 {
        padding: 14px 22px;
        width: 176px;
      }
    }
  }
`;
