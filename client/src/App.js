import { useState, useEffect } from 'react'
import { io } from "socket.io-client";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'

import { Speedometer } from './components/speedometer'
import { Tachometer } from './components/tachometer'
import { Fuel } from './components/fuel'
import { Pedals } from './components/pedals'
import { Steering } from './components/steering'
import { Oil } from './components/oil'

function App() {
  const [dashData, setDashData] = useState({})
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const socket = io(process.env.NODE_ENV === 'production' ? window.location.host : `${window.location.hostname}:5000`)
    socket.on('update', data => {
      setDashData(data)
      setReady(true)
    })
  }, [])

  return (
    <div>
      <CssBaseline />
      {ready ?
      <div>
        <Grid container spacing={2}>
          <Grid item>
            <Speedometer speed={dashData.Speed} units={dashData.DisplayUnits}/>
            <Tachometer rpm={dashData.RPM} gear={dashData.Gear} />
          </Grid>
          <Grid item>
            <Fuel fuelPercentage={dashData.FuelLevelPct}/>
            <Oil oilPressure={dashData.OilPress} oilTemp={dashData.OilTemp}/>
          </Grid>
          <Grid item xs={12}>
            <Pedals throttlePercentage={dashData.Throttle} brakePercentage={dashData.Brake} clutchPercentage={dashData.Clutch} AbsActive={dashData.BrakeABSactive} />
          </Grid>
          <Grid item>
            <Steering steeringAngle={dashData.SteeringWheelAngle} maxSteeringAngle={dashData.SteeringWheelAngleMax}/>
          </Grid>
        </Grid>
      </div> : null}
    </div>
  );
}

export default App;
