import { Container, Tooltip } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import palette from 'google-palette';
import React, { useContext, useState } from 'react';

const createTheme =	(main, secondary,type="light") =>
createMuiTheme({
  palette: {
    type,
    primary: {
      main
    },
    secondary: {
      main: secondary
    },
    error: red
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    // contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    // tonalOffset: 0.2
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'unset'
      },

      contained: {
        boxShadow: 'none'
      }
    }
  }
})
const colors =  palette('cb-Dark2',8).map(str=>'#'+str)
const colorPairs = colors.reduce((result,value,i)=>{
  if(i%2===0){
    result.push([colors[i],colors[i+1]])
  }
  return result
},[]);

const useLayoutStyles = makeStyles(
	theme => {
		console.log({ theme });
		const type = theme.palette.type
		const [bgHeader,bgNav,bgContentHeader,bgcontent]=type==="dark"?[
			900,800,700,600
		]:[
			300,200,100,50
		]
		return {
			wrap: {
				display: 'flex',
				minWidth: 300,
				width: '100%'
			},
			header: {
        transition:'background 0.5s linear',
				display: 'flex',
				flexShrink:0,
				flexDirection: 'column',
				alignItems: 'center',
				width: 70,
				background:
        theme.palette.grey[bgHeader],
				position: 'sticky',
				top: 0,
				height: '100vh',
				overflow: 'auto'
			},
			headerItem: {
				cursor:'pointer',
				flexShrink: 0,
				borderRadius: '50%',
				justifyContent: 'center',
				transition:
					'border-radius 0.15s linear',
				fontSize: '1.2em',
				fontWeight: 'bold',
				marginTop: theme.spacing(2),
				width: 50,
				height: 50,
				lineHeight: '50px',
				textAlign: 'center',
				display: 'flex',
				background:
					theme.palette.common.white,
				'&:hover': {
					borderRadius: theme.spacing(2)
				}
			},

			nav: {
				flexShrink:0,
				position: 'sticky',
				top: 0,
				height: '100vh',
				width: 250,
				background:
				theme.palette.grey[bgNav],
       
			},
			content: {
				whiteSpace: 'pre',
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				color:
					theme.palette.text.primary,
				background:
				theme.palette.grey[bgcontent],
			},
			contentHeader: {
				zIndex:theme.zIndex.appBar,
				height: 50,
				position: 'sticky',
				top: 0,	background:
				theme.palette.grey[bgcontent],

         borderBottom:`1px solid ${theme.palette.grey[bgContentHeader]}`
			}
		};
	}
);
const Header = () => {
	const {push} = useContext(RouterContext)
	const {setThemeType} = useContext(OpenStotyThemContext)
	const classes = useLayoutStyles();
	const domains= ['api','blog','music','theme']
	return (
		<div className={classes.header}>
			{colorPairs.map(([main,secondary], i) => {
				return (
					<Tooltip key={i} title={domains[i]} placement="right">
              <div
						onClick={() => push(domains[i])}
						key={i}
						style={{
							background: main,color:'#fff'
						}}
						className={
							classes.headerItem
						}>{domains[i]}</div>
            </Tooltip>
					
				);
			})}
			<Tooltip title="dark||light" placement="right">
              <div
						onClick={setThemeType}
						
						style={{
							background: '#000',color:'#fff'
						}}
						className={
							classes.headerItem
						}></div>
            </Tooltip>
		</div>
	);
};
const Nav = (props) => {
	const classes = useLayoutStyles();
	return (
		<div className={classes.nav}{...props} />
	);
};
const Content = props => {
	const classes = useLayoutStyles();
	return (
		<div
			className={classes.content}
			{...props}
		/>
	);
};
const ContentHeader = props => {
	const classes = useLayoutStyles();
	return (
		<div
			className={classes.contentHeader}
			{...props}
		/>
	);
};
const Layout = (props) => {
	const classes = useLayoutStyles();
	return (
		<div className={classes.wrap} {...props}>
			
		</div>
	);
};
const OpenStotyThemContext = React.createContext()
const OpenStotyThemeProvider = ({initialValues={theme:0,themeType:'dark'},children})=>{
	const [theme, setTheme] = useState(initialValues.theme);
	const [themeType, setThemeType] = useState(initialValues.themeType);
	const [main,secound] =colorPairs[theme]
	return <ThemeProvider
			theme={createTheme(main,secound,themeType)} >
			<OpenStotyThemContext.Provider value={{setTheme,
							setThemeType:()=>setThemeType(themeType==='dark'?'light':'dark') }}>
					{children}
			</OpenStotyThemContext.Provider>
		</ThemeProvider>
}
const renderRoute = (route)=>{
	const {routes,...rest} = route
	return <Route {...rest}>
		{
			routes?routes.map(route=>renderRoute(route)):null
		}
	</Route> 
}
const routes = [{
	path:'',
	component:Layout,
	routes:[
		{path:'api',
		component:()=><>
			<Header  />
			<Nav></Nav>
			<Content>
				<ContentHeader />
				<Container maxWidth="md">
					API
				</Container>
			</Content>
		</>
	},
	{path:'blog',
		component:()=><>
			<Header  />
			<Nav></Nav>
			<Content>
				<ContentHeader />
				<Container maxWidth="md">
					BLOG
				</Container>
			</Content>
		</>
	},
	{path:'music',
	component:()=><>
		<Header  />
		<Nav></Nav>
		<Content>
			<ContentHeader />
			<Container maxWidth="md">
				MUSIC
			</Container>
		</Content>
	</>
},
{path:'theme',
component:()=><>
	<Header  />
	<Nav></Nav>
	<Content>
		<ContentHeader />
		<Container maxWidth="md">
			THEME
		</Container>
	</Content>
</>
}
	]
}]
const Route = ({path,component,children})=>{
	const {location} = useContext(RouterContext)
	if(location.pathname.search(path)!==0) return null
	return React.createElement(component,{children})
}
const RouterContext =React.createContext()
const RouterProvider = ({initialValues={location:{
	pathname:'api'
}},...props})=>{
	const [location,setLocation] = useState(initialValues.location)
	const push = pathname =>  setLocation({pathname})
	return <RouterContext.Provider value={{location,push}} {...props}/>
}
function App() {
	return (
		<RouterProvider>
			<OpenStotyThemeProvider>
				{routes.map(route=>renderRoute(route))}
			</OpenStotyThemeProvider>
		</RouterProvider>
		
	);
}

export default App;
