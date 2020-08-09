import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import grey from '@material-ui/core/colors/grey'
import purple from '@material-ui/core/colors/purple'

/** 
 * Theme for the new Material UI Provider
 * @see https://material-ui.com/customization/themes/
 */
export const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: purple[500]
    }
  }
})