import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	scroll: {
		backgroundColor: '#FFFFFF',
	},
	screen: {
		flex: 1,
		alignItems: 'center',
		padding: 24,
		paddingBottom: 32,
		paddingTop: 32,
		gap: 16,
		backgroundColor: '#FFFFFF',
	},

	// for different kinds of sections
	section: {
		width: '100%',
		gap: 8,
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
		paddingTop: 20,
		paddingBottom: 20,
		gap: 8,
		backgroundColor: '#FFFFFF',
		borderRadius: 16,

		// border
		borderWidth: 1,
		borderColor: '#d2e8fc',

		// shadow
		shadowColor: '#000',
  		shadowOffset: { width: 0, height: 1 },
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
	subtitle: {
		fontWeight: 'bold',
		paddingTop: 8,
		paddingBottom: 16,
		fontSize: 16,
		textAlign: 'left',
		color: '#007AFF',
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
		paddingBottom: 8,
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

	button2: {
		width: '100%',
		padding: 6,
		marginTop: 16,
		alignItems: 'center',
		backgroundColor: '#d2e8fc',
		borderRadius: 16,
	},
	button2Pressed: {
		backgroundColor: '#b7dafa',
	},
	button2Text: {
		// fontWeight: 'bold',
	},

	button3: {
		width: '100%',
		padding: 8,
		// marginTop: 16,
		alignItems: 'center',
		backgroundColor: '#007AFF',
		borderRadius: 16,
	},
	button3Pressed: {
		backgroundColor: '#b7dafa',
	},
	
	// individual pages
	onboarding: {
		gap: 48,
		padding: 32,
		paddingTop: 96,
		backgroundColor: '#a0dedd',
	},
	sectionOnboarding: {
		gap: 16,
	},
	loginScreen: {
		paddingTop: 72,
	},
})