import { Route, Routes } from 'react-router-dom';
import Blogs from '../pages/Blogs';
import SingleBlog from '../pages/SingleBlog';

const routes = () => {
  return (
    <Routes>
      <Route path="/" root element={<Blogs />} />
      <Route path="/blogs/:id" element={<SingleBlog />} />
    </Routes>
  );
};

export default routes;
