import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import Battery5BarIcon from '@mui/icons-material/Battery5Bar'
import IconButton from '@mui/material/IconButton'

function MUI6() {
   return (
      <>
         <AccountCircleIcon />
         <Battery5BarIcon />
         <br />
         <IconButton color="primary" aria-label="알람">
            <AccessAlarmIcon />
         </IconButton>
      </>
   )
}

export default MUI6
