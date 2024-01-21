import {Button} from '@mui/material';
import {styled} from '@mui/system';

export const AnotherThoughtButton = styled(Button) ({
    display: 'inline-block',
    padding: '0.4em 0.6em',
    border: '0.1em solid #679D64',
    margin: '2em 0.2em 3em 0.2em',
    borderRadius: '0.1em',
    boxSizing: 'border-box',
    textDecoration: 'none',
    fontFamily: "Kreon",
    fontWeight: '300',
    color: '#679D64',
    textAlign: 'center',
    fontSize: '1.2rem',
    transition: 'all 0.2s',
    '&:hover': {
        color: '#E5F8E4',
        background: '#9DD19A',
    },
    '@media (max-width: 30em)': {
        display: 'block',
        margin: '0.2em auto',
    },
});