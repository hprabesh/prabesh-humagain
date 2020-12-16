import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 430,
    margin: `${theme.spacing(10)}px auto`,
    marginLeft:`${theme.spacing(30)}px auto`,
    padding: theme.spacing(0),
    background:'transparent',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  toolbar: {
    minHeight: 40,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    justifyContentL:'center'
  },
  title: {
    flexGrow: 1,
    alignSelf: 'justify',
    marginRight:5,
    paddingTop:12,
  },
  AppBar:{
    border:2,
    borderRadius:15,
    borderColor:'red'
  },
  label: {
    // Aligns the content of the button vertically.
    flexDirection: 'column',

    fontSize:12,
    paddingRight:8,
    justifyContent: "space-between",
  },
  icon: {
    fontSize: '20px !important',
    marginBottom: theme.spacing.unit
  },
  button:{
    
  }
  
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="strong" noWrap>
            <strong>Let's Connect</strong>:
          </Typography>
          <Button aria-label="GitHub" color="inherit" href="https://github.com/hprabesh" target="_blank"  classes={{ root: classes.button, label: classes.label }} variant="text"><GitHubIcon className={classes.icon}/><strong>GitHub</strong></Button>
          <Button aria-label="LinkedIn" href="https://www.linkedin.com/in/hprabesh" target="_blank" edge="end" color="inherit" classes={{ root: classes.button, label: classes.label }} ><LinkedInIcon className={classes.icon}/><strong>LinkedIn</strong></Button>
          <Button aria-label="Instagram" href="https://www.instagram.com/prab3ssss/" target="_blank" edge="end" color="inherit" classes={{ root: classes.button, label: classes.label }} ><InstagramIcon className={classes.icon}/><strong>Instagram</strong></Button> 
        </Toolbar>
      </AppBar>
    </div>
  );
}
