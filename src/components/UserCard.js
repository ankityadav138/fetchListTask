import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import UserAvatar from 'react-native-user-avatar';
import {Colors} from '../utils/colors';

const UserCard = ({item, index, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={Styles.card}>
        <UserAvatar
          style={{marginRight: 12}}
          size={130}
          name={item?.first_name}
          src={item?.avatar}
        />

        <View style={Styles.bio}>
          <Text style={Styles.name}>
            {item?.first_name + ' ' + item?.last_name}
          </Text>

          <Text style={Styles.email}>{item?.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 24,
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  bio: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    color: Colors.black,
    fontSize: 22,
    marginBottom: 4,
    marginTop: 12,
  },
  email: {
    color: Colors.grey,
    fontSize: 18,
    marginTop: 4,
  },
});

export default UserCard;
