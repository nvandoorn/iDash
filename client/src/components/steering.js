import steeringWheel from '../steering_wheel.png'
export function Steering({steeringAngle, maxSteeringAngle}) {
  return (
    <div>
      <img src={steeringWheel} width={200} style={{transform: `rotate(${-1 * steeringAngle}rad)`}} />
    </div>
  );
}