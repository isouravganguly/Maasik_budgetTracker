import {Text, View} from 'react-native';
import React, {useState} from 'react';
import ProgressBar from '../progressBar';
import Container from '../Container';
import styles from './styles';
import useThemeStyles from '../../hooks/themes/useThemeStyles';

const Card = userBudget => {
  const style = useThemeStyles(styles);

  const [width, setWidth] = useState(0);

  return (
    <Container style={style.subcontainer}>
      <Text style={style.cardTitle}>Shopping</Text>
      <View
        onLayout={e => {
          const width = e.nativeEvent.layout.width;
          setWidth(width);
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          height: 120,
        }}>
        <View style={{justifyContent: 'space-around'}}>
          <View style={style.textbox}>
            <Text style={style.cardInfoTitle}>Budget Share</Text>
            <Text style={style.cardInfoSubtitle}>12%</Text>
          </View>
          <View>
            <Text style={style.cardInfoTitle}>Estimated</Text>
            <Text style={style.cardInfoSubtitle}>30,000</Text>
          </View>
        </View>

        <View style={{justifyContent: 'space-around'}}>
          <View>
            <Text style={style.cardInfoTitle}>Spent</Text>
            <Text style={style.cardInfoSubtitle}>3600</Text>
          </View>
          <View>
            <Text style={style.cardInfoTitle}>Amount Left</Text>
            <Text style={style.cardInfoSubtitle}>26,400</Text>
          </View>
        </View>
      </View>
      {<ProgressBar percent={40} width={width} />}
    </Container>
  );
};

export default Card;
