import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ProgressBar from '../progressBar';
import Container from '../Container';
import styles from './styles';
import useThemeStyles from '../../hooks/themes/useThemeStyles';

const Card = ({item}) => {
  const style = useThemeStyles(styles);

  const [width, setWidth] = useState(0);

  return (
    <Container style={style.subcontainer}>
      <Text style={style.cardTitle}>{item.title}</Text>
      <View
        onLayout={e => {
          const width = e.nativeEvent.layout.width;
          setWidth(width);
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          // alignItems: 'space-around',
          height: 110,
          // width: e.nativeEvent.layout.width
        }}>
        <View style={{justifyContent: 'space-around'}}>
          <View style={style.textbox}>
            <Text style={style.cardInfoTitle}>Share</Text>
            <Text style={style.cardInfoSubtitle}>{item.budgetShare}%</Text>
          </View>
          <View>
            <Text style={style.cardInfoTitle}>Estimated</Text>
            <Text style={style.cardInfoSubtitle}>{item.estimated}</Text>
          </View>
        </View>

        <View style={{justifyContent: 'space-around'}}>
          <View style={style.textbox}>
            <Text style={style.cardInfoTitle}>Spent</Text>
            <Text style={style.cardInfoSubtitle}>{item.spent}</Text>
          </View>
          <View>
            <Text style={style.cardInfoTitle}>Amount Left</Text>
            <Text style={style.cardInfoSubtitle}>{item.amountLeft}</Text>
          </View>
        </View>
      </View>
      {<ProgressBar percent={item.budgetShare} width={width} />}
    </Container>
  );
};

export default Card;
