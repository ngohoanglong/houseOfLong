import React, {
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react';
import ReactDOM from 'react-dom';
import 'tailwindcss/dist/tailwind.min.css';
import './animate.css';
import {
	categoryColors,
	normalizePeriodicTableJSON
} from './PeriodicTableJSON';
const logparams = value => {
	console.log(value);
	return value;
};

/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(
	type,
	value,
	exp
) {
	// If the exp is undefined or zero...
	if (
		typeof exp === 'undefined' ||
		+exp === 0
	) {
		return Math[type](value);
	}
	value = +value;
	exp = +exp;
	// If the value is not a number or the exp is not an integer...
	if (
		isNaN(value) ||
		!(
			typeof exp === 'number' &&
			exp % 1 === 0
		)
	) {
		return NaN;
	}
	// Shift
	value = value.toString().split('e');
	value = Math[type](
		+(
			value[0] +
			'e' +
			(value[1]
				? +value[1] - exp
				: -exp)
		)
	);
	// Shift back
	value = value.toString().split('e');
	return +(
		value[0] +
		'e' +
		(value[1] ? +value[1] + exp : exp)
	);
}

// Decimal round
const round10 = (value, exp) =>
	decimalAdjust('round', value, exp);
// Decimal floor
const floor10 = (value, exp) =>
	decimalAdjust('floor', value, exp);
// Decimal ceil
const ceil10 = (value, exp) =>
	decimalAdjust('ceil', value, exp);
const Detail = ({
	domNode,
	element
}) => {
	const detail = (
		<div className="w-full  overflow-hidden relative shadow-2xl ">
			<div
				style={{ height: 200 }}
				className="justify-center p-4 items-start w-full flex">
				<div className="flex-1">
					<div className="font-semibold flex-1">
						{element.number}
					</div>
					<div
						className="font-bold flex-1"
						style={{
							fontSize: '60px'
						}}>
						{' '}
					</div>
					<div className="font-semibold flex-1">
						{Object.values(
							element.name
						).map((value, i) => (
							<span
								key={i}
								className="animated fadeInLeft faster">
								{value}
							</span>
						))}
					</div>
				</div>
				<div className="">
					{element.shells.map(
						(value, i) => (
							<div
								key={i}
								className="animated text-right fadeIn faster">
								{value}
							</div>
						)
					)}
				</div>
			</div>
			{[
				'atomic_mass',
				'boil',
				'color',
				'density',
				'melt',
				'molar_heat'
			].map(
				key =>
					(element[key] && (
						<div
							className="bg-gray-100 flex px-4 py-1 text-black hover:bg-gray-200"
							key={key}>
							<div className="flex-1 ">
								{key}
							</div>
							<div className="self-end">
								{Object.values(
									'' + element[key]
								).map((value, i) => (
									<span
										key={i}
										className="animated text-right fadeIn faster">
										{value}
									</span>
								))}
							</div>
						</div>
					)) ||
					null
			)}
		</div>
	);
	return ReactDOM.createPortal(
		detail,
		domNode
	);
};
const PeriodicTable = () => {
	const detailRef = useRef();
	const containerRef = useRef();
	const pinnedRef = useRef();

	const [
		pinned,
		setPinned
	] = useState();
	useEffect(() => {
		pinnedRef.current = pinned;
	}, [pinned]);
	const [
		current,
		setCurrent
	] = useState([1, 1]);
	const [
		currentCategory,
		setCurrentCategory
	] = useState();
	useEffect(() => {
		requestAnimationFrame(() => {
			const poss = pinned || current;
			if (containerRef.current) {
				containerRef.current.style.setProperty(
					'--top',
					`${-(300 * (poss[0] - 1))}px`
				);
				containerRef.current.style.setProperty(
					'--left',
					`${-(300 * (poss[1] - 1))}px`
				);
			}
		});
	}, [current, pinned]);
	const redered = useMemo(
		() => (
			<div
				ref={containerRef}
				className="w-full h-full p-4 overflow-hidden">
				<div className="w-full h-full flex items-start">
					<div className="w-full  flex items-start flex-wrap z-10">
						{new Array(11)
							.fill(true)
							.map((_, x) => {
								return (
									<React.Fragment
										key={x}>
										{new Array(19)
											.fill(true)
											.map((_, y) => {
												const id = `${y}_${x}`;
												const element =
													normalizePeriodicTableJSON[
														id
													];
												const poss = [
													x,
													y
												];
												return (
													<div
														className=" overflow-hidden relative"
														key={y}
														style={{
															width: `${100 /
																19}%`
														}}>
														<div
															style={{
																width: `100%`,
																paddingTop:
																	'100%'
															}}></div>
														{element ? (
															<div
																style={
																	!currentCategory ||
																	element.category ===
																		currentCategory
																		? {
																				opacity: 1
																		  }
																		: {
																				opacity: 0.3
																		  }
																}
																onClick={() => {
																	if (
																		poss ===
																		pinnedRef.current
																	) {
																		setPinned(
																			undefined
																		);
																	} else {
																		setPinned(
																			poss
																		);
																	}
																}}
																onMouseEnter={() =>
																	setCurrent(
																		poss
																	)
																}
																className={`cursor-pointer border border-${
																	categoryColors[
																		element
																			.category
																	]
																}-300 text-${
																	categoryColors[
																		element
																			.category
																	]
																}-700 text-center justify-center w-full  bg-${
																	categoryColors[
																		element
																			.category
																	]
																}-200 hover:bg-${
																	categoryColors[
																		element
																			.category
																	]
																}-300 flex flex-col items-center h-full absolute top-0 left-0`}>
																<div
																	className="font-bold"
																	style={{
																		fontSize:
																			'0.8vw'
																	}}>
																	{
																		element.symbol
																	}
																</div>
																<div
																	style={{
																		fontSize:
																			'0.6vw'
																	}}>
																	{round10(
																		element.atomic_mass,
																		-4
																	)}
																</div>
															</div>
														) : (
															(!x ||
																!y ||
																null) && (
																<div className="cursor-pointer   text-center justify-center w-full  flex flex-col items-center h-full absolute top-0 left-0">
																	{x +
																		y}
																</div>
															)
														)}
													</div>
												);
											})}
									</React.Fragment>
								);
							})}
						<div className="w-full mt-4 flex flex-wrap justify-start">
							{Object.keys(
								categoryColors
							).map(key => (
								<div
									key={key}
									className="pt-2 px-1">
									<div
										style={{
											fontSize: '0.9vw'
										}}
										onMouseEnter={() =>
											setCurrentCategory(
												key
											)
										}
										onMouseLeave={() =>
											setCurrentCategory(
												null
											)
										}
										className={`font-bold  leading-relaxed cursor-pointer  text-${categoryColors[key]}-700 text-center justify-center w-full  bg-${categoryColors[key]}-300 hover:bg-${categoryColors[key]}-400 px-2  rounded-full`}>
										{key}
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="p-4">
						<div
							style={{ width: 300 }}
							className="relative">
							<div
								style={{
									width: `100%`,
									paddingTop: '100%'
								}}></div>

							<div
								style={{
									transition:
										'all 0.25s linear 0s',
									width: 300 * 19,
									top: 'var(--top)',
									left: 'var(--left)'
								}}
								className="absolute top-0 left-0 w-full  flex items-start flex-wrap">
								{new Array(11)
									.fill(true)
									.map((_, x) => {
										return (
											<React.Fragment
												key={x}>
												{new Array(19)
													.fill(true)
													.map(
														(_, y) => {
															const id = `${y +
																1}_${x +
																1}`;
															const element = logparams(
																normalizePeriodicTableJSON
															)[
																logparams(
																	id
																)
															];
															return (
																<div
																	className=" overflow-hidden relative"
																	key={
																		y
																	}
																	style={{
																		width: `${100 /
																			19}%`
																	}}>
																	<div
																		style={{
																			width: `100%`,
																			paddingTop:
																				'100%'
																		}}></div>
																	{element && (
																		<div className="justify-center p-4 items-start w-full flex  h-full absolute top-0 left-0">
																			<div className="flex-1">
																				{' '}
																				<div
																					className="font-bold flex-1"
																					style={{
																						fontSize:
																							'60px'
																					}}>
																					{
																						element.symbol
																					}
																				</div>
																			</div>
																		</div>
																	)}
																</div>
															);
														}
													)}
											</React.Fragment>
										);
									})}
							</div>
							<div
								ref={detailRef}
								className="absolute top-0 left-0 w-full h-full flex items-start flex-wrap"></div>
						</div>
					</div>
				</div>
			</div>
		),
		[currentCategory]
	);
	const poss = pinned || current;
	const id = `${poss[1]}_${poss[0]}`;
	const element =
		normalizePeriodicTableJSON[id];
	return (
		<>
			{redered}
			{detailRef.current && (
				<Detail
					domNode={detailRef.current}
					element={element}
				/>
			)}
		</>
	);
};
export default PeriodicTable;
