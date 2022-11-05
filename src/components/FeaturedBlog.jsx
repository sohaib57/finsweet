import { Stack, Text, Image, Heading } from '@chakra-ui/react';
import frontlightcar from '../assets/images/frontlightcar.png';
import arrow from '../assets/images/arrow.png';

const FeaturedBlog = () => {
  return (
    <Stack
      height={'500px'}
      width="100%"
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={'#F5F5F5'}
      margin={'0px !important'}
    >
      <Stack
        width={'78%'}
        height={'380px'}
        backgroundColor={'white'}
        alignContent={'center'}
        p={'8'}
      >
        <Stack height={'100%'} direction="row">
          <Stack width={'30%'} height={'full'}>
            <Image src={frontlightcar} width={'100%'} height={'100%'} />
          </Stack>
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
              <Stack
                justifyContent={'space-between'}
                direction={'row'}
                width={'100%'}
              >
                <Stack fontSize={'14px'} direction={'row'} color={' #939191'}>
                  <Text>Posted on October 6th 2021</Text>
                  <Text>563 views</Text>
                </Stack>
                <Stack>
                  <Text fontSize={'14px'} fontWeight={200} color={'#FF6433'}>
                    FEATURED
                  </Text>
                </Stack>
              </Stack>

              <Stack>
                <Heading fontWeight={700}>
                  Should I Buy a New Car or Lease a New Car in 2021?
                </Heading>
              </Stack>

              <Text color={'#232536'} fontSize={'14px'}>
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter the cause. This includes, We
                provide a full range of front end mechanical.
              </Text>

              <Stack direction={'row'} alignItems={'baseline'}>
                <Text fontWeight={700} fontSize={'14px'}>
                  Read more
                </Text>
                <Image width={'50px'} height="10px" src={arrow} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FeaturedBlog;
