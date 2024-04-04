import { Alert, Box } from '@mui/material'

export default function Error() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Alert sx={{fontSize: 20}} severity="error">
        Failed to fetch tags.
      </Alert>
  </Box>
  )
}
