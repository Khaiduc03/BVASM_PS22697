import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar} from './src';

function HomeScreen({navigation}: any) {
  return (
    <View
      style={{
        flex: 1,

        paddingTop: 20,
        backgroundColor: '#FFF',
        paddingHorizontal: 24,
      }}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Avatar></Avatar>
      </View>
      <Text style={{color: '#2E2E5D', fontSize: 20}}>Register</Text>
      <TextInput
        style={{
          width: '100%',
          height: 48,
          borderRadius: 10,
          borderColor: '#F5F5FA',
          backgroundColor: '#F5F5FA',
          marginVertical: 20,
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
        placeholder="Email"></TextInput>
      <TextInput
        style={{
          width: '100%',
          height: 48,
          borderRadius: 10,
          borderColor: '#F5F5FA',
          backgroundColor: '#F5F5FA',
          marginVertical: 20,
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
        placeholder="Password"></TextInput>
      <TextInput
        style={{
          width: '100%',
          height: 48,
          borderRadius: 10,
          borderColor: '#F5F5FA',
          backgroundColor: '#F5F5FA',
          marginVertical: 20,
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
        placeholder="Date of Birth"></TextInput>
      <Text>
        By signing up, you agree to our{' '}
        <Text style={{color: 'red'}}>Terms, Data Policy</Text> and{' '}
        <Text style={{color: 'red'}}>Cookies Policy</Text>.
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#4838D1',
          width: '100%',
          height: 48,
          marginVertical: 20,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Details')}>
        <Text style={{color: '#fff'}}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#fff4',
          width: '100%',
          height: 48,
          marginVertical: 20,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 1,
        }}
        onPress={() => navigation.navigate('Details')}>
        <Text style={{color: '#4838D1'}}>cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen() {
  // Danh sách hình ảnh
  const imageList = [
    {
      id: '1',
      source:
        'https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg',
    },
    {
      id: '2',
      source:
        'https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg',
    },
    {
      id: '3',
      source:
        'https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg',
    },
    {
      id: '4',
      source:
        'https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg',
    },
    {
      id: '5',
      source:
        'https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg',
    },
    {
      id: '6',
      source:
        'https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg',
    },
  ];

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          marginHorizontal: 20,
          color: 'black',
          fontWeight: '500',
          marginTop: 20,
        }}>
        Recommended For You
      </Text>
      <FlatList
        data={imageList}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({item}) => (
          <Image
            source={{uri: item.source}}
            style={{width: 200, height: 300, margin: 10}}
          />
        )}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          options={{
            headerTitle: 'AudiBooks',
            headerTitleStyle: {
              color: '#4838D1',
            },
          }}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
