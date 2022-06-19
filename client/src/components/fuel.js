export function Fuel({fuelPercentage}) {
  return (
    <div>
      Fuel: {(fuelPercentage * 100).toFixed(0)}%
    </div>
  );
}
