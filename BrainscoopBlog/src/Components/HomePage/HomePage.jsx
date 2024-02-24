import { useEffect, useState } from 'react'
import style from './HomePage.module.css'
import SinglePost from './SinglePost'

let globalId = 0;
function HomePage({fetchServer})
{
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch(`${fetchServer}/allPosts`)
        .then(response =>{
            response.json()
            .then((jsonResponse) =>{

                setPosts(jsonResponse.result.reverse())
                console.log(posts)
            })
        })
    },[])
    return <div className={style.container}>
        {posts.map(element =>{
        return <SinglePost key={globalId++} className={style.singlePost} title={element.title} author={element.author} content={element.content} />
        })}
    </div>
}

export default HomePage