import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/grid';

//plugin for item list
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	Paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function SimpleContainer() {
	const classes = useStyles();

	return (
	<React.Fragment>
	  <CssBaseline />
	  	<Container maxWidth="sm" style={{ backgroundColor: 'red', height: '100%' }}>
		    <Container maxWidth="sm" style={{ backgroundColor: 'blue', height: '50vh' }}>
		    	<h1>HEADER</h1>
		  	</Container>
		  	<Container maxWidth="sm" style={{ backgroundColor: 'orange', height: '50vh' }}>
		  		<h1>BODY</h1>
		  	</Container>
		  	<Container maxWidth="sm" style={{ backgroundColor: '#354147', height: '50vh' }}>
		  		<h1>FOOTER</h1>
		  	</Container>
		  	<Container maxWidth="sm" style={{ backgroundColor: '#354147', height: '50vh' }}>
		  		<div className={classes.root}>
		  			<Grid container spacing={2}>
		  				<Grid item xs={12} sm={6}>
		  					<Paper className={classes.paper}>
		  						<h1>MNTN</h1>
		  						<p>
		  							Get out there & discover your next slope, mountain & destination!
		  						</p>
		  						<p>
		  							Copyright 2019 MNTN, Inc. Terms & Privacy
		  						</p>
		  					</Paper>
		  				</Grid>
		  				<Grid item xs={6} sm={3}>
		  					<Paper className={classes.paper}>

		  					</Paper>
		  				</Grid>
		  			</Grid>
		  		</div>
		  	</Container>
		</Container>
	</React.Fragment>
	);
}