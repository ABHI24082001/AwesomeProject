import {TouchableOpacity} from 'react-native';
import React from 'react';
import {image} from '../../assets';
import {Box, HStack, VStack, Button, Icon, ScrollView , Image , Text , FlatList} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { Stacktrace } from '../../routes/public/PublicRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import{OTHERS} from '../../constant/Other'

const Drive = () => {
  
  const {goBack} = useNavigation<StackNavigationProp<Stacktrace>>();
  return (
    <Box flex={1} bgColor={'white'}>
      <Box>
        <HStack space={310}>
          <TouchableOpacity onPress={() => goBack('Home')}>
            <Image  
              h={30}
              w={30}
              alt='podcast'
              ml={5}
              mt={1}
              tintColor={'#454545'} 
              source={image.Back} />
          </TouchableOpacity>
          <Image  
              h={30}
              w={30}
              alt='podcast'
              ml={5}
              mt={1}
              tintColor={'#454545'} 
              source={image.SHARE} />
        </HStack>
        <ScrollView>
          <Box>
            <HStack>
              <Box
                bgColor={'green.600'}
                height={'200px'}
                width={'150px'}
                rounded={30}
                m={10}>
                <Image height={'100%'} width={'100%'}   alt='podcast' rounded={20} source={image.BookOne} />
              </Box>
              <Box>
                <VStack py={63}>
                  <Text fontSize={'3xl'} bold width={'70%'} >Mere Christianity</Text>
                  <Text fontSize={'md'} bold  width={'70%'}>British author C. S. Lewis.</Text>
                </VStack>
              </Box>
            </HStack>
            <Text fontSize="md" bold ml={5} width={'90%'} pb={5}>
              Mere Christianity is a Christian apologetical book by the British
              author C. S. Lewis. It was adapted from a series of BBC radio
              talks made between 1941 and 1944, originally published as three
              separate volumes: Broadcast Talks, Christian,and Beyond
              Personality.Read More....
            </Text>
          </Box>
          <HStack space={20}>
            <Box>
              <VStack space={3} pl={4}>
                {['lg'].map(size => (
                  <Button width={250} height={12} bgColor={'#79afbd'}>
                    Read More
                  </Button>
                ))}
              </VStack>
            </Box>
            <Button
              endIcon={
                <Icon as={Ionicons} name="cloud-download-outline" size="sm" />
              }></Button>
          </HStack>
      
           {/* Other library */}

          <Text 
          fontSize="4xl"
          bold
          color={'#000'}
          ml={'20px'}
         >Other library</Text>


         <FlatList
            data={OTHERS}
             keyExtractor={item => item.id}
              horizontal={true}
              renderItem={({item}) => (
                <Box>
                <Box
                my={3}
                bgColor={'green.600'}
                height={'210px'}
                width={'150px'}
                rounded={30}
                m={2}
                >
                <Image height={'100%'} width={'100%'} alt='podcast'  rounded={20} source={{uri: item.imageUrl}} />
              </Box>
              <VStack>
                <Text fontSize="md" bold ml={5} >{item.title}</Text>
              </VStack>

                </Box>
              )}         
         />
          </ScrollView>
      </Box>
    </Box>
  );
};

export default Drive;



