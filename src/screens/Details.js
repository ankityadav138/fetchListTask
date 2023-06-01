import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from '../store/store';
import UserAvatar from 'react-native-user-avatar';
import {Colors} from '../utils/colors';

const Details = ({route}) => {
  const {userData} = useSelector(state => state.user);

  const data = userData.find(obj => obj.id === route?.params?.id);

  return (
    <SafeAreaView style={Styles.container}>
      <View style={{padding: 16, flex: 1, alignItems: 'center'}}>
        <UserAvatar
          style={{width: 160, height: 160, marginBottom: 20}}
          size={160}
          name={data?.first_name}
          src={data?.avatar}
        />
        <Text style={Styles.details}>{data?.first_name}</Text>
        <Text style={Styles.details}>{data?.last_name}</Text>
        <Text style={Styles.details}>{data?.email}</Text>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  details: {
    fontSize: 20,
    margin: 4,
  },
});

export default Details;
