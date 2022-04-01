import { Alert, Button, Collapse, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from "react";

function Form(){
const [isSuccess, setIsSuccess] = useState(0);
const [isAlreadyFetch, setAlreadyFetch] = useState(false);

    function CreateAlert(){
        const [open, setOpen] = useState(true);

        return (
            <Collapse in={open}>
                <Alert
                severity={isSuccess === 0 ? "error" : "success"}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                >
                {isSuccess === 0 ? "Maaf, pesan anda gagal terkirim" : "Selamat, pesan anda berhasil terkirim"}
                </Alert>
            </Collapse>
        );
    }

const scriptURL = 'https://script.google.com/macros/s/AKfycbwfFTX6d9H7sz1yK3fRYkcwqBxSyY6KOf5xPFjXF0jyORcrGrxaWuOZzQgW1Nnc_cMJ-Q/exec';

    return(
        <div>
            <div className="notification" style={{width: "90%"}}>
                {isAlreadyFetch === true ? <CreateAlert/> : ""}
            </div>
            <form className="form-contact" name="submit-to-google-sheet"
            style={{ display: "flex", flexDirection: "column", width: "90%" }}
            onSubmit={(e) => {
                e.preventDefault();
                fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(document.forms['submit-to-google-sheet'])
                })
                .then(response => {
                    console.log('Success!', response)
                    setIsSuccess(1);
                    setAlreadyFetch(true);
                })
                .catch(error => {
                    console.error('Error!', error.message)
                    setIsSuccess(0);
                    setAlreadyFetch(true);
                })
                // console.log(name, email, message)
            }}>
            <div
              className="fullname"
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "20px",
              }}
            >
              <TextField
                label="Name"
                id="Name"
                name="nama"
                variant="outlined"
                type="text"
                required
              />
            </div>
            <div
              className="email"
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "20px",
              }}
            >
              <TextField
                label="Email"
                id="Email"
                name="email"
                variant="outlined"
                type="email"
                required
              />
            </div>
            <div
              className="fullname"
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "20px",
              }}
            >
              <TextField
                id="Message"
                label="Message"
                name="pesan"
                type="text"
                multiline
                maxRows={4}
                minRows={3}
                variant="outlined"
                required
              />
            </div>
            <Button
              style={{ width: "10%" }}
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
            {/* <LoadingButton
                style={{width: "20%"}}
                loading
                loadingPosition="start"
                variant="outlined"
                >
                Loading...
            </LoadingButton> */}
          </form>
        </div>
    );
}

export default Form;