import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    input: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
    },
    menuItem: {
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}));

export default useStyles;