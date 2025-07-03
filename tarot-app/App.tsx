import React from 'react';
import { SafeAreaView } from 'react-native';
import CardLibrary from './screens/CardLibrary';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CardLibrary />
    </SafeAreaView>
  );
}
