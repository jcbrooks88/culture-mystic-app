import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TarotCard } from '../types/TarotCard';

interface CardItemProps {
  card: TarotCard;
  onPress: () => void;
}

const CardItem: React.FC<CardItemProps> = ({ card, onPress }) => {
  const imageSource = card.image
    ? { uri: card.image }
    : require('../assets/images/fallback.png');

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image
        source={imageSource}
        style={styles.image}
        resizeMode="contain"
        onError={() => console.warn(`Failed to load image for ${card.name}`)}
      />
      <Text style={styles.title}>{card.name}</Text>
      <Text style={styles.keywords}>{card.keywords.join(', ')}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  keywords: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default CardItem;
