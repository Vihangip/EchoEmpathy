import {Button, TextField, Typography} from '@mui/material';
import {styled} from '@mui/system';

export const SubmitAnswerButton = styled(Button) ({
    display: 'inline-block',
    padding: '0.6em 0.8em',
    border: '0.1em solid #679D64',
    margin: '5em 0.3em 7em 0.3em',
    borderRadius: '0.12em',
    boxSizing: 'border-box',
    textDecoration: 'none',
    fontFamily: "Kreon",
    fontWeight: '300',
    color: '#679D64',
    textAlign: 'center',
    fontSize: '1.5rem',
    transition: 'all 0.2s',
    '&:hover': {
        color: '#E5F8E4',
        background: '#9DD19A',
    },
    '@media (max-width: 30em)': {
        display: 'block',
        margin: '0.4em auto',
    },
});

export const TextInputField = styled(TextField)({
    width: '80%',
    // Adjust the height by increasing padding and possibly the line-height
    '& .MuiInputBase-root': {
        height: '120%',
        padding: '20px', // Adjust this value as needed
        lineHeight: '1.5', // For multiline text fields, adjust line height if needed
    },
    // If you are using outlined variant, you might need to adjust the height of notched outline as well
    '& .MuiOutlinedInput-notchedOutline': {
        height: 'auto',
    },
    '& .MuiInputBase-inputMultiline': {
        whiteSpace: 'pre-wrap', // Ensures wrapping of text
    },
});


export const QuestionTypography = styled(Typography) ({
    fontFamily: "Kreon", fontSize: "5rem", paddingTop: "13%"
})