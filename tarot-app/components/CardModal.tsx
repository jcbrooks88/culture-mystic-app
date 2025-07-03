import React from 'react';
import { Modal, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { TarotCard } from '../types/TarotCard';

interface CardModalProps {
  visible: boolean;
  card: TarotCard | null;
  onClose: () => void;
}

const CardModal: React.FC<CardModalProps> = ({ visible, card, onClose }) => {
  if (!card) return null;

  const imageSource = card.image
    ? { uri: card.image }
    : require('../assets/images/fallback.png');

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Image source={imageSource} style={styles.image} resizeMode="contain" />
          <Text style={styles.title}>{card.name}</Text>
          <Text style={styles.arcana}>{card.arcana} Arcana</Text>
          <Text style={styles.keywords}>{card.keywords.join(', ')}</Text>
          <Text style={styles.description}>{card.description}</Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 220,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  arcana: {
    fontStyle: 'italic',
    marginVertical: 5,
  },
  keywords: {
    fontSize: 14,
    marginBottom: 10,
    color: '#444',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  closeText: {
    color: '#fff',
  },
});

export default CardModal;
