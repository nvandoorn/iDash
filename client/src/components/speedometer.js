export function Speedometer({speed, units}) {
  const conversionFactor = units ? 3.6 : 2.23694
  return (
    <div>
      Speed: {(speed * conversionFactor).toFixed(1)} {units ? 'KM/h' : 'MPH'}
    </div>
  );
}