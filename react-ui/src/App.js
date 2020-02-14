import {
	Container,
	Tooltip
} from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';
import {
	makeStyles,
	ThemeProvider
} from '@material-ui/styles';
import palette from 'google-palette';
import React, {
	useContext,
	useEffect,
	useState
} from 'react';
import './assets/css/animate.css';
import './assets/css/tailwind.css';
import DarkLightToggle from './components/DarkLightToggle';
import Corona from './Corona';
import { logparams } from './logparams';
import PeriodicTable from './PeriodicTable/PeriodicTable';
import Portfolio from './Portfolio';
const createTheme = (
	main,
	secondary,
	type = 'light'
) =>
	createMuiTheme({
		palette: {
			type,
			primary: {
				main
			},
			secondary: {
				main: secondary
			},
			error: red,
			background: {}
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
	});
const colors = palette(
	'cb-Dark2',
	8
).map(str => '#' + str);
const colorPairs = colors.reduce(
	(result, value, i) => {
		if (i % 2 === 0) {
			result.push([
				colors[i],
				colors[i + 1]
			]);
		}
		return result;
	},
	[]
);

const useLayoutStyles = makeStyles(
	theme => {
		console.log({ theme });
		const type = theme.palette.type;
		const [
			bgHeader,
			bgNav,
			bgContentHeader,
			bgcontent
		] =
			type === 'dark'
				? [900, 800, 700, 600]
				: [300, 200, 100, 50];
		return {
			wrap: {
				display: 'flex',
				minWidth: 300,
				width: '100%'
			},
			header: {
				overflowX: 'hidden',
				transition:
					'background 0.5s linear',
				display: 'flex',
				flexShrink: 0,
				flexDirection: 'column',
				alignItems: 'center',
				maxWidth: 70,
				width: '4em',
				background:
					theme.palette.grey[bgHeader],
				position: 'sticky',
				top: 0,
				height: '100vh',
				overflow: 'auto'
			},
			headerItem: {
				cursor: 'pointer',
				flexShrink: 0,
				borderRadius: '50%',
				justifyContent: 'center',
				transition:
					'border-radius 0.15s linear',
				fontSize: '1.2em',
				fontWeight: 'bold',
				marginTop: theme.spacing(2),
				width: '3.6em',
				height: '3.6em',
				lineHeight: '3.6em',
				textAlign: 'center',
				display: 'flex',
				background:
					theme.palette.common.white,
				'&:hover': {
					borderRadius: theme.spacing(2)
				}
			},

			nav: {
				flexShrink: 0,
				position: 'sticky',
				top: 0,
				height: '100vh',
				width: 250,
				background:
					theme.palette.grey[bgNav]
			},
			content: {
				// whiteSpace: 'pre',
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				color:
					theme.palette.text.primary,
				background:
					theme.palette.grey[bgcontent]
			},
			contentHeader: {
				zIndex: theme.zIndex.appBar,
				height: 50,
				position: 'sticky',
				top: 0,
				background:
					theme.palette.grey[bgcontent],
				borderBottom: `1px solid ${theme.palette.grey[bgContentHeader]}`
			}
		};
	}
);
const Header = () => {
	const { push } = useContext(
		RouterContext
	);
	const {
		themeType,
		setThemeType
	} = useContext(OpenStotyThemContext);
	const classes = useLayoutStyles();
	const domains = [
		'Periodic',
		'portfolio',
		'blog',
		'corona'
	];
	return (
		<div className={classes.header}>
			{colorPairs.map(
				([main, secondary], i) => {
					return (
						<Tooltip
							key={i}
							title={domains[i]}
							placement="right">
							<div
								onClick={() =>
									push(domains[i])
								}
								key={i}
								style={{
									fontSize: '14px',
									background: main,
									color: '#fff'
								}}
								className={
									classes.headerItem
								}>
								{domains[i]}
							</div>
						</Tooltip>
					);
				}
			)}
			<Tooltip
				title="dark / light"
				placement="right">
				<div
					style={{
						marginTop: '16px'
					}}>
					<DarkLightToggle
						onChange={setThemeType}
					/>
				</div>
			</Tooltip>
		</div>
	);
};
const Nav = props => {
	const classes = useLayoutStyles();
	return (
		<div
			className={classes.nav}
			{...props}
		/>
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
const Layout = props => {
	const classes = useLayoutStyles();
	return (
		<div
			className={classes.wrap}
			{...props}></div>
	);
};
const OpenStotyThemContext = React.createContext();
const OpenStotyThemeProvider = ({
	initialValues = {
		theme: 0,
		themeType: 'dark'
	},
	children
}) => {
	const [theme, setTheme] = useState(
		initialValues.theme
	);
	const [
		themeType,
		setThemeType
	] = useState(initialValues.themeType);
	const [main, secound] = colorPairs[
		theme
	];
	return (
		<ThemeProvider
			theme={createTheme(
				main,
				secound,
				themeType
			)}>
			<OpenStotyThemContext.Provider
				value={{
					themeType,
					setTheme,
					setThemeType: () =>
						setThemeType(
							themeType === 'dark'
								? 'light'
								: 'dark'
						)
				}}>
				{children}
			</OpenStotyThemContext.Provider>
		</ThemeProvider>
	);
};
const Switch = ({ children }) => {
	const { location } = useContext(
		RouterContext
	);
	const pathname =
		location.pathname || 'portfolio';
	return (
		children.find(e =>
			logparams(
				logparams(
					e
				).props.path.includes(
					logparams(pathname)
				)
			)
		) || children[0]
	);
};
const renderRoute = route => {
	const { routes, ...rest } = route;
	return (
		<Route key={rest.path} {...rest}>
			<Switch>
				{routes
					? routes.map(route =>
							renderRoute(route)
					  )
					: null}
			</Switch>
		</Route>
	);
};
const routes = [
	{
		path: '',
		component: Layout,
		routes: [
			{
				path: 'portfolio',
				component: () => (
					<>
						<Header />
						<Content>
							<Portfolio />
						</Content>
					</>
				)
			},
			{
				path: 'blog',
				component: () => {
					return (
						<>
							<Header />
							<Nav></Nav>
							<Content>
								<ContentHeader />
								<Container maxWidth="md">
									BLOG
								</Container>
							</Content>
						</>
					);
				}
			},
			{
				path: 'corona',
				component: () => (
					<>
						<Header />
						<Content>
							<Corona />
						</Content>
					</>
				)
			},
			{
				path: 'Periodic',
				component: () => (
					<>
						<Header />
						<Content>
							<PeriodicTable />
						</Content>
					</>
				)
			}
		]
	}
];
const Route = ({
	path,
	component,
	children
}) => {
	return React.createElement(
		component,
		{ children }
	);
};
const RouterContext = React.createContext();

const createStorage = () => {
	const storage = {
		pathname:
			localStorage.getItem(
				'pathname'
			) || 'periodic'
	};
	const getPathname = () =>
		storage.pathname;
	const setPathname = pathname =>
		localStorage.setItem(
			'pathname',
			pathname
		);
	return {
		...storage,
		getPathname,
		setPathname
	};
};
const storage = createStorage();
const useStorage = () => {
	return storage;
};
const RouterProvider = props => {
	const storage = useStorage();
	const [
		location,
		setLocation
	] = useState({
		pathname:
			storage.getPathname() ||
			'Periodic'
	});
	useEffect(() => {
		storage.setPathname(
			location.pathname
		);
	}, [location.pathname]);
	const push = pathname => {
		switch (pathname) {
			case 'blog':
				window.location.href = '/blog';
				break;

			default:
				setLocation({ pathname });
				break;
		}
	};

	return (
		<RouterContext.Provider
			value={{ location, push }}
			{...props}
		/>
	);
};
function App() {
	return (
		<OpenStotyThemeProvider>
			<RouterProvider>
				{routes.map(renderRoute)}
			</RouterProvider>
		</OpenStotyThemeProvider>
	);
}

export default App;
