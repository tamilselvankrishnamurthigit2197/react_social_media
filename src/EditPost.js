import { Link, useParams } from "react-router-dom"
import { useContext, useEffect } from "react";
import DataContext from "./context/DataContext";

const EditPost = () =>{
  const {posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle} = useContext(DataContext)
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id);

  //useeffect not a compulsory, 
  useEffect(()=>{
    if(post) {
        setEditTitle(post.title);
        setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody])

  return (
        <main className="NewPost">
                {editTitle && 
                <>
                    <h2> Edit Post</h2>
      <form className="newPostForm" onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="editTitle">Title:</label>
        <input 
          id="editTitle"
          type="text"
          required
          value={editTitle}
          onChange={(e)=> setEditTitle(e.target.value)} />
          <label htmlFor="editBody"> Post:</label>
          <input
            id="editBody"
            type="text"
            required
            value={editBody}
            onChange={(e)=> setEditBody(e.target.value)} />
            <button type="submit" onClick={()=> handleEdit(post.id)}>Submit</button>
      </form>

                </>}
                {!editTitle && 
                <>
                    <h2> Post not found</h2>
                    <p>
                        <Link to='/'> Visit Our Home Page</Link>
                    </p>
                </>}
        </main>
  )
}
export default EditPost