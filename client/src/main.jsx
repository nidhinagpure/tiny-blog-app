import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route  } from 'react-router';
import './index.css';
import AllBlogs from './views/AllBlogs';
import NewBlog from './views/NewBlog';
import EditBlog from './views/EditBlog';
import ReadBlog from './views/ReadBlog';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllBlogs />} />
      <Route path="/new" element={<NewBlog />} />
      <Route path="/edit/:id" element={<EditBlog />} />
      <Route path="/blog/:slug" element={<ReadBlog />} />
      <Route path="*" element={<h1 className="text-center mt-5"> 404 Not Found<h1></h1></h1>} />
    </Routes>
  </BrowserRouter>
)
