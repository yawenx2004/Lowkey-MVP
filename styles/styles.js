import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		padding: 24,
		gap: 24,
	},

	// for different kinds of sections
	section: {
		width: '100%',
		gap: 12,
		// alignItems: 'center',
	},
	sectionCentered: {
		alignItems: 'center',
	},
	sectionNarrow: {
		width: '90%',
	},
	sectionOutlined: {
		width: '100%',
		padding: 16,
		gap: 12,
		backgroundColor: '#FFFFFF',
		borderRadius: 16,

		// shadow
		shadowColor: '#000',
  		shadowOffset: { width: 0, height: 2 },
  		shadowOpacity: 0.25,
  		shadowRadius: 2,
	},

	// various text types
	text: {
		fontSize: 14,
		textAlign: 'left',
	},
	textLarge: {
		fontSize: 16,
		textAlign: 'left',
	},
	h1: {
		fontWeight: 'bold',	
		fontSize: 20,
		// textAlign: 'center',
		color: '#db2525',
	},
	h2: {
		fontWeight: 'bold',	
		fontSize: 18,
		// textAlign: 'center',
		color: '#db2525',
	},
	h3: {
		fontWeight: 'bold',	
		fontSize: 18,
		// textAlign: 'center',
	},
	centeredText: {
		textAlign: 'center',
	},

	// buttons
	button: {
		width: '100%',
		padding: 8,
		alignItems: 'center',
		backgroundColor: '#db2525',
		borderRadius: 16,

		// shadow
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

	// individual pages
	onboarding: {
		gap: 48,
		padding: 32,
		paddingTop: 96,
		backgroundColor: '#a0dedd',
	},
	loginScreen: {
		paddingTop: 96,
	},
})