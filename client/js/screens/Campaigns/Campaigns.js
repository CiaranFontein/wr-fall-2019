import React from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  Linking,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native-gesture-handler';
import styles from './styles';
import deadTrees from '../../assets/Imagery/deadtrees.png';
import icebergMelt from '../../assets/Imagery/icebergmelt.png';
import iceCream from '../../assets/Imagery/icecream.png';
import imageGradient from '../../assets/buttons/buttonbackground.jpg';
import playButton from '../../assets/buttons/videoplayicon.png';

const Campaigns = ({navigation, campaignData}) => {
  console.log('Data:' + JSON.stringify(campaignData));
  console.log(campaignData[0]);
  console.log(campaignData[0].title);
  console.log('Testing');

  let campaignItems = [];
  for (let i = 0; i < campaignData.length; i++) {
    campaignItems.push(
      <TouchableOpacity key={i}>
        <View>
          <Image
            style={{width: 150, height: 150}}
            source={{uri: campaignData[0].image}}
          />
          <Text>{campaignData[i].title}</Text>
        </View>
      </TouchableOpacity>,
    );
  }

  return (
    <SafeAreaView>
      {/* Campaign Header Start */}
      <View style={{flexGrow: 1, justifyContent: 'space-around'}}>
        <View style={styles.campaignsHeader}>
          <Image
            style={styles.categoryImage}
            source={require('../../assets/category/Charity.png')}
          />

          <Image
            style={styles.xxxIcon}
            source={require('../../assets/artwork/xgroup.png')}
          />
        </View>
        {/* Campaign Header End */}

        <ScrollView horizontal={true}>
          <View style={styles.videoSection}>
            {/* divider */}
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.youtube.com/watch?v=oxhYaiSnlAo');
              }}
              style={styles.touchableContainer}>
              <ImageBackground source={iceCream} style={styles.categoryVideo}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                  }}>
                  <Image
                    source={playButton}
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginBottom: '15%',
                    }}
                  />
                </View>
              </ImageBackground>
            </TouchableOpacity>
            {/* End of divider */}
            {/* divider */}
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.youtube.com/watch?v=P3GagfbA2vo');
              }}
              style={styles.touchableContainer}>
              <ImageBackground
                source={icebergMelt}
                style={styles.categoryVideo}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                  }}>
                  <Image
                    source={playButton}
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginBottom: '15%',
                    }}
                  />
                </View>
              </ImageBackground>
            </TouchableOpacity>
            {/* End of divider */}
            {/* divider */}
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.youtube.com/watch?v=KAJsdgTPJpU');
              }}
              style={styles.touchableContainer}>
              <ImageBackground source={iceCream} style={styles.categoryVideo}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                  }}>
                  <Image
                    source={playButton}
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginBottom: '15%',
                    }}
                  />
                </View>
              </ImageBackground>
            </TouchableOpacity>
            {/* End of divider */}
          </View>
        </ScrollView>
        <View style={styles.border} />

        <FlatList
          style={styles.campaignSingle}
          data={campaignData}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.touchableContainer}>
              <Image
                style={styles.campaignSingleMainImage}
                source={{uri: item.image}}
              />

              <View>
                <Image style={styles.gradient} source={imageGradient} />
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text numberOfLines={1} style={styles.campaignSingleText}>
                    {item.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.email}
        />
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(Campaigns);
