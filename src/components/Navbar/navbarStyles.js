import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles(theme => ({
	[theme.breakpoints.down('sm')]: {
		appBar: {
			width: '100%!important',
			flexDirection: 'column!important',
			padding: '10px 10px!important',
		},
		toolbar: {
			maxWidth: '100%!important',
			justifyContent: 'center!important',
			padding: '0!important',
		},
	},

	appBar: {
		borderRadius: 15,
		margin: '30px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 50px',
	},
	heading: {
		color: 'rgba(0,183,255, 1)',
		textDecoration: 'none',
	},
	image: {
		marginLeft: '15px',
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'flex-end',
		width: '400px',
	},
	profile: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '400px',
	},
	userName: {
		display: 'flex',
		alignItems: 'center',
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
}));
