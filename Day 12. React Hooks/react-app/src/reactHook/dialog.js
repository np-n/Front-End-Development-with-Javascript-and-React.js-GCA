import React,{useEffect,useState} from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

export default function DialogBox(props) {
  const [open, setOpen] = useState(false);

  function handleClose() {
      props.onCloseDialog()
  }

  useEffect(()=>{
      setOpen(props.openDialog)
  },[props.openDialog])

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
            <p style={{fontSize:16,fontWeight:600,color:'blue'}}>
            Your time is out
            </p>
 
        </DialogTitle>
        <DialogContent>
            <DialogActions >
            <Button onClick={handleClose} color="secondary" autoFocus>
            Exit
          </Button>
            </DialogActions>
            
          
        </DialogContent>
      </Dialog>
    </div>
  );
}
