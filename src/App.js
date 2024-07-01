
import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from './services/post';

function App() {
  // const responseInfo = useGetAllPostQuery()
  // const responseInfo = useGetPostByIdQuery(22)
  // const responseInfo = useGetPostByLimitQuery(6)
  // const [deletePost, responseInfo] = useDeletePostMutation()
  // console.log(deletePost)
  // const [createPost, responseInfo] = useCreatePostMutation()
  const [updatePost, responseInfo] = useUpdatePostMutation()


  // const newPost = {
  //   title: 'This is Nnew title',
  //   body: 'This is Nnew body',
  //   userID: 7,
  // }

  const updatePostData = {
    id: 13,
    title: 'This is update new title',
    body: 'This is update new body',
    userID: 7,
  }

  console.log("Response Info: ", responseInfo)
  console.log("Data: ", responseInfo.data)
  console.log("Success: ", responseInfo.isSuccess)

  if (responseInfo.isLoading) return <div>Loading...</div>
  if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>



  return (
    //get all data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get All Data)</h1>
    //   {
    //     responseInfo.data.map((post, i)=>
    //       <div key={i}>
    //         <h2>{post.id} {post.title}</h2>
    //         <p>{post.body}</p>
    //         <hr />
    //       </div>
    //     )
    //   }
    // </div>

    //get single data
    // <div className="App">
    //    <h1>Redux Toolkit - RTK Query (Get Single Data)</h1>
    //    <h2>{responseInfo.data.id} {responseInfo.data.title}</h2>
    //    <p>{responseInfo.data.body}</p>
    //  </div>

    //get limited data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get Limited Data)</h1>
    //   {
    //     responseInfo.data.map((post, i)=>
    //       <div key={i}>
    //         <h2>{post.id} {post.title}</h2>
    //         <p>{post.body}</p>
    //         <hr />
    //       </div>
    //     )
    //   }
    // </div>

    //delete data
    // <div className='App'>
    //    <h1>Redux Toolkit - RTK Query (Delete Data)</h1>
    //    <button onClick={()=>{deletePost(3)}}>Delete Post</button>

    // </div>

    //create post
    // <div className='App'>
    //    <h1>Redux Toolkit - RTK Query (Create Post)</h1>
    //    <button onClick={()=>{createPost(newPost)}}>Create Post</button>

    // </div>

    //update post
    <div className='App'>
       <h1>Redux Toolkit - RTK Query (Update Post)</h1>
       <button onClick={()=>{updatePost(updatePostData)}}>Update Post</button>

    </div>
  );
}

export default App;
