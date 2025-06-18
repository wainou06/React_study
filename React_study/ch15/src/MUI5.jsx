import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Button } from '@mui/material'

const theme = createTheme({
   palette: {
      primary: {
         main: '#000',
      },
      secondary: {
         main: '#dc004e',
      },
   },
})

function MUI5() {
   return (
      <ThemeProvider theme={theme}>
         <Button color="primary" variant="contained">
            버튼
         </Button>
         <Button color="secondary" variant="contained">
            버튼
         </Button>
      </ThemeProvider>
   )
}

export default MUI5
