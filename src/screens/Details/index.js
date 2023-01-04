import React, {useRef, useState, useContext, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import MonthYearPicker from '../../components/MonthYearPicker';

import Container from '../../components/Container';
import useThemeStyles from '../../hooks/themes/useThemeStyles';
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';
import CreateForm from '../../components/createForm';
import {Controller} from '../../firebase/Controller';
import {EmailContext} from '../../utils/Providers/EmailProvider';

const Details = ({route}) => {
  //Params --
  const {category, monthYear, item} = route.params;
  const email = useContext(EmailContext);

  console.log('HERE AT DETAILS PAGE', email);

  const editOption = useRef(true); // Edit option on the category
  const [date, setDate] = useState(new Date());

  //Theme styles custom --
  const style = useThemeStyles(styles);

  //Show a Modal --
  const [showModal, setShowModal] = useState(false);

  //list of expense
  const [expense, setExpense] = useState(null);

  const [budgetData, setBudgetData] = useState({});

  const labels = useRef([
    {label: 'Item', type: 'String', data: ''},
    {label: 'Spent', type: 'Number', data: null},
  ]);
  console.log('category title -- ', category);
  console.log(email.email, monthYear);

  const getData = () => {
    try {
      firestore()
        .collection('expense')
        .doc(email.email)
        .collection(monthYear)
        .doc(category)
        .onSnapshot(datas => {
          console.log('email', email.email);
          console.log(datas.data());
          setExpense(datas.data().expense);
          // datas.forEach(d => console.log(d.data()));
        });

      firestore()
        .collection('budget')
        .doc(email.email)
        .collection(monthYear)
        .doc(category)
        .onSnapshot(datas => setBudgetData(datas.data()));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const addExpense = () => {
    // Form data [label & input] needed to createForm using hook ------
    labels.category = category;

    console.log('labels --- ', labels);
    Controller.addExpense(labels);
  };

  const renderItem = ({item}) => {
    console.log('itemssss --- ', item);
    return (
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 3,
        }}>
        <Text style={style.expenseItemTitle}>{item.item}</Text>
        <Text style={style.expenseItemValue}>{item.spent}</Text>
      </View>
    );
  };

  return (
    <Container style={style.superContainer}>
      <View style={style.subContainer}>
        <View style={style.header}>
          <Text style={style.TitleText}>{category}</Text>
          <View style={style.line} />
        </View>
        <Text style={style.amount}>{budgetData.spent}</Text>
        <Text style={style.subTitleText}>Spent so far</Text>
        <View style={style.subHeader}>
          <Text style={style.subText}>Budget Share</Text>
          <Text style={style.subTextHighlight}>
            {((budgetData.spent / budgetData.budget) * 100).toFixed(2)}%
          </Text>
        </View>
        <View style={style.subHeader}>
          <Text style={style.subText}>Amount Left</Text>
          <Text style={style.subTextHighlight}>
            {budgetData.budget - budgetData.spent}
          </Text>
        </View>
      </View>
      <View style={style.expenseBox}>
        {/* Month Picker -> Left-Bottom Button */}
        <View style={style.expenseHeader}>
          <MonthYearPicker
            date={date}
            setDate={setDate}
            editOption={editOption}
          />
        </View>
        <View style={style.horizontalLine} />

        {/* Pop-up to show a Modal -- Take expense Data  */}
        <CustomModal
          setShowModal={setShowModal}
          showModal={showModal}
          onpress={() => addExpense()}
          header="Expense">
          <CreateForm labels={labels.current} />
        </CustomModal>

        <View style={style.expenseList}>
          <FlatList
            data={expense}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <CustomButton
          onpress={() => editOption.current && setShowModal(!showModal)}
          type="FILLED"
          icon="plus"
          shape="WIDE"
          text="Add Expense"
          status={editOption.current ? 'ABLE' : 'DISABLE'}
          style={style.expenseBoxButton}
        />
      </View>
    </Container>
  );
};

export default Details;
