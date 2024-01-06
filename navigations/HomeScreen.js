import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import calculator from '../assets/Calculator.png';
// import water from '../assets/water.png';
// import step from '../assets/step.png';
// import mood from '../assets/mood.png';
// import journalIcon from '../assets/journalIcon.png';
// import userImage from '../assets/user.png';
// import menu from '../assets/Menu.png'

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToUploadTracker = () => {
    navigation.navigate('UploadTracker');
  };
  const goToRecordTracker = () => {
    navigation.navigate('RecordTracker');
  };
  const goToAudioAnalysis = () => {
    navigation.navigate('Audio Analysis');
  };
  const goToMore = () => {
    navigation.navigate('More');
  };

  // Get the current time
  const currentTime = new Date();
  const hour = currentTime.getHours();
  let greeting;
  // Determine the greeting based on the time
  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  const userName = 'Placeholder';

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentTime.toLocaleDateString(undefined, dateOptions);

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.accent}>
          {/* Icon */}
          <View style={styles.menuIconContainer}>
            <Image source={menu} style={styles.menuIcon} />
          </View>
          {/* Date and Greetings */}
          <View style={styles.dateGreetingsContainer}>
            <Text style={styles.date}>{formattedDate}</Text>
            <Text style={styles.greetings}>{greeting}, {userName}</Text>
          </View>
          {/* User Image */}
          <View style={styles.userImageContainer}>
            <Image source={userImage} style={styles.userImage} />
          </View>
        </View>
      </View>

      <View style={styles.fillOut}>
        <View style={styles.titleContainer}>
          <Image source={journalIcon} style={styles.journalIcon} />
          <Text style={styles.journalTitle}>Health Journal</Text>
        </View>

        <View style={styles.topContainers}>
          {/* Container 1: Scan Audio */}
          <Pressable style={styles.containerBox1} onPress={goToUploadTracker}>
            <Text style={styles.title}>Upload Tracker</Text>
            <Image source={calculator} style={styles.icon} />
          </Pressable>
          {/* Container 2: Upload Audio */}
          <Pressable style={styles.containerBox2} onPress={goToRecordTracker}>
            <Text style={styles.title}>Record Tracker</Text>
            <Image source={water} style={styles.icon} />
          </Pressable>
        </View>

        <View style={styles.bottomContainers}>
          {/* Container 3: Audio Analysis */}
          <Pressable style={styles.containerBox3} onPress={goToAudioAnalysis}>
            <Text style={styles.title}>Audio Analysis</Text>
            <Image source={step} style={styles.icon} />
          </Pressable>
          {/* Container 4: More */}
          <Pressable style={styles.containerBox4} onPress={goToMore}>
            <Text style={styles.title}>More</Text>
            <Image source={mood} style={styles.icon} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: '0%'
  },
  frame: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white', 
    paddingHorizontal: 10,
  },
  accent: {
    flex: 1,
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: '70%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#0B3954', 
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  menuIconContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
  dateGreetingsContainer: {
    alignItems: 'flex-start',
    flex: 1,
    marginHorizontal: 10,
    marginTop: 40,
  },
  date: {
    color: 'white',
    fontSize: 12,
  },
  greetings: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userImageContainer: {
    alignItems: 'flex-end',
    bottom: '55%',
  },
  userImage: {
    width: 70,
    height: 70,
  },
  fillOut: {
    flex: 1,
    position: 'absolute', 
    top: '20%', 
    bottom: '10%',
    left: '7%',
    right: '7%',
    elevation: 5,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  containerBox1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CDEDFD',
    borderRadius: 20,
    marginBottom: 20,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    elevation: 5,
  },
  containerBox2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B6DCFE',
    borderRadius: 20,
    marginBottom: 20,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 5,
    
  },
  containerBox3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A9F8FB',
    borderRadius: 20,
    marginBottom: 20,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    elevation: 5,
  },
  containerBox4: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22FFEF',
    borderRadius: 20,
    marginBottom: 20,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  journalIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  journalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  topContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },

});

export default HomeScreen;
