import React, { useState } from 'react'
import ProgressBar from 'react-native-progress/Bar'
import { useTheme } from '@react-navigation/native'
import PropTypes from 'prop-types'

const ProgressIndicator = (props) => {
  const { colors } = useTheme()
  const [progress, setProgress] = useState(0)
  setTimeout(() => {
    setProgress(props.progress)
  }, 1500)

  return (
    <>
      <ProgressBar
        animated={props.animated}
        color={props.color ? props.color : colors.primary}
        unfilledColor={props.unfilledColor}
        borderWidth={props.borderWidth}
        borderColor={props.borderColor}
        progress={progress}
        width={props.width ? props.width : 200}
        height={props.height}
        borderRadius={props.borderRadius}
        useNativeDriver={props.nativeDriver}
        animatedConfig={props.animatedConfig}
        animationType={props.animationType}
      />
    </>
  )
}

ProgressIndicator.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
  animated: PropTypes.bool,
  unfilledColor: PropTypes.string,
  borderWidth: PropTypes.oneOf([0, 1]),
  borderColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.number,
  nativeDriver: PropTypes.bool,
  animatedConfig: PropTypes.object,
  animationType: PropTypes.oneOf(['spring', 'decay', 'timing']),
}

export default ProgressIndicator
