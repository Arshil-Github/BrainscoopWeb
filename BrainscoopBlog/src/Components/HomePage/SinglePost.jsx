import style from './SinglePost.module.css'

function SinglePost({title, author, content})
{
    return <div className={style.container}>
        <div className={style.title}>
            {title}
        </div>
        <div className={style.content}>
            {content}
        </div>
        <div className={style.author}>
            {author}
        </div>
    </div>
}

export default SinglePost