import {Button, TextField, Typography} from '@mui/material';
import {styled} from '@mui/system';

export const SubmitAnswerButton = styled(Button) ({
    color: "white",
    variant: "contained",
    borderRadius: '1rem',
    background: 'black',
    height: '6rem',
    marginTop: '13rem',
    '&:hover': {
        background: '#6AB181'
    }
});

export const TextInputField = styled(TextField)({
    width: '60%',
    // Adjust the height by increasing padding and possibly the line-height
    '& .MuiInputBase-root': {
        height: '80%',
        padding: '20px', // Adjust this value as needed
        lineHeight: '1.5', // For multiline text fields, adjust line height if needed
    },
    // If you are using outlined variant, you might need to adjust the height of notched outline as well
    '& .MuiOutlinedInput-notchedOutline': {
        height: '30vh',
    },
    '& .MuiInputBase-inputMultiline': {
        whiteSpace: 'pre-wrap', // Ensures wrapping of text
    },
});


export const QuestionTypography = styled(Typography) ({
    fontFamily: "Kreon", fontSize: "5rem", paddingTop: "13%"
})