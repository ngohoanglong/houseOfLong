import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import brown from '@material-ui/core/colors/brown';
import { ThemeProvider, useTheme, makeStyles } from '@material-ui/styles';
import { Button, Container } from '@material-ui/core';
const theme = createMuiTheme({
  palette: {
    type:"dark",
    primary: indigo,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },

  overrides: {
    MuiButton: {
      root: {
        lineHeight: 1.3,
        textTransform:'unset'
      },
      contained:{
        boxShadow:'none'
      }
    },
  },
});
const useLayoutStyles = makeStyles(theme => {
  console.log({theme})
  return ({
  wrap: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  header:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width:70,
    background:theme.palette.grey[900],   position:'sticky',
    top:0,
    height:'100vh',
    overflow:'auto'
  },
  headerItem:{
    flexShrink:0,
    borderRadius:'50%',
    justifyContent:'center',
    transition:'border-radius 0.15s linear',
    fontSize:'1.2em',
    fontWeight:'bold',
    marginTop:theme.spacing(2),
    width:50,height:50,lineHeight:'50px',textAlign:'center',
    display:'flex',
    background:theme.palette.common.white,
    '&:hover': {
      borderRadius:theme.spacing(1),
   },
  },
 
  nav:{
    position:'sticky',
    top:0,
    height:'100vh',
    width:250,
    background:theme.palette.grey[800]
  },
  content:{
    whiteSpace:'pre',
    flex:1,
    display:'flex',
    flexDirection:'column',
    color:theme.palette.text.primary,
    background:theme.palette.grey[600],
  }
  ,contentHeader:{
    height:50,
    background:theme.palette.grey[700],
    position:'sticky',
    top:0
  }
})});
const Header =()=>{
  const classes  = useLayoutStyles();
  return <div className={classes.header}>
    {
      new Array(7).fill(true).map((_,i)=>{
        return (
          <div key={i} className={classes.headerItem}>{i}</div>
        )
      })  
    }
  </div>
}
const Nav =()=>{
  const classes  = useLayoutStyles();
  return <div className={classes.nav}/>
}
const Content =(props)=>{
  const classes  = useLayoutStyles();
  return <div className={classes.content} {...props}/>
}
const ContentHeader =(props)=>{
  const classes  = useLayoutStyles();
  return <div className={classes.contentHeader} {...props}/>
}
const Layout = ()=>{
  const classes  = useLayoutStyles();
  return <div className={classes.wrap}>
    <Header/>
    <Nav></Nav>
    <Content>
      <ContentHeader/>
      <Container maxWidth="md">
      {JSON.stringify(theme,null,2)}
      </Container>
      
    </Content>
  </div>
  }
function App() {
  return (
    <ThemeProvider theme={theme}>
       <Layout/>
    </ThemeProvider>
  );
}

export default App;
