import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const CustomButton = (status, type, icon, onpress, children) => {

    const statusHandle = (status)=>{
    switch(status){
        case 'DISABLE': return (styles.disable)
        case 'ABLE' : return (styles.able)
    }
    }

    const typeHandle =(type)=>{
        switch(type){
            case 'FILLED': return (styles.fill)
            case 'OUTLINE': return (styles.outline)
            case 'GHOST': return (styles.ghost)
        }
    }

    const statusStyle = statusHandle(status)
    const typeStyle = typeHandle(type)

  return (
    <TouchableOpacity style = {[ styles.button, statusStyle, typeStyle ]} onPress={()=>onpress()}>
        <Text>{children}</Text> 
        icon && <Icon name="rocket" size={30} color="#900" />
    </TouchableOpacity>
  )
}

export default CustomButton

