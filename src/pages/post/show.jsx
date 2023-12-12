import { useEffect, useState } from "react";
import { Link,useNavigate, useNavigation, useParams, useSearchParams } from "react-router-dom";


export default function Show(){
    const{ slug } = useParams();
    const [post,setPost]= useState({});
    

    const [searchParams, setSearchParams] = useSearchParams();
    async function fetchPostsData(){
        setPost(await (await (fetch(`http://localhost:3000/posts/${slug}`))).json());
    }

    useEffect( ()=>{
      fetchPostsData();
    },[])

    return(
        <div className="container mx-auto py-8">
                <h1 className="font-bold uppercase">{post?.title}</h1>
                <img src="#" alt={post.image} />
                <p>{post.content}</p>
                <strong>{post?.category?.name}</strong>

               
                <Link className="font-medium text-blue-600 hover:underline dark:text-primary-500" to="/" > Torna alla home </Link>
                

                 
        </div>
        
    );
}