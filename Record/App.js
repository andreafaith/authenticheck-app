import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);

  async function startRecording() {
    try {
      //Permission Audio Recording
      const perm = await Audio.requestPermissionsAsync();
      if(perm.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        const { recording } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        setRecording(recording);
      }
    } catch (err) {}
  }

  //After recording it resets and saves the audio list
  async function stopRecording() {
    setRecording(undefined);

    await recording.stopAndUnloadAsync();
    let allRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    allRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });
    setRecordings(allRecordings);
  }

//Duration of the audio
  function getDurationFormatted(milliseconds) {
    const minutes = milliseconds / 1000 / 60 ;
    const seconds = Math.round((minutes - Math.floor(minutes)) * 60 );
    return seconds < 10 ? `${Math.floor(minutes)}: 0${seconds}` : `${Math.floor(minutes)}: ${seconds}`
  }

//Saved Audio Layout
  function getRecordingLines() {
    return recordings.map (( recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style = {styles.fill}>
            Recording #{index + 1} | {recordingLine.duration}
          </Text>
          <Button onPress= {() => recordingLine.sound.replayAsync()} title="Play"></Button>
        </View>
        
      );
    });
  }

  //Deletes the saved Audio once clear is pressed
  function clearRecordings() {
    setRecordings([])
  }

 return (
    <View style={styles.container}>

      <Text style={styles.title}>AuthentiCheck</Text>
      <Text style = {styles.record} onPress={recording ? stopRecording : startRecording}>{recording ? 'Stop Recording' : 'Start Recording'}</Text>

      {/* <Button title={recording ? 'Stop Recording' : 'Start Recording'} onPress={recording ? stopRecording : startRecording} /> */}
      <View style={styles.savedItems}>
      {getRecordingLines()}
      </View>
      
      <Text style = {styles.clear} onPress={clearRecordings}>Clear Recordings</Text>
    
      {/* <Button title={recordings.length > 0 ? 'Clear Recordings' : '' } onPress={clearRecordings} /> */}
      
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  bottom: '0%',
  paddingTop: '10%'
  },
title: {
  paddingLeft: 30,
  fontSize: 20,
  fontWeight: 'bold',
  color: '#0B3954',
 },
 row: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 10,
  marginRight: 40
 },
 fill: {
  flex: 1,
  margin: 15
 },
  record: {
  color: 'white',
  backgroundColor: '#0B3954',
  fontWeight: 'bold',
  paddingVertical: 10,
  paddingHorizontal: 30,
  borderRadius: 30,
  marginTop: 10,
  marginBottom: 10,
  alignItems: 'center'
 },
 clear: {
  color: 'white',
  backgroundColor: '#FF9700',
  fontWeight: 'bold',
  paddingVertical: 10,
  paddingHorizontal: 30,
  borderRadius: 30,
  marginTop: 10,
  alignItems: 'center'
 },
 savedItems: {
  backgroundColor: '#c0c0c0c0',
  borderRadius: 10,
 },
});