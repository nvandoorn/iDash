import { LinearProgress, Stack } from '@mui/material'

export function Pedals({throttlePercentage, brakePercentage, clutchPercentage, AbsActive}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={1}>
      <LinearProgress variant="determinate" value={100 - clutchPercentage * 100} />
      <LinearProgress variant="determinate" color="secondary" value={brakePercentage * 100} />
      <LinearProgress variant="determinate" color="success" value={throttlePercentage * 100} />
    </Stack>
  );
}