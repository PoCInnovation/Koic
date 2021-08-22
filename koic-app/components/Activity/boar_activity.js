import React from 'react'
import { View, Text } from 'react-native';
import { ItemHour, ItemGraph, ItemMax } from '../utils/graph'

function boar_activity() {
  const [boar, setBoar] = React.useState('loading')

  React.useEffect(() => {
    import('../data/activity_data').then(({ boar }) => {
      setBoar(boar)
    })
  }, [])

  return (boar === 'loading'
    ? <Text>Loading values ...</Text>
    : <View>
        <ItemGraph data={boar.data}/>
        <ItemHour hour={boar.mostAffluentHour} />
        <ItemMax nb={boar.maxValue}/>
      </View>
  );
}
export default boar_activity