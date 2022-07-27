import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import profileData from '../assets/data/profileData';
import blueking from '../assets/images/blueking.jpg';
import profilebackground from '../assets/images/profile-background.png';
import profilebackgroundfit from '../assets/images/profile-background_fit.png';

const height = Dimensions.get('window').height;

const Profile = ({navigation}) => {
  const item = profileData[0];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={profilebackgroundfit}
        style={styles.backgroundImage}>
        <View style={styles.topInfoWrapper}>
          <Image source={blueking} style={styles.profileImage} />
          <View style={styles.topInfoTextWrapper}>
            <Text style={styles.topInfoNameText}>{item.name}</Text>
            <Text style={styles.topInfoCountryText}>{item.country}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.ageTravelInfo}>
          <View style={styles.ageTravelItem}>
            <Text style={styles.ageTravelTitle}>Age</Text>
            <View style={styles.ageTravelTextWrapper}>
              <Text style={styles.ageTravelText}>{item.age}</Text>
            </View>
          </View>
          <View style={styles.ageTravelItem}>
            <Text style={styles.ageTravelTitle}>Travelled</Text>
            <View style={styles.ageTravelTextWrapper}>
              <Text style={styles.ageTravelText}>{item.travelCount}</Text>
              {/* alttaki text bir boşluk daha bırakabilmek için, daha iyi bir yöntem bulup güncelle */}
              <Text style={styles.travelSubText}> </Text>
              <Text style={styles.travelSubText}> times</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <ScrollView>
          <View style={styles.bioTextWrapper}>
            <Text style={styles.bioTitle}>Bio</Text>
            <Text style={styles.bioText}>{item.bio}</Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => {
            Alert.alert(
              'Succesful',
              'Friend request sent.',
              [{text: 'Done', style: 'default'}],
              {cancelable: true},
            );
          }}>
          <Text style={styles.buttonText}>Send Friend Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.5,
    // justifyContent: 'space-between',
  },
  topInfoWrapper: {
    alignItems: 'center',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 60,
    marginTop: 40,
  },
  topInfoTextWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  topInfoNameText: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.white,
  },
  topInfoCountryText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.white,
    marginTop: 5,
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    height: 120,
    marginTop: -90,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  ageTravelInfo: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ageTravelItem: {},
  ageTravelTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.darkGray,
  },
  ageTravelTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  ageTravelText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.orange,
    marginTop: 5,
  },
  travelSubText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.gray,
  },
  divider: {
    borderBottomColor: colors.darkGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 15,
    width: 370,
    marginHorizontal: 20,
  },
  bioTextWrapper: {
    marginTop: 15,
    marginHorizontal: 20,
  },
  bioTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  bioText: {
    marginTop: 10,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.darkGray,
  },
  buttonWrapper: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: colors.orange,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
});

export default Profile;
