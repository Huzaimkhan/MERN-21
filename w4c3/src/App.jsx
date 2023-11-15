import axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const [post, setpost ]=useState([])
async function fetchposts(){
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((result) => setpost(result.data));
}
  return (
  <>
    <div>
      posts
      <button className='bg-slate-600 p-3'onClick={fetchposts}>
        Get all the posts
      </button>
      {
        post.map((post) => {
          return (
            JSON.stringify(post)
          )
        })    
      }
    </div>
  
  </>
  )
}

export default App
