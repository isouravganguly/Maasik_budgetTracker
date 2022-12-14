import { View } from 'react-native'
import React from 'react'

import InputBox from "../InputBox"

const CreateForm = ({labels, fields}) => {
  return (
    <View style = {{width: "70%"}}>
      {labels.map((label, index) => {
  // const [data, setData] = useState();
        return <InputBox label = {label} fields={fields} key={index}/>
      })}
    </View>
  )
}

export default CreateForm