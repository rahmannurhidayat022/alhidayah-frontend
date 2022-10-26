const Hero = () => {
	return (
		<section
			className="w-full mb-5 md:mb-10 h-[550px] md:h-[650px] overflow-hidden object-cover object-center bg-cover"
			style={{ backgroundImage: "url('/images/hero.png')" }}
		>
			<div className="relative w-full h-full">
				<div className="absolute top-16 left-4 md:left-44">
					<svg
						width="121"
						height="110"
						viewBox="0 0 121 110"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							width="4.66148"
							height="22.1024"
							rx="2.33074"
							transform="matrix(0.61091 -0.7917 0.671458 0.741042 80.5291 84.0393)"
							fill="#D9D9D9"
						/>
						<rect
							width="3.66273"
							height="18.2843"
							rx="1.83137"
							transform="matrix(0.90843 -0.0132668 -0.0423367 1.08347 59.8722 87.4738)"
							fill="#D9D9D9"
						/>
						<rect
							width="5.1408"
							height="21.8026"
							rx="2.5704"
							transform="matrix(0.277744 -1.02888 0.876013 0.307893 91.7071 69.5844)"
							fill="#D9D9D9"
						/>
						<rect
							width="5.03461"
							height="22.0312"
							rx="2.5173"
							transform="matrix(-0.278939 -1.03736 0.868102 -0.306531 100.049 54.736)"
							fill="#D9D9D9"
						/>
						<rect
							width="4.28582"
							height="22.6649"
							rx="2.14291"
							transform="matrix(-0.815192 -0.495975 0.424082 -0.95265 93.3578 31.0576)"
							fill="#D9D9D9"
						/>
						<rect
							width="3.84566"
							height="18.4039"
							rx="1.92283"
							transform="matrix(-0.904909 0.0766154 -0.00852649 -1.08486 78.1038 21.8994)"
							fill="#D9D9D9"
						/>
						<rect
							width="4.47808"
							height="22.283"
							rx="2.23904"
							transform="matrix(-0.699767 0.680206 -0.57998 -0.844085 52.2841 19.2782)"
							fill="#D9D9D9"
						/>
						<rect
							width="5.75564"
							height="25.1177"
							rx="2.87782"
							transform="matrix(-0.463956 0.934648 -0.84491 -0.443567 29.7059 35.1718)"
							fill="#D9D9D9"
						/>
						<rect
							width="5.77104"
							height="25.7474"
							rx="2.88552"
							transform="matrix(0.233162 1.04829 -0.846065 0.368043 24.2729 54.0948)"
							fill="#D9D9D9"
						/>
						<rect
							width="5.34908"
							height="26.3286"
							rx="2.67454"
							transform="matrix(0.626844 0.779145 -0.565208 0.824949 32.424 80.3486)"
							fill="#D9D9D9"
						/>
					</svg>
				</div>
				<div className="absolute bottom-8 md:bottom-32 left-0">
					<svg
						width="50"
						height="159"
						viewBox="0 0 83 159"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M82.0297 78.7269C82.0297 122.855 43.6283 158.437 -0.5 158.437C-0.5 158.437 -0.5 118.459 -0.5 74.3303C-0.5 30.202 -0.5 0.211304 -0.5 0.211304C43.6283 0.211304 82.0297 34.5986 82.0297 78.7269Z"
							fill="#E8AA42"
						/>
					</svg>
				</div>
				<div className="absolute bottom-1 right-4 md:right-14">
					<svg
						width="95"
						height="170"
						viewBox="0 0 142 170"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<ellipse
							cx="52.0493"
							cy="118.573"
							rx="38.8993"
							ry="37.848"
							transform="rotate(27.1467 52.0493 118.573)"
							fill="#FCBC51"
						/>
						<ellipse
							cx="73.2004"
							cy="22.8036"
							rx="16.8213"
							ry="16.2957"
							transform="rotate(27.1467 73.2004 22.8036)"
							fill="#FFD287"
						/>
						<ellipse
							cx="122.677"
							cy="81.8452"
							rx="14.193"
							ry="13.6673"
							transform="rotate(27.1467 122.677 81.8452)"
							fill="#E8AA42"
						/>
					</svg>
				</div>
				<div className="container-custom absolute top-0 left-0 w-full h-full">
					<div className="w-full md:w-[650px] h-full flex flex-col justify-center items-center md:items-start text-white antialiased">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-2">
							Tetaplah Berbagi Meskipun Kau Merasa Tak Punya Apa-apa
						</h1>
						<p className="text-lg md:text-2xl">
							Karena kau bisa berbagi perhatian kasih sayang dan cinta.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
