import Header from "../components/Header";
import Footer from "../components/Footer";


import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);


  useEffect(() => {
    // Effettua una richiesta GET al backend per ottenere i post
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts/');
        if (!response.ok) {
          throw new Error('Errore nella risposta del server');
        }
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Errore nella richiesta al backend:', error);
      }
    };

    // Effettua una richiesta GET al backend per ottenere le categorie
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/categories/');
        if (!response.ok) {
          throw new Error('Errore nella risposta del server');
        }
        const data = await response.json();
        setCategories(data);  // Assumi che l'array delle categorie sia direttamente nel corpo della risposta
      } catch (error) {
        console.error('Errore nella richiesta al backend:', error);
      }
    };

     // Effettua una richiesta GET al backend per ottenere i tags
     const fetchTags = async () => {
      try {
        const response = await fetch('http://localhost:3000/tags/');
        if (!response.ok) {
          throw new Error('Errore nella risposta del server');
        }
        const data = await response.json();
        setTags(data);  // Assumi che l'array delle categorie sia direttamente nel corpo della risposta
      } catch (error) {
        console.error('Errore nella richiesta al backend:', error);
      }
    };
    // Chiamate alle funzioni di fetch
    fetchPosts();
    fetchCategories();
    fetchTags();
  }, []);  // [] assicura che useEffect venga eseguito solo al montaggio

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">I miei posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl text-black font-bold mb-2 uppercase">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.content}</p>
            {categories.length > 0 && (
              <p className="text-blue-500">
                Categoria: {(() => {
                  const category = categories.find(category => category.id === post.categoryId);
                  return category ? category.name : 'Nessuna categoria';
                })()}
              </p>
            )}
            {/* tags */}
            {tags.length > 0 && (
              <p className="text-blue-500">
                {post.tags
                  .filter(postTag => tags.some(tag => tag.id === postTag.id))
                  .map(postTag => 
                    <span>#{postTag.name} </span>)
                }
              </p>
            )}
            <div className="flex justify-end ">
            <Link to={`/posts/${post.slug}`} className=' bg-blue-500 hover:bg-blue-800 px-4 py-2 rounded-lg text-white transition-colors'>
            view more
            </Link> 
            </div>
               
           
          </div>
               
        ))}
         
      </div>
    </div>
  );
}

export default Blog;
