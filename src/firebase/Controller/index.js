// get|setUser, get|setMonth, get|setExpense get|setCategory, get|setCategoryBudget, get|setCategorySpent, get|setActivity, get|setPrice ...
// Updates on Expenses also effects Monthly everytime --
// Recalculating category-spent, add new-category,
// Budgets only stay on monthly category

import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {v1 as uuidv1} from 'uuid';
import {useEffect} from 'react';

const month = new Date().getMonth().toString();
const year = new Date().getFullYear().toString();
const monthYear = month + year;
const expense = [];

const createNewCategory = async label => {
  const email = await AsyncStorage.getItem('Email');

  const category = label[0].data;
  const budget = label[1].data;

  // const expense = [{item: "cloth", price: 1200}, {item: "cloth", price: 1200}, {item: "cloth", price: 1200},{item: "cloth", price: 1200}];
  try {
    await firestore()
      .collection('budget')
      .doc(email)
      .collection(monthYear)
      .doc(category)
      .set({name: category, budget: budget, spent: 0});

    await firestore()
      .collection('expense')
      .doc(email)
      .collection(monthYear)
      .doc(category)
      .set({expense});

    // you can update with an expense array and it will be stored and retried
  } catch (error) {
    console.error('Error on operation - create new category', error);
  }
};

const addExpense = async labels => {
  // here, add the expense data recieved from user, and the category
  let expenseArray = [];
  let spent = 0;

  const newData = {
    item: labels.current[0].data,
    spent: labels.current[1].data,
  };
  const category = labels.category;

  const email = await AsyncStorage.getItem('Email');

  try {
    await firestore()
      .collection('expense')
      .doc(email)
      .collection(monthYear)
      .doc(category)
      .get()
      .then(data => {
        expenseArray = [...data.data().expense, newData];
      });

    await firestore()
      .collection('expense')
      .doc(email)
      .collection(monthYear)
      .doc(category)
      .update({expense: expenseArray})
      .then(() => {});

    firestore()
      .collection('budget')
      .doc(email)
      .collection(monthYear)
      .doc(category)
      .get()
      .then(data => {
        spent = parseInt(data.data().spent) + parseInt(newData.spent);

        firestore()
          .collection('budget')
          .doc(email)
          .collection(monthYear)
          .doc(category)
          .update({spent: spent});
      });
  } catch (error) {
    console.error(error);
  }
};

const getUserData = async email => {
  const res = await firestore().collection('Users').doc(email).get();
  const userData = res.data();
  return userData === undefined ? undefined : userData;
};

export const Controller = {createNewCategory, addExpense, getUserData};
