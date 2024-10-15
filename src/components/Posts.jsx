import { useEffect, useState } from "react";
import { ACTIONS } from "../redux/slice/posts/types";
import { useDispatch } from 'react-redux';
import { thunks } from '../redux/slice/posts/thunks';
import Post from "./Post";

function Posts() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsInformation();
    }, []);

    const getPostsInformation = async () => {
        try {
            const response = await dispatch(thunks[ACTIONS.FETCH_POSTS]());

            const limitedPosts = response.payload.slice(0, 15);
            setPosts(limitedPosts);
        } catch (error) {
            console.error("Error obteniendo los posts:", error);
        }
    };

    return (
        <div>
            <h1>Publicaciones</h1>
            {posts.map((post) => (
    <Post key={post.id} postInformation={post} />
))}

        </div>
    );
}

export default Posts;
