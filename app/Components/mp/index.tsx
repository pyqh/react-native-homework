import React, {useEffect} from 'react';
import {View, Button, ToastAndroid} from 'react-native';
import TrackPlayer from 'react-native-track-player';

// Set up the player
//
// const setup = async () => {
//   await TrackPlayer.setupPlayer();
// };

// Add a track to the queue

//https://ia600302.us.archive.org/7/items/MerryChristmasMrLawrence_177/MerryChristmasMr_lawrence-originalVersion.mp3
// Start playing it

const App = () => {
  // useEffect(() => {
  //   setup();
  // }, []);
  // useEffect(() => {
  //   TrackPlayer.add({
  //     id: '1',
  //     url: 'https://ia600302.us.archive.org/7/items/MerryChristmasMrLawrence_177/MerryChristmasMr_lawrence-originalVersion.mp3',
  //     title: 'Track Title',
  //     artist: 'Track Artist',
  //   });
  // }, []);

  const handlePlay = async () => {
    await TrackPlayer.play();
    ToastAndroid.show('Audio Playing', ToastAndroid.SHORT);
  };

  const handlePause = async () => {
    await TrackPlayer.pause();
    ToastAndroid.show('Audio Paused', ToastAndroid.SHORT);
  };

  const handleStop = async () => {
    await TrackPlayer.stop();
    ToastAndroid.show('Audio Stopped', ToastAndroid.SHORT);
  };

  return (
    <View>
      <Button title="Play" onPress={handlePlay} />
      <Button title="Pause" onPress={handlePause} />
      <Button title="Stop" onPress={handleStop} />
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </View>
  );
};

export default App;
