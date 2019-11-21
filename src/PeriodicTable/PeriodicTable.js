import React, {
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react';
import 'tailwindcss/dist/tailwind.min.css';
import { normalizePeriodicTableJSON } from './PeriodicTableJSON';
const logparams = value => {
	console.log(value);
	return value;
};
const PeriodicTable = () => {
	const containerRef = useRef();
	const [
		current,
		setCurrent
	] = useState([1, 1]);
	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.style.setProperty(
				'--top',
				`${-(300 * (current[0] - 1))}px`
			);
			containerRef.current.style.setProperty(
				'--left',
				`${-(300 * (current[1] - 1))}px`
			);
		}
	}, [current]);
	const redered = useMemo(
		() => (
			<div
				ref={containerRef}
				className="w-full h-full p-4 overflow-hidden">
				<div className="w-full h-full flex items-start">
					<div className="shadow w-full  flex items-start flex-wrap z-10">
						{new Array(8)
							.fill(true)
							.map((_, x) => {
								return (
									<React.Fragment
										key={x}>
										{new Array(19)
											.fill(true)
											.map((_, y) => {
												const id = `${y}_${x}`;
												const element = logparams(
													normalizePeriodicTableJSON
												)[
													logparams(id)
												];
												return (
													<div
														onMouseEnter={() =>
															setCurrent(
																[x, y]
															)
														}
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
														{element && (
															<div className="text-black justify-center w-full bg-white hover:bg-gray-200 flex items-center h-full absolute top-0 left-0">
																<div
																	style={{
																		fontSize:
																			'1.4vw'
																	}}>
																	{
																		element.symbol
																	}
																</div>
															</div>
														)}
													</div>
												);
											})}
									</React.Fragment>
								);
							})}
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
								{new Array(8)
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
																		<div className="justify-center w-full flex items-center h-full absolute top-0 left-0">
																			<div
																				style={{
																					fontSize:
																						'30px'
																				}}>
																				{
																					element.symbol
																				}
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
						</div>
					</div>
				</div>
			</div>
		),
		[]
	);
	return redered;
};
export default PeriodicTable;
