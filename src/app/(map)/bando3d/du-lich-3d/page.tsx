/* eslint-disable import/order */
import KrpanoViewer from '@/components/krpano/krpano'
import { Grid } from '@mui/material'

const Map3D = () => {
  return (
    <Grid item xs={12} sm={12} md={12}>
      <KrpanoViewer />
    </Grid>
  )
}

export default Map3D
