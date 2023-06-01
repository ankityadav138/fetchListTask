import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {setUserData} from '../store/slices/user';
import {useDispatch} from '../store/store';
import {useGetUsersMutation} from '../store/apiSlices/userApi';
import UserCard from '../components/UserCard';
import {Colors} from '../utils/colors';

const List = ({navigation}) => {
  //hooks
  const [pageNo, setPageNo] = useState(1);
  const [userList, setUserList] = useState([]);

  //redux store
  const dispatch = useDispatch();

  //rtk calls
  const [getUserList, {data: USERS, isSuccess, isError, isLoading}] =
    useGetUsersMutation();

  const getUsers = () => {
    const params = {
      page: pageNo,
      per_page: 5,
    };
    getUserList(params);
  };

  useEffect(() => {
    getUsers();
  }, [pageNo]);

  useEffect(() => {
    if (isSuccess) {
      let arr = userList.concat(USERS?.data);
      dispatch(setUserData(arr));
      setUserList(arr);
    } else if (isError) {
      console.log('Something went wrong !');
    }
  }, [isSuccess, isError]);

  const renderItem = ({item, index}) => (
    <UserCard
      item={item}
      index={index}
      onPress={() => navigation.navigate('Details', {id: item?.id})}
    />
  );

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={userList}
        keyExtractor={(item, index) => {
          return item?.data?.id;
        }}
        renderItem={renderItem}
        onEndReachedThreshold={0.3}
        onEndReached={() =>
          USERS?.total_pages > pageNo && setPageNo(v => v + 1)
        }
        ListFooterComponent={
          isLoading ? <ActivityIndicator size={'large'} /> : null
        }
        contentContainerStyle={{paddingVertical: 8}}
      />
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
});

export default List;
