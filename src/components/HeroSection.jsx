import { Heading, Stack, Text, VStack } from '@chakra-ui/react';
import blogheader from '../assets/images/blogheader.png';

const HeroSection = () => {
  return (
    <Stack flexDirection={'row'} width={'100%'} height="100vh">
      <Stack
        width={'50%'}
        height="full"
        margin={'0px'}
        backdropFilter="auto"
        backdropBlur="20px"
        style={{
          backgroundColor: 'black',
          opacity: 0.8,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${blogheader})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Manrope',
            color: 'white',
          }}
        >
          <Heading fontWeight={700} fontSize={'50px'}>
            Our Blog
          </Heading>
        </div>
      </Stack>

      <Stack
        margin={'0px !important'}
        width={'50%'}
        height="full"
        backgroundColor={'#1E1B1B'}
        opacity={0.99}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Stack
          direction={'column'}
          color={'#FFFFFF'}
          pl={'40px'}
          maxWidth={'580px'}
        >
          <Heading fontWeight={600} lineHeight={'47px'}>
            Diagnose Car Problems If You Don’t Know Much About Cars
          </Heading>
          <Text fontWeight={200} lineHeight={'31.5px'}>
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
