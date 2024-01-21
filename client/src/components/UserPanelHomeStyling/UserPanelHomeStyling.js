import {Button} from '@mui/material';
import {styled} from '@mui/system';
import * as theme from "@mui/system";
import {Container} from "@mui/system"


// Use the `styled` function with a function that takes `theme` as an argument
// export const CustomAvatar = styled(Avatar)(({ theme }) => ({
//     width: theme.spacing(10),
//     height: theme.spacing(10),
//     marginBottom: theme.spacing(2),
// }));

export const CustomInnerContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
});

export const CustomOuterContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
});

export const CustomButton = styled(Button)({
    width: '30%',
});
