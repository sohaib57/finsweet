import React from 'react';
import { Stack, Heading, Text, Image } from '@chakra-ui/react';
import blogheader from '../assets/images/blogheader.png';

const SingleBlogDetails = ({ data }) => {
  const blogDetails = data;

  if (!blogDetails) {
    return <div>Loading....</div>;
  }

  return (
    <Stack
      height={'100%'}
      width="100%"
      justifyContent={'center'}
      alignItems={'center'}
      margin={'0px !important'}
    >
      <Stack width={'78%'} backgroundColor={'white'} alignContent={'center'}>
        <Stack
          p={'8'}
          height={'100%'}
          direction="row"
          justifyContent={'center'}
        >
          <Stack
            direction={'row'}
            width={'70%'}
            marginInlineStart={'0px !important'}
          >
            <Stack
              direction={'column'}
              justifyContent={'space-between'}
              width="100%"
              px={'3'}
            >
              <Stack fontSize={'14px'} direction={'row'} color={' #939191'}>
                <Text>Posted on October 6th 2021</Text>
                <Text>563 views</Text>
              </Stack>

              <Stack>
                <Heading fontWeight={700} fontFamily={'Manrope !important'}>
                  {blogDetails.Title}
                </Heading>
              </Stack>

              <Text color={'#232536'} fontSize={'14px'}>
                {blogDetails.Subtitle}
              </Text>
            </Stack>
          </Stack>
        </Stack>

        <Stack marginTop={'10px'}>
          <Image src={blogDetails.Image} />
        </Stack>

        <Stack
          p={'8'}
          height={'100%'}
          direction="row"
          justifyContent={'center'}
        >
          <Stack
            direction={'row'}
            width={'70%'}
            marginInlineStart={'0px !important'}
          >
            <Stack direction={'column'} width="100%" px={'3'}>
              <Stack>
                <Heading fontWeight={700} fontFamily={'Manrope !important'}>
                  {blogDetails.Title}
                </Heading>
              </Stack>

              <Text color={'#232536'} fontSize={'14px'}>
                {blogDetails.Subtitle}
              </Text>
              <Text color={'#232536'} fontSize={'14px'}>
                {blogDetails.Article}
              </Text>
              <Stack marginTop={'10px'}>
                <Image src={blogDetails.Image} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SingleBlogDetails;
