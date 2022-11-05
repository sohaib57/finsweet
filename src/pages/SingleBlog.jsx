import { Stack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SingleBlogDetails from '../components/SingleBlogDetails';
import { addViewCount } from '../redux/blogs/BlogSlice';

const SingleBlog = () => {
  
  const dispatch = useDispatch();
  const location = useLocation();

  if (location.state !== undefined) {
    dispatch(addViewCount(1));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Stack width={'100%'} height={'100%'}>
      <SingleBlogDetails data={location.state} />
    </Stack>
  );
};

export default SingleBlog;
