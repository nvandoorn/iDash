export function Oil({oilPressure, oilTemp}) {
  return (
    <div>
      <div>
        Oil Pressure: {oilPressure.toFixed(2)} bar
      </div>
      <div>
        Oil Temp: {oilTemp.toFixed(1)} C
      </div>
    </div>
  );
}
