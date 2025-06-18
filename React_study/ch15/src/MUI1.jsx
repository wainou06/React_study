import Button from '@mui/material/Button'

function MUI1() {
   return (
      <div>
         <Button
            variant="text"
            onClick={() => {
               alert('clicked')
            }}
         >
            Text
         </Button>
         <Button variant="contained">Contained</Button>
         <Button variant="outlined">Outlined</Button>
      </div>
   )
}

export default MUI1
