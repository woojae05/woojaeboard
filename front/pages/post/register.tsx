import React from "react";
import styled from "styled-components";
import { customAxios } from "../../lib/customAxios";
import { useState } from "react";
import { PostInfo } from "../../interface/postDetail";
import PostForm from "../../components/Post/PostForm/PostForm";

const Register = () => {
  return (
    <div className="pageContainer">
      <PostForm />
    </div>
  );
};

export default Register;
