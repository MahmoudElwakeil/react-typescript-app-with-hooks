import { PostViewModel } from "../models/post-view-mode"
import Axios from 'axios';

export default class PostsService {
    constructor() {
    }

    posts: PostViewModel[] = [];

    getPosts() {
        /*
        Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        });
        */
    }

}