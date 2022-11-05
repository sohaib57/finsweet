import { Heading, Image, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blogs }) => {
  const navigate = useNavigate();

  const singleBlogHandler = async (e, id) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`
    );
    navigate(`blogs/${id}`, { state: data });
  };

  return (
    <>
      {blogs.map(blog => {
        return (
          <Stack
            key={blog.id}
            width={'100%'}
            height={'500'}
            whiteSpace={'pre-wrap'}
            overflow={'hidden'}
            cursor={'pointer'}
            onClick={e => singleBlogHandler(e, blog.id)}
          >
            <Stack direction={'column'} py={'2'} px="2">
              <Stack>
                <Image height={'250px'} src={blog.Image} />
              </Stack>

              <Stack
                justifyContent={'space-between'}
                direction={'row'}
                width={'100%'}
                color={' #939191'}
              >
                <Stack direction={'row'}>
                  <Text fontSize={'14px'}>Posted on October 6th 2021</Text>
                </Stack>
                <Stack>
                  <Text fontSize={'14px'}>563 views</Text>
                </Stack>
              </Stack>

              <Heading
                whiteSpace={''}
                fontWeight={600}
                fontSize={'26px'}
               
              >
                {blog.Title}
              </Heading>

              <Text color={'#232536'}  height={'200px'}>
                {blog.Article}
              </Text>
            </Stack>
          </Stack>
        );
      })}
    </>
  );
};

export default BlogCard;
