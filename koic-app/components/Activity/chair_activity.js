import React from 'react'
import { View, Text } from 'react-native';
import { ItemHour, ItemGraph, ItemMax } from '../utils/graph'

function chair_activity() {
  const [chair, setchair] = React.useState('loading')

  React.useEffect(() => {
    import('../data/activity_data').then(({ chair }) => {
      setchair(chair)
    })
  }, [])

  return (chair === 'loading'
    ? <Text>Loading values ...</Text>
    : <View>
        <ItemGraph data={chair.data}/>
        <ItemHour hour={chair.mostAffluentHour} />
        <ItemMax nb={chair.maxValue}/>
      </View>
  );
}
export default chair_activity