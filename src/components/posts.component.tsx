import React, { useEffect, useTransition } from "react";
import { PostViewModel } from "../models/post-view-mode";
import { AiTwotoneLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import axios from "../interceptors/axios-interceptors";

export default function Posts() {
  const [posts, setPosts] = React.useState<PostViewModel[]>([]);

  useEffect(() => {
    console.log("Use Effect runs ");
    /*
        axios({url: "ur/dasda/asdal", method: "get", headers: {"Authorization": "Bearer "}}).then(res => {
    
        })
    */
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data);
        } else {
          alert("Faild fetching posts status: " + response.status);
          setPosts([]);
        }
      })
      .catch((err) => {
        alert("Error while fetching posts " + err);
        setPosts([]);
      });
  }, []);

  function deletePost(id: number) {
    // let _posts = [...posts];
    // _posts = posts.filter((p) => p.id !== id);
    setPosts(posts.filter((p) => p.id !== id));
  }

  function toggleLikePost(id: number) {
    // populating array in state ==> must clone old array and manipulate this new one and set it back into state
    const newPosts = [...posts];
    const _post = newPosts.find((p) => p.id === id);
    if (_post) {
      _post.liked = !_post?.liked;
      setPosts(newPosts);
    }
  }

  return (
    <React.Fragment>
      <h4>Rendering {posts.length} posts</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((_post, index) => (
            <tr key={_post.id}>
              <td>{_post.id}</td>
              <td>{_post.userId}</td>
              <td>{_post.title}</td>
              <td>{_post.body}</td>
              <td>
                {_post.liked ? (
                  <AiTwotoneLike onClick={() => toggleLikePost(_post.id)} />
                ) : (
                  <BiLike onClick={() => toggleLikePost(_post.id)} />
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deletePost(_post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}
