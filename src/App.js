import Header from './Header'
import Nav from './Nav'
import NewPost from './NewPost'
import Missing from './Missing'
import About from './About'
import EditPost from './EditPost'
import PostPage from './postPage'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'

import {DataProvider} from './context/DataContext';

const App = () => {

  return (
    <div className='App'>
      <DataProvider>
      <Header title="social media" />
      <Nav />
        <Routes>
          <Route path="/" element ={
            <Home />} />
          <Route path='post'>
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />
              } />
          </Route>
          <Route path="/edit/:id" element={<EditPost />
          } />
      
        <Route path='about' element ={<About />} />
        <Route path='*' element={<Missing />} />
        </Routes>
       <Footer />
       </DataProvider>
    </div>
  )
}

export default App