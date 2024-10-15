import { useEffect, useState } from "react";
import { ACTIONS } from "../redux/slice/posts/types";
import { useDispatch } from 'react-redux';
import { thunks } from '../redux/slice/posts/thunks';
import Post from "./Post";

function Posts() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]); // Estado local para almacenar los posts

    // Llamada inicial para traer los posts
    useEffect(() => {
        getPostsInformation();
    }, []);

    const getPostsInformation = async () => {
        try {
            // Espera la respuesta del thunk
            const response = await dispatch(thunks[ACTIONS.FETCH_POSTS]());

            // Limitar a los primeros 15 posts
            const limitedPosts = response.payload.slice(0, 15);
            setPosts(limitedPosts); // Asignar solo los primeros 15 al estado
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
