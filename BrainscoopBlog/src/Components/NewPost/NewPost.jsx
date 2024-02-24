import style from './NewPost.module.css'

function NewPost({postCallback})
{
    return <div className={style.container}>

        <input type="text" placeholder='Title' className={style.titleInput} id='titleInput'/>
        <br />
        <textarea name="hi" placeholder='Write the content here' className={style.blogContentInput} id='contentInput' cols="50" rows="30"></textarea>
        <br />

        <input type="text" placeholder='Author Name' id='authorInput' className={style.authorInput}/>
        <br />
        
        <button className={style.postButton} onClick={() =>{
            postData();
        }}>Create Post</button>


    </div>


    function postData(){
        let authorInput = document.getElementById("authorInput").value;
        let titleInput = document.getElementById("titleInput").value;
        let contentInput = document.getElementById("contentInput").value;

        let isEmpty = authorInput == "" || titleInput == "" || contentInput == "";

        if(isEmpty)
        {
            alert("Fill all the fields before submission")
        }
        else{

            postCallback({
                title: titleInput,
                author: authorInput,
                content: contentInput,
                time: new Date().getTime()
            });
        }
    }
}
export default NewPost