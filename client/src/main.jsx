import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route  } from 'react-router';
import './index.css';
import AllBlogs from './views/AllBlogs';
import NewBlog from './views/NewBlog';
import EditBlog from './views/EditBlog';
import ReadBlogs from './views/ReadBlogs';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllBlogs />} />
      <Route path="/new" element={<NewBlog />} />
      <Route path="/edit/:id" element={<EditBlog />} />
      <Route path="/blog/:slug" element={<ReadBlogs />} />
      <Route path="*" element={<div className="text-center mt-5"> 404 Not Found<h1></h1></div>} />
    </Routes>
  </BrowserRouter>
)
