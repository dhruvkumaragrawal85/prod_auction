import PropTypes from "prop-types";
import styles from "../styles/styles";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div
		  className={`absolute top-50 left-0 min-h-screen w-full bg-cover bg-center bg-no-repeat ${styles.noramlFlex}`}


		  style={{
			backgroundImage:
			  "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
		  }}
		>
		  <div className={`${styles.section} w-[90%] 800px:w-[60%] `} style={{ transform: "translate(150px, -50px)" }}>
			<h1
			  className={`text-[45px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
			>
			 Auction with
			 <br></br>
	Your campus community
			</h1>
			<p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
			  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
			  assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
			  quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
			  <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
			</p>
			<Link to="/auctions" className="inline-block">
				<div className={`${styles.button} mt-5`}>
					 <span className="text-[#fff] font-[Poppins] text-[18px]">
						Auction now
					 </span>
				</div>
			</Link>
		  </div>
		</div>
	  );
};

const FeatureCard = ({ title, description, gradient, icon }) => (
	<div
		className={`p-6 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg text-center transform transition duration-500 hover:scale-105 border border-gray-700`}
	>
		<div className={`text-4xl mb-4 bg-gradient-to-r ${gradient}`}>
			{icon}
		</div>
		<h2 className="mb-3 text-2xl font-semibold">{title}</h2>
		<p className="text-gray-300">{description}</p>
	</div>
);

FeatureCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	gradient: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
};

const LiveIcon = () => (
	<svg
		className="w-12 h-12 mx-auto"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
		/>
	</svg>
);

const CalendarIcon = () => (
	<svg
		className="w-12 h-12 mx-auto"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
		/>
	</svg>
);

const SettingsIcon = () => (
	<svg
		className="w-12 h-12 mx-auto"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.993.606 2.277-.165 2.572-1.065z"
		/>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
		/>
	</svg>
);

export default Home;
