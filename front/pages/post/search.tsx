import React, { useEffect, useState } from "react";
import { customAxios } from "../../lib/customAxios";
import { useRouter } from "next/router";
import PostCard from "../../components/Post/PostCard/PostCard";
import { PostInfo } from "../../interface/postDetail";
import Link from "next/link";

const search = () => {
  const [postList, setPostList] = useState<PostInfo[]>([]);
  const router = useRouter();
  const { q } = router.query;
  useEffect(() => {
    customAxios.get(`/post/search?q=${q}`).then((res) => {
      const { data } = res;
      setPostList(data);
    });
  }, [q]);

  return (
    <div className="pageContainer">
      {postList.length === 0 ? (
        <p>게시물이 없습니다</p>
      ) : (
        postList.map((post) => {
          return (
            <Link href={`/post/${post.id}`} key={post.id}>
              <PostCard postInfo={post} />;
            </Link>
          );
        })
      )}
    </div>
  );
};
export default search;

// export async function getServerSideProps() {
//   //   const { data } = await customAxios.get("");
//   return {
//     // props: { postList: data }, // will be passed to the page component as props
//   };
// }
