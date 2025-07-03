import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface FilterToggleProps {
  selected: 'All' | 'Major' | 'Minor';
  onSelect: (filter: 'All' | 'Major' | 'Minor') => void;
}

const filters: ('All' | 'Major' | 'Minor')[] = ['All', 'Major', 'Minor'];

const FilterToggle: React.FC<FilterToggleProps> = ({ selected, onSelect }) => {
  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <Pressable
          key={filter}
          onPress={() => onSelect(filter)}
          style={[
            styles.button,
            selected === filter && styles.activeButton,
          ]}
        >
          <Text style={selected === filter ? styles.activeText : styles.text}>
            {filter}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 20,
  },
  activeButton: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  text: {
    color: '#333',
  },
  activeText: {
    color: '#fff',
  },
});

export default FilterToggle;
