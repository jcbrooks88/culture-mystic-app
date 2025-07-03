import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
} from 'react-native';
import tarotData from '../data/tarot_cards.json';
import CardItem from '../components/CardItem';
import CardModal from '../components/CardModal';
import FilterToggle from '../components/FilterToggle';
import { TarotCard } from '../types/TarotCard';

const CardLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [arcanaFilter, setArcanaFilter] = useState<'All' | 'Major' | 'Minor'>('All');
  const [filteredCards, setFilteredCards] = useState<TarotCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const filtered = tarotData.filter((card) => {
      const matchesArcana =
        arcanaFilter === 'All' || card.arcana === arcanaFilter;
      const matchesSearch =
        card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.keywords.some((kw) =>
          kw.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesArcana && matchesSearch;
    });
    setFilteredCards(filtered);
  }, [searchQuery, arcanaFilter]);

  const handleCardPress = (card: TarotCard) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search cards..."
        style={styles.search}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FilterToggle selected={arcanaFilter} onSelect={setArcanaFilter} />
      {filteredCards.length === 0 ? (
        <Text style={styles.noResults}>No cards match your search.</Text>
      ) : (
        <FlatList
          data={filteredCards}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardItem card={item} onPress={() => handleCardPress(item)} />
          )}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      )}
      <CardModal
        visible={modalVisible}
        card={selectedCard}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  search: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  list: {
    paddingBottom: 20,
  },
  noResults: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#888',
  },
});

export default CardLibrary;
