import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

export const ItemList = props =>
  <View>
    {
      props.items.map((item, index) =>
        <Text key={index}>
          {item.title}
        </Text>
      )
    }
  </View>;

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};
