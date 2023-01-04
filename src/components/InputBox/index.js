//Third Party Libraries ----
import {TextInput, View} from 'react-native';
import React, {useState} from 'react';

//Custom Components ----
import useThemeStyles from '../../hooks/themes/useThemeStyles';
import styles from './styles';


const InputBox = ({label}) => {
  const style = useThemeStyles(styles);
  const [data, setData] = useState();

  const textUpdate = (dataValue)=>{
    setData(dataValue)
    label.data = dataValue
  }

  return (
    <View>
      <TextInput
        style={style.inputBox}
        value={data}
        onChangeText={(dataValue)=>textUpdate(dataValue)}
        placeholder={label.label}
        autoCapitalize={false}
        autoCorrect={false}
        autoCompleteType={false}
        autoFocus={false}
      />
    </View>
  );
};

export default InputBox;
