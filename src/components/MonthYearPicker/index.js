import React, {useState, useCallback} from 'react';
import {SafeAreaView, Text} from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import useThemeStyles from '../../hooks/themes/useThemeStyles';
import CustomButton from '../CustomButton';

import styles from './styles';

// date - current date, setDate - stores the current string Date format, editOption - false: when other than new month is selected
const DatePicker = ({date, setDate, editOption}) => {

  const style = useThemeStyles(styles)
  const [show, setShow] = useState(false);

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

  const showPicker = useCallback(value => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      // Get present monthYear, get selected(by user) monthYear --
      const present = new Date().getMonth() + '' + new Date().getFullYear();
      console.log("present", present)
      const selected =
        selectedDate.getMonth() + '' + selectedDate.getFullYear();
        console.log("selected", selected)

      // If monthYear vary -> remove edit options
      if (present !== selected) {
        editOption.current = false;
      } else {
        editOption.current = true;
      }

      // Remove datePicker from screen
      showPicker(false);

      setDate(selectedDate);
    },
    [date, showPicker],
  );

  return (
    <SafeAreaView>
      <CustomButton // Button to display and change Month [monthYear]
        icon="angle-up"
        status="ABLE"
        type="GHOST"
        shape="WIDE"
        onpress={() => showPicker(true)}>
        <Text style={style.datePickerButtonText}>
          {monthList[date.getMonth()]}
        </Text>
      </CustomButton>

      {show && (
        <MonthPicker
          onChange={onValueChange}
          value={date}
          //   minimumDate={new Date()}
          maximumDate={new Date()}
        />
      )}
    </SafeAreaView>
  );
};

export default DatePicker;
