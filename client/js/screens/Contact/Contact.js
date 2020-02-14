import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const Contact = props => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={styles.infoListItem}>
          <Text style={styles.heading}>Contact Us</Text>
        </View>
        <View style={styles.infoListItem}>
          <Image
            style={styles.image}
            source={require('../../assets/signinicons/EmailIcon.png')}
          />
          <Text style={styles.text}>info@adbusters.org</Text>
        </View>
        <View style={styles.infoListItem}>
          <Image
            style={styles.image}
            source={require('../../assets/miscicons/phoneicon.png')}
          />
          <Text style={styles.text}>+1-800-663-1243</Text>
        </View>
        <View style={styles.infoListItem}>
          <Image
            style={styles.image}
            source={require('../../assets/miscicons/homeaddress.png')}
          />
          <Text style={styles.text}>00 West 7th Av. Vancouver, BC</Text>
        </View>
      </View>
    </View>
  );
};

export default Contact;
