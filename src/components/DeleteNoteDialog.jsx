import { DialogTitle, Dialog,DialogContent,DialogActions,Button} from "@material-ui/core"

export default function DeleteNoteDialog({ isOpen, onClose, onDelete }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Delete Confirmation</DialogTitle>
      <DialogContent>
        Are you sure you want to delete this note?
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onDelete} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
