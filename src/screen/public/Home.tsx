import React from 'react';
import { ScrollView, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Box, HStack, VStack, Button, Avatar, Image, Text} from 'native-base';
import {image} from '../../assets';
import {Stacktrace} from '../../routes/public/PublicRoutes';
import {StackNavigationProp} from '@react-navigation/stack';
import {WORK} from '../../constant/workshop';
import {DATA} from '../../constant';
import{PODCAST} from '../../constant/Podcast';
import{Search} from '../../styles/index'
const Home = () => {
  const {navigate} = useNavigation<StackNavigationProp<Stacktrace>>();

  return (
          // Header
    <Box flex={1} bgColor={'white'}>
      <Box
        bgColor={'green.600'}
        height={'30%'}
        width={'99%'}
        roundedBottomLeft={100}>
        <HStack justifyContent={'space-between'}>
          <Image
            h={30}
            w={30}
            ml={5}
            mt={2}
            tintColor={'#D6D6D6'}
            source={image.Menu}
          />

          {/* <Search/> */}
          <Image
            h={30}
            w={30}
            mr={3}
            mt={2}
            tintColor={'#D6D6D6'}
            source={image.Glass}
          />
        </HStack>
        <HStack>
          <HStack  mx={9}  my={9}>
            <Avatar
              bg="purple.600"
              size="xl"
              source={{
                uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}>
              RB
            </Avatar>
            <VStack space={1} px={3}>
              <Text fontSize="3xl" bold  color={'#fff'}>
                Juliana Martins
              </Text>
              <Text fontSize="md" bold color={'#fff'}>
                JulionaMartins@gmail.com
              </Text>
              <Box>
                <VStack space={2}>
                  {['lg'].map(size => (
                    <Button width={20} height={10} bgColor={'#65a765'}>
                      follow
                    </Button>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </HStack>
        </HStack>
      </Box>
      <ScrollView>


      
        <Text
          fontSize="4xl"
          bold
          color={'#000'}
          ml={5}>
          The library
        </Text>

        {/* The library */}

        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          horizontal={true}
          renderItem={({item}) => (
            <Box>
              <Box
                // marginY={10}
                my={'2'}
                bgColor={'green.600'}
                height={'200px'}
                width={'150px'}
                rounded={30}
                m={2}
                >
                <Image
                  height={'100%'}
                  width={'100%'}
                  rounded={20}
                  alt='book'
                  source={{uri: item.imageUrl}}
                />
              </Box>
              <Text
                onPress={() => navigate('Drive')}
                fontSize="md"
                bold
                m={1}
                ml={5}>
                {item.title}
              </Text>
            </Box>
          )}
        />

        <Text
          fontSize="4xl"
          bold
          color={'#000'}
          ml={5}        
         >
          Workshops
        </Text>
              {/* Workshops */}
        <FlatList
          data={WORK}
          keyExtractor={item => item.id}
          horizontal={true}
          renderItem={({item}) => (
            <Box>
              <HStack>
                <Box
                  bgColor={'green.600'}
                  height={'120px'}
                  width={'120px'}
                  rounded={20}>
                  <Image
                    height={'100%'}
                    width={'100%'}
                    rounded={20}
                    alt='workshop'
                    source={{uri: item.imageUrl}}
                  />
                </Box>
                <Text
                  fontSize="md"
                  bold
                  ml={2}
                  width={270}>
                  {item.title}
                </Text>
              </HStack>
            </Box>
          )}
        />

      

        <Text
          fontSize="4xl"
          fontWeight={'bold'}
          color={'#000'}
          marginLeft={'20px'}>
          Podcast
        </Text>

        <FlatList
          data={PODCAST}
          keyExtractor={item => item.id}
          horizontal= {true}
          renderItem={({item}) =>(
            <Box>
              <Box
              marginX={5}
              bgColor={'green.600'}
              height={70}
              width={70}
              rounded={110}>
              <Image size={70} borderRadius={50} alt='podcast' source={{uri:item.imageUrl}} />
            </Box>

            </Box>
          )}
        />
      </ScrollView>
    </Box>
  );
};

export default Home;
