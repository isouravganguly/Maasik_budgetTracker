//  ---- React Libraries ----
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

//  ---- Custom Components and hooks ----
import {Controller} from '../../firebase/Controller';
import Container from '../../components/Container';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';
import Card from '../../components/Card';
import MonthYearPicker from '../../components/MonthYearPicker';
import ImageArea from '../../components/ImageArea';
import Loading from '../../components/Loading';

// Hooks --
import useThemeStyles from '../../hooks/themes/useThemeStyles';
import useManageMonth from '../../hooks/useManageMonth';
import CreateForm from '../../components/createForm';

// --- styles ---
import styles from './styles';
import ErrorBox from '../../components/ErrorBox';
import ProgressBar from '../../components/progressBar';

const Dashboard = ({navigation}) => {
  const editOption = useRef(true); // Edit option on the category
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  const monthYear = date.getMonth() + '' + date.getFullYear(); // string of month-year -- "112022"

  const [list, setList] = useState([]); // List of categories
  const style = useThemeStyles(styles); // styles based on themes

  // Form data [label & input] needed to createForm using hook ------
  const labels = useRef([
    {label: 'Name', type: 'String', data: ''},
    {label: 'Budget', type: 'Number', data: null},
  ]);

  const email = useRef(null);

  useEffect(() => {
    // useManageMonth() hook checks for month in device, creates a new month, returns boolean
    const isNewMonthCreated = useManageMonth();
    // -isNewMonthCreated-- returned a boolean based on if new month is created
  }, []);

  // getData() -- Listener to the current month budget. Any changes will update on screen
  const getData = async () => {
    setLoading(true);

    const email = await AsyncStorage.getItem('Email');
    email.current = email;

    try {
      // This listener will be listening to any updates in current month!
      firestore()
        .collection('budget')
        .doc(email)
        .collection(monthYear)
        .onSnapshot(data => {
          let tempList = []; //temporary list

          data.forEach(d => {
            const data = d.data();
            const amountLeft = data.budget - data.spent;
            const budgetShare = ((data.spent / data.budget) * 100).toFixed(2); // percentage of category budget exhausted

            obj = {
              // Local object, for Card-Details / Pie-Chart
              title: data.name,
              estimated: data.budget,
              spent: data.spent,
              budgetShare: budgetShare,
              amountLeft: amountLeft,
            };

            tempList.push(obj); // Push local object -> to local array
          });

          setList(tempList); // tempList becomes global, -> will render FlatList
          setLoading(false);
        });
    } catch (error) {
      console.error('currentMonthListenerError', error);
    }
  };

  // Set New Listener when month changes --
  useEffect(() => {
    getData();
  }, [monthYear]);

  //when user press PLUS icon -> create a new category -
  const [showModal, setShowModal] = useState(false);

  // Create the category in operations -----------
  // save the data from the modal (inputs)
  const createNewCategory = () => {
    // save (input) label data in firebase-firestore
    Controller.createNewCategory(labels.current);
  };

  const renderItem = ({item}) => {
    // Rendering each Card---
    return (
      email !== null && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {
              category: item.title,
              email: email?.current,
              monthYear: monthYear,
              item: item,
            })
          }>
          <Card item={item} />
        </TouchableOpacity>
      )
    );
  };

  return loading ? (
    <Loading />
  ) : (
    <View style={style.superContainer}>
      <Container>
        {list.length !== 0 ? ( // Show the data OR ask user to add data
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.title}
          />
        ) : (
          // if [No data found]
          <View style={style.noData}>
            <ImageArea URI="noData" />
            {/* <Text style={[style.noData, {fontWeight: '800'}]}>No data</Text> */}
            <Text style={style.noDataText}>
              No data to showcase this month!
            </Text>
          </View>
        )}
      </Container>
      <CustomModal // When '+' icon is clicked to add category, a Modal shows up!
        setShowModal={setShowModal}
        showModal={showModal}
        onpress={() => createNewCategory()}
        header="Category">
        <CreateForm labels={labels.current} />
        {/* This component creates a form  */}
      </CustomModal>

      {editOption.current && ( // Show the edit option -> only when user is on current month
        <CustomButton
          type="FILLED"
          icon="plus"
          shape="ROUND"
          // style={style.addCategoryButton}
          onpress={() => setShowModal(true)}
        />
      )}

      {/* Month Picker -> Left-Bottom Button */}
      <View style={{alignSelf: 'flex-start'}}>
        <MonthYearPicker
          date={date}
          setDate={setDate}
          editOption={editOption}
        />
      </View>
    </View>
  );
};

export default Dashboard;
