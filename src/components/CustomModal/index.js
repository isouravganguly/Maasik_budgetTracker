import {Modal, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import useThemeStyles from '../../hooks/themes/useThemeStyles';
import styles from './styles';

const CustomModal = ({children}) => {
  const style = useThemeStyles(styles);

  const [showModal, setShowModal] = useState(true);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(!showModal)}
      >
      <View style={style.modalView}>
        <TouchableOpacity
          style={style.roundButton}
          onPress={()=>setShowModal(!showModal)}>
          <Icon name="check-circle" size={28} color="black" />
        </TouchableOpacity>
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;
