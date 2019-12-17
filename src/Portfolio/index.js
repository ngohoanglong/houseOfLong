import { useTheme } from '@material-ui/styles';
import React, { useEffect, useRef, useState } from 'react';
import { animated, useChain, useSpring, useTrail } from 'react-spring';
import 'tailwindcss/dist/tailwind.min.css';
import '../assets/css/animate.css';
import './index.css';
import { WordCloud } from './WordCloud';

const useScroll = (
	element = window,
	handler
) => {
	useEffect(() => {
		window.addEventListener(
			'scroll',
			handler
		);

		return () =>
			window.removeEventListener(
				'scroll',
				handler
			);
	}, []);
};
const Skills = () => {
	return (
		<div className="pl-8">
			<h1
				style={{
					whiteSpace: 'pre-wrap',
					fontSize: '3.4vw',
					display: 'block',
					maxWidth: '15ch'
				}}
				className="leading-none font-bold">
				Skills & Experience
			</h1>
		</div>
	);
};
const array = [
	'Home',
	'About',
	'Skills',
	'Contact'
];
const items = Object.values(
	`Hi,/I'm long,/web developer.`
);
const config = {
	mass: 1,
	tension: 2000,
	friction: 150
};
const useIntersection = (
	ref,
	options
) => {
	const [
		intersectionObserverEntry,
		setIntersectionObserverEntry
	] = useState(null);
	useEffect(() => {
		if (ref.current) {
			const handler = entries => {
				setIntersectionObserverEntry(
					entries[0]
				);
			};

			const observer = new IntersectionObserver(
				handler,
				options
			);
			observer.observe(ref.current);

			return () => {
				if (ref.current) {
					observer.disconnect();
				}
			};
		}
		return () => {};
	}, [
		ref,
		options.threshold,
		options.root,
		options.rootMargin
	]);

	return intersectionObserverEntry;
};
const HomeContent = ({}) => {
	const intersectionRef = React.useRef(
		null
	);
	const intersection = useIntersection(
		intersectionRef,
		{
			root: null,
			rootMargin: '0px',
			threshold: 1
		}
	);
	const visible =
		intersection &&
		intersection.intersectionRatio >= 1;
	const headerRef = useRef();
	const trail = useTrail(items.length, {
		ref: headerRef,
		config,
		opacity: visible ? 1 : 0,
		xyz: visible
			? [1, 1, 1]
			: [0, 0, 0],
		from: {
			opacity: 0,
			xyz: [0, 0, 0]
		}
	});
	const subRef = useRef();
	const subStyles = useSpring({
		ref: subRef,
		config: {
			mass: 1,
			tension: 150,
			friction: 150
		},
		opacity: visible ? 1 : 0,
		from: { opacity: 0 },
		to: { opacity: visible ? 0.5 : 0 }
	});
	const buttonRef = useRef();
	const buttonStyles = useSpring({
		ref: buttonRef,
		config: {
			mass: 1,
			tension: 150,
			friction: 150
		},
		opacity: visible ? 1 : 0,
		from: { opacity: 0 },
		to: { opacity: visible ? 1 : 0 }
	});
	useChain(
		[headerRef, subRef, buttonRef],
		[0, 0.7, 1]
	);
	return (
		<div
			ref={intersectionRef}
			className="pl-8">
			<h1
				style={{
					whiteSpace: 'pre-wrap',
					fontSize: '3.4vw',
					display: 'block',
					maxWidth: '15ch'
				}}
				className="leading-none font-bold">
				{trail.map(
					(
						{ xyz, className, ...rest },
						index
					) =>
						items[index] === '/' ? (
							<br key={index} />
						) : (
							<animated.span
								onMouseEnter={e => {
									const element =
										e.target;
									element.classList.add(
										'hoverring',
										'text-blue-500'
									);

									setTimeout(
										() =>
											element.classList.remove(
												'hoverring',
												'text-blue-500'
											),
										1000
									);
								}}
								className="inline-block item"
								key={index}
								style={{
									...rest,
									transform: xyz
										.interpolate({
											range: [
												0,
												0.3,
												0.4,
												0.5,
												0.65,
												0.75,
												1
											],
											output: [
												'1, 1, 1',
												'1.25, 0.75, 1',
												'0.75, 1.25, 1',
												'1.15, 0.85, 1',
												'0.95, 1.05, 1',
												'1.05, 0.95, 1',
												'1, 1, 1'
											]
										})
										.interpolate(
											(x, y, z) =>
												`scale3d(${x})`
										)
								}}>
								{items[index]}
							</animated.span>
						)
				)}
			</h1>
			<animated.h2
				style={{
					fontSize: '1.2vw',
					...subStyles,
					letterSpacing: '0.24em'
				}}
				className="mt-4 opacity-50 text-lg ">
				Front End Developer / WordPress
				Expert / Freelancer
			</animated.h2>
			<animated.div
				style={{
					...buttonStyles,
					letterSpacing: '0.25em'
				}}
				className="inline-block mt-8 px-4 py-2 border text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white">
				CONTACT ME
			</animated.div>
			<div>
				<div
					style={{
						width: '800px',
						maxWidth: '70%',
						height: 300
					}}
					className="absolute WordCloud bottom-0 right-0 flex justify-center items-center">
					<WordCloud />
				</div>
			</div>
		</div>
	);
};
const Contact = ({}) => {
	const intersectionRef = React.useRef(
		null
	);
	const intersection = useIntersection(
		intersectionRef,
		{
			root: null,
			rootMargin: '0px',
			threshold: 1
		}
	);
	const visible =
		intersection &&
		intersection.intersectionRatio >= 1;
	const headerRef = useRef();
	const trail = useTrail(
		'Contact'.length,
		{
			ref: headerRef,
			config,
			opacity: visible ? 1 : 0,
			xyz: visible
				? [1, 1, 1]
				: [0, 0, 0],
			from: {
				opacity: 0,
				xyz: [0, 0, 0]
			}
		}
	);
	const subRef = useRef();
	const subStyles = useSpring({
		ref: subRef,
		config: {
			mass: 1,
			tension: 150,
			friction: 150
		},
		opacity: visible ? 1 : 0,
		from: { opacity: 0 },
		to: { opacity: visible ? 1 : 0 }
	});
	const formRef = useRef();
	const formtrail = useTrail(5, {
		ref: formRef,
		config,
		opacity: visible ? 1 : 0,
		x: visible ? 0 : 100,
		from: {
			opacity: 0,
			x: 100
		}
	});
	useChain(
		[headerRef, subRef, formRef],
		[0, 0.7, 1.3]
	);

	return (
		<>
			<div>
				<div
					style={{
						borderRadius:'100% 0 0 0',
						overflow:'hidden',
						width: '100%',
						height: '100%',
						filter:'gra'
					}}
					className="absolute top-0 right-0  flex justify-center items-center"
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501540.41609239514!2d106.1252766736268!3d10.865952362601895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1576088953457!5m2!1svi!2s" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>`
					}}></div>
			</div>
			<div className="pointer-events-none">
				<div
					style={{
						borderRadius:'100% 0 0 0',
						overflow:'hidden',
						width: '100%',
						height: '100%',
						backdropFilter: 'grayscale(1)',
    background: '#0000008c',
						boxShadow:         'inset 0 0 10px #000000'
					}}
					className="absolute shadow top-0 right-0  flex justify-center items-center"
				></div>
			</div>
			<div
				ref={intersectionRef}
				className="pl-8 max-w-lg z-10">
				<h1
					style={{
						whiteSpace: 'pre-wrap',
						fontSize: '4.4vw',
						display: 'block',
						maxWidth: '15ch'
					}}
					className="leading-none font-bold">
					{trail.map(
						(
							{
								xyz,
								className,
								...rest
							},
							index
						) =>
							'Contact'[index] ===
							'/' ? (
								<br />
							) : (
								<animated.span
									onMouseEnter={e => {
										const element =
											e.target;
										element.classList.add(
											'hoverring'
										);

										setTimeout(
											() =>
												element.classList.remove(
													'hoverring'
												),
											1000
										);
									}}
									className="inline-block item text-blue-500"
									key={index}
									style={{
										...rest,
										transform: xyz
											.interpolate({
												range: [
													0,
													0.3,
													0.4,
													0.5,
													0.65,
													0.75,
													1
												],
												output: [
													'1, 1, 1',
													'1.25, 0.75, 1',
													'0.75, 1.25, 1',
													'1.15, 0.85, 1',
													'0.95, 1.05, 1',
													'1.05, 0.95, 1',
													'1, 1, 1'
												]
											})
											.interpolate(
												(x, y, z) =>
													`scale3d(${x})`
											)
									}}>
									{'Contact'[index]}
								</animated.span>
							)
					)}
				</h1>
				<animated.h2
					style={{
						fontSize: '1vw',
						...subStyles,
						letterSpacing: '0.24em'
					}}
					className="mt-4 opacity-100 text-white  whitespace-pre-wrap">
					I am interested in freelance
					opportunities – especially
					ambitious or large projects.
					However, if you have other
					request or question, don’t
					hesitate to contact me using
					below form either.
				</animated.h2>
				<form
					autoComplete="off"
					className="contact w-full text-black flex flex-wrap mt-8 -mx-2">
					<div
						style={{
							border:
								'0.25rem solid transparent',
							width: '50%'
						}}
						className="flex-1">
						<animated.input
							style={{
								...formtrail[0],
								transform: formtrail[0].x.interpolate(
									x =>
										`translate3d(0,${x}px,0)`
								)
							}}
							class={
								'p-3 w-full bg-gray-900'
							}
							name="name"
							placeholder="name"
						/>
						<label />
					</div>
					<div
						style={{
							border:
								'0.25rem solid transparent',
							width: '50%'
						}}
						className="flex-1">
						<animated.input
							style={{
								...formtrail[1],
								transform: formtrail[1].x.interpolate(
									x =>
										`translate3d(0,${x}px,0)`
								)
							}}
							class={
								'p-3 w-full bg-gray-900'
							}
							name="email"
							placeholder="email"
						/>
						<label />
					</div>
					<div
						style={{
							border:
								'0.25rem solid transparent'
						}}
						className="w-full">
						<animated.input
							style={{
								...formtrail[2],
								transform: formtrail[2].x.interpolate(
									x =>
										`translate3d(0,${x}px,0)`
								)
							}}
							className={
								'p-3 w-full bg-gray-900'
							}
							name="message"
							placeholder="message"
						/>
						<label />
					</div>
					<div
						style={{
							border:
								'0.25rem solid transparent'
						}}
						className="w-full">
						<animated.textarea
							style={{
								...formtrail[3],
								transform: formtrail[3].x.interpolate(
									x =>
										`translate3d(0,${x}px,0)`
								)
							}}
							className={
								'p-3 w-full h-full bg-gray-900'
							}
							name="subject"
							placeholder="subject"
						/>
						<label />
					</div>
					<div
						style={{
							border:
								'0.25rem solid transparent'
						}}
						className="w-full flex justify-end">
						<animated.button
							style={{
								...formtrail[4],
								transform: formtrail[4].x.interpolate(
									x =>
										`translate3d(0,${x}px,0)`
								)
							}}
							class="mt-2 px-6 py-1  bg-blue-500 text-white font-bold">
							Send
						</animated.button>
					</div>
				</form>
			</div>
		</>
	);
};
const PageWrap = ({
	title,
	index,
	children
}) => {
	return (
		<div className="w-full  h-full flex-col flex pl-4 absolute top-0 left-0">
			<div
				style={{
					paddingTop: 50
				}}
				className="relative ">
				<div className="flex absolute top-0 left-0 justify-center right-0">
					{array.map((value, y) => (
						<div
							style={{
								height: 50,
								width: 80
							}}
							className="font-bold flex justify-center items-center"
							key={value}>
							{y === index ? (
								<a
									href={`#${value}`}
									className="jsCode"
									style={{
										fontSize: '1.2em',
										fontWeight: 'bold',
										opacity: 1
									}}>
									{value}
									<span className="jsCode">
										.js
									</span>
								</a>
							) : (
								<a
									href={`#${value}`}
									className="jsCode"
									style={{
										fontSize: '1.2em',
										fontWeight: 'bold'
									}}>
									{value}
									<span className="jsCode">
										.js
									</span>
								</a>
							)}
						</div>
					))}
				</div>
				<div className="jsCode ">
					const
				</div>
				<div className="pl-4">
					<span
						style={{
							opacity: 1,
							fontSize: '2vw'
						}}
						className="font-bold jsCode capitalize">
						{title}{' '}
					</span>
					<span className="jsCode ">
						( )
					</span>
				</div>
			</div>
			{
				<div className="flex-1 flex flex-col justify-center">
					<div className="jsCode ">
						{'{'}
					</div>
					<div className="jsCode pl-4">
						return
					</div>
					{children}
					<div className="jsCode ">
						{'}'}
					</div>
				</div>
			}
			<div className="">
				<span className="jsCode">
					export default{' '}
				</span>
				<span
					className="jsCode capitalize"
					style={{
						opacity: 1
					}}>
					{title}
				</span>
			</div>
		</div>
	);
};
function Portfolio() {
	const theme = useTheme();
	const themeType = theme.palette.type;
	const background =
		themeType === 'dark'
			? `rgba(0, 0, 0, 0.68)`
			: `rgba(0, 0, 0, 0.18)`;

	const horizontalScrollerRef = useRef();
	useScroll(window, e => {
		const percent =
			e.srcElement.scrollingElement
				.scrollTop /
			e.srcElement.scrollingElement
				.scrollHeight;
		horizontalScrollerRef.current.scrollLeft =
			percent *
			horizontalScrollerRef.current
				.scrollWidth;
	});
	const [e, setE] = useState();
	useEffect(() => {
		setE(
			<div
				style={{ background }}
				className="w-full h-full flex items-start cursor-default">
				<div className="flex-1 w-full relative">
					<div id="Home" />
					<div
						style={{
							scrollSnapType:
								' x mandatory'
						}}
						ref={horizontalScrollerRef}
						className="w-full absolute top-0 left-0 h-screen flex h-screen overflow-hidden  sticky ">
						{array.map((value, i) => (
							<div
								key={i}
								style={{
									scrollSnapAlign:
										'start'
								}}
								className="w-full h-full overflow-hidden  flex-shrink-0 relative">
								<PageWrap
									index={i}
									title={value}>
									{i === 0 ? (
										<HomeContent />
									) : i === 2 ? (
										<Skills />
									) : i === 3 ? (
										<Contact />
									) : (
										<div className="pl-8">
											<h1
												style={{
													whiteSpace:
														'pre-wrap',
													fontSize:
														'3.4vw',
													display:
														'block',
													maxWidth:
														'15ch'
												}}
												className="leading-none font-bold">
												{value}
											</h1>
										</div>
									)}
								</PageWrap>
							</div>
						))}
					</div>
					{array
						.filter(
							value =>
								value !== array[0]
						)
						.map((v, i) => (
							<div
								id={v}
								key={i}
								style={{
									height: `100vh`
								}}
							/>
						))}
				</div>
			</div>
		);
	}, [themeType]);
	if (!e) return null;
	return e;
}

export default Portfolio;
