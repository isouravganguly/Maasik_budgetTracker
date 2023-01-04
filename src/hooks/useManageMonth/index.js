import AsyncStorage from '@react-native-async-storage/async-storage';

import {Operation} from '../../firebase/Controller';

const useManageMonth = async () => {
  const monthYear = await AsyncStorage.getItem('monthYear');
  const curMonth = new Date().getMonth();
  const curYear = new Date().getFullYear();
  const currMonthYear = curMonth + '' + curYear;

  if (monthYear !== null) {
    if (currMonthYear === monthYear) {
      return false; // New month not created
    }
  }

  try {
    Operation.createNewMonth(currMonthYear);
  } catch (error) {
    console.log(error); // Error on new month creation
  }

  await AsyncStorage.setItem('monthYear', currMonthYear);
  return true; // New Month is created
};

export default useManageMonth;
