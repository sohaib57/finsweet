import React from 'react';
import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import BlogCard from './BlogCard';
import { useSelector } from 'react-redux';

const BlogPosts = () => {
  const { blogs, isLoading } = useSelector(state => state.blog);

  if (isLoading) {
    return (
      <Stack  textAlign={'center'} >
        <Heading>Loading......</Heading>
      </Stack>
    );
  }

  return (
    <Stack width={'100%'} py={'100px'} px={'150px'} justifyContent={'center'}>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <BlogCard blogs={blogs} />
      </SimpleGrid>
    </Stack>
  );
};

export default BlogPosts;
