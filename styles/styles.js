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
	},
	sectionNarrow: {
		width: '90%',
	},
	text: {
		fontSize: 16,
	},
	titleText: {
		fontWeight: 'bold',	
		fontSize: 20,
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

		shadowColor: '#000',
  		shadowOffset: { width: 0, height: 2 },
  		shadowOpacity: 0.25,
  		shadowRadius: 2,
	},
	buttonPressed: {
		backgroundColor: '#ba1c1c',
	},
	buttonGetStarted: {
		width: '50%',
		padding: 12,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFFFFF',
	},
	onboarding: {
		gap: 48,
		padding: 32,
		paddingTop: 96,
		backgroundColor: '#a0dedd',
	}
})