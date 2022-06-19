export function Tachometer({rpm, gear}) {
  return (
    <div>
      <div>Tachometer: {rpm.toFixed(0)} RPM</div>
      <div>Gear: {gear}</div>
    </div>
  );
}
