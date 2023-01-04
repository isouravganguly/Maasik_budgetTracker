import {Modal, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import useThemeStyles from '../../hooks/themes/useThemeStyles';
import styles from './styles';
import CustomButton from '../CustomButton';

const CustomModal = ({onpress, showModal, setShowModal, children, header}) => {

  const style = useThemeStyles(styles);

  const closeModal = ()=>{
    setShowModal(!showModal);
  }

  const buttonPressed = () => {
    onpress();
    closeModal();
    
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => closeModal()}
      style= {{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <View style={style.modalView}>
        <CustomButton status="ABLE" type="GHOST" shape="ROUND" icon="close" style= {style.closeButton} onpress={()=> closeModal()}/>
        <Text style= {style.modalHeader}>{header}</Text>
        <View style = {style.modalChild}>
        {children}
        </View>
        <CustomButton
          type="FILLED"
          icon="plus"
          shape = "WIDE"
          onpress={() => buttonPressed()}
        />
      </View>
    </Modal>
  );
};

export default CustomModal;
