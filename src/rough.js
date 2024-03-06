
      {/* 
      //use it for route methods
      <nav>
        <ul>
          <li> <Link to="/"> Home</Link></li>
          <li> <Link to="/about"> About</Link></li>
          <li> <Link to="/postpage"> PostPage</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newpost" element={<NewPost />} />
        
        <Route path="/postpage" element={<PostLayout />}>
          <Route index element={<PostPage />} />

          <Route path=":id" element={<Post />} />
          <Route path="newpost" element={<NewPost />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
 */}


 /* const [posts, setPosts] = useState([
  {
    id: 1,
    title: "1000 Porkaasugal",
    date: "22 dec 2023",
    body: "Tamil cinema released starring Vemal, saravanan"
  },
  {
    id: 2,
    title: "Manjummel Boys",
    date: "21 feb 2024",
    body: "Malayalam cinema released starring Shoubin, kamal and collected 50crs"
  },

  {
    id: 3,
    title: "premalu",
    date: "16 feb 2024",
    body: "Malayalam cinema released starring naslen, mamitha and collected 70crs+"
  },
  
  {
    id: 4,
    title: "Brahmayugam",
    date: "17 feb 2024",
    body: "Malayalam cinema released starring mammotty panaparambil in black-white format and collected 55crs"
  }

])

const[search, setSearch] = useState('')
const[searchResults, setSearchResults] = useState([])
const [postTitle, setPostTitle] = useState('')
const [postBody, setPostBody] = useState('')

const filteredResults = posts.filter((post) =>
((post.body).toLowerCase()).includes(search.toLowerCase())
  || ((post.title).toLowerCase()).includes(search.toLowerCase())
  );

const handlesubmit = (e) =>{
  e.preventDefault();
  const id = posts.length ? posts[posts.length -1].id + 1 : 1;
  const datetime = format(new Date(), 'MMM dd, yyyy pp');
  const newPost = { id, title: postTitle, datetime, body: postBody };
  const allPosts = [...posts, newPost];
  setPosts(allPosts);
  setPostTitle('');
  setPostBody('');
  //navigate('/');

 */