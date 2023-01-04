import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../CustomButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MonthDropdown = (
    // {monthYear, setMonthYear}
    ) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [monthYear, setMonthYear] = useState("112022")

  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const moonth = monthList[parseInt(monthYear.slice(0, 2))];


  const chooseMonth = (index) => {
    if(index<10)
        index = "0" + index
        const choosenMonthYear = index+monthYear.slice(2)
        setMonthYear(choosenMonthYear)
        setShowDropDown(!showDropDown)
  }

  const renderItem = ({item, index}) => 
  (
    <TouchableOpacity onPress = {()=> chooseMonth(index)}>
        <Text style={{padding: 3, paddingHorizontal: "8%", fontWeight: "400", width: "100%", backgroundColor: "#fafafa"}}>{item}</Text>
    </TouchableOpacity>
  )

  return (
    <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1}} >

    <View>
      <CustomButton
        status="ABLE"
        type="FILLED"
        shape="WIDE"
        text={moonth}
        icon="angle-down"
        onpress={() => setShowDropDown(!showDropDown)}
        />
      {showDropDown && (
          <View style={{position: 'absolute'}}>
          <FlatList
            data={monthList}
            renderItem={renderItem}
            keyExtractor={({item, index}) => index}
            />
        </View>
      )}
    </View>
      </View>
  );
};

export default MonthDropdown;
