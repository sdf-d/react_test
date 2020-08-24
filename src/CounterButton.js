import React, {useState}  from 'react';
import { Button, Grid, Typography} from '@material-ui/core';

function Counter(props) {
  // State: a counter value
  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: the UI definition
  return (
    <div><Typography variant="h5">
      Value: {counter} <Button variant="contained" color={props.color ? props.color : "primary"} onClick={increment}><Typography>Increment</Typography></Button>
    </Typography></div>
  )
}

export default Counter
