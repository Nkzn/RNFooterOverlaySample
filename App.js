// @flow
import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

type State = {
  footerWidth: number;
}

export default class App extends React.Component<any, State> {

  state: State = {
    footerWidth: 0
  };

  onContentLayout(layout: { width: number }) {
    this.setState({ footerWidth: layout.width });
  }

  render() {

    const footerStyle = {
      ...StyleSheet.flatten(styles.footerOverlay),
      width: this.state.footerWidth
    };

    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View
          style={styles.content}
          onLayout={ event => this.onContentLayout(event.nativeEvent.layout) }>
          <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContentContainer}>
            <View>
              { [1,2,3,4,5,6,7,8,9,10,11,12].map(n => <Text key={`${n}`} style={{ fontSize: 60 }}>{n}月</Text>) }
            </View>
          </ScrollView>
          <View style={footerStyle}>
            <Button title="Close" color="#FFF" onPress={() => {}} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
  },
  header: {
    height: 96,
    backgroundColor: "#00FF00",
  },
  content: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: "#FF0000",
    opacity: 0.5
  },
  scrollContentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 104, // フッター分を底上げ
  },
  footerOverlay: {
    flex: 1,
    height: 96,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#0000FF",
    opacity: 0.5,
    justifyContent: "center",
  }
});
