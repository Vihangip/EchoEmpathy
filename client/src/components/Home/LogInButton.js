import {Button} from '@mui/material';
import {styled} from '@mui/system';

export const LogInButton = styled(Button) ({
    color: "white",
    variant: "contained",
    borderRadius: '1rem',
    background: 'black',
    width: '8rem',
    '&:hover': {
        background: '#6AB181' // 'rgba(255, 105, 180, 0.80)'
    },
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 'auto'
});