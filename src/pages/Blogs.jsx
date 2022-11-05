import { useEffect } from 'react';
import { Stack } from '@chakra-ui/react';
import BlogPosts from '../components/BlogPosts';
import FeaturedBlog from '../components/FeaturedBlog';
import HeroSection from '../components/HeroSection';
import { getBlogs } from '../redux/blogs/BlogSlice';
import { useDispatch } from 'react-redux';


const Blogs = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <Stack direction={'column'} width="100%">
      <HeroSection />
      <FeaturedBlog />
      <BlogPosts  />
    </Stack>
  );
};

export default Blogs;
