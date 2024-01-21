import {Button, TextField, Typography} from '@mui/material';
import {styled} from '@mui/system';

export const SubmitAnswerButton = styled(Button) ({
    color: "white",
    variant: "contained",
    borderRadius: '1rem',
    background: 'black',
    height: '8rem',
    '&:hover': {
        background: '#6AB181'
    }
});

export const TextInputField = styled(TextField) ({
    width: '60%'
})

export const QuestionTypography = styled(Typography) ({
    fontFamily: "Kreon", fontSize: "5rem", paddingTop: "13%"
})