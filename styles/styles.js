import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		padding: 24,
	},
	section: {
		width: '100%',
		gap: 16,
		alignItems: 'center',
		marginBottom: 24,
	},
	titleText: {
		fontWeight: 'bold',	
		fontSize: 18,
		textAlign: 'center',
		color: '#db2525',
	},
	centeredText: {
		textAlign: 'center',
	},
	button: {
		width: '100%',
		padding: 8,
		alignItems: 'center',
		backgroundColor: '#db2525',
		borderRadius: 16,
	},
	buttonHover: {
		backgroundColor: '#ba1c1c',
	},
	buttonText: {
		fontWeight: 'bold',
		color: '#FFFFFF',
	},
	onboarding: {
		gap: 16,
		padding: 32,
		paddingTop: 96,
		backgroundColor: '#a0dedd',
	}
})