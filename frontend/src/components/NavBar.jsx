import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/styles";
import {
	AiOutlineHeart,
	AiOutlineSearch,
	AiOutlineShoppingCart,
  } from "react-icons/ai";
const NavBar = () => {
	const { isLoggedIn } = useAuth();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className={`${styles.section}`}>
			<div className="flex flex-wrap justify-between items-center h-auto 800px:h-[50px] 800px:my-[20px]">
				{/* Logo */}
				<div className="flex-shrink-0">
				<Link to="/">
					<img
					src="https://shopo.quomodothemes.website/assets/images/logo.svg"
					alt="BidBud Logo"
					className="w-[150px] 800px:w-[180px]"
					/>
				</Link>
				</div>



				<div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Auctions..."
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {/* {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${i.images[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null} */}
          </div>






				{/* Button */}
				<div className={`${styles.button} mt-4 800px:mt-0`}>
				<Link to="http://localhost:3000">
					<h1 className="text-[#fff] flex items-center">
					{"Go to Shop"}
					</h1>
				</Link>
				</div>
			</div>
			</div>

			<nav className="bg-[#3321c8] backdrop-blur-md p-4 shadow-lg">
				<div className="container mx-auto flex items-center justify-between">
					<Link className="text-xl font-bold text-yellow-500" to="/">
						Auction Portal
					</Link>
					<button
						className="lg:hidden text-white focus:outline-none"
						onClick={() => setIsOpen(!isOpen)}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							></path>
						</svg>
					</button>
					<div
						className={`w-full lg:flex lg:items-center lg:w-auto ${
							isOpen ? "block" : "hidden"
						}`}
					>
						<ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 mt-4 lg:mt-0">
							{/* <li>
								<Link className="text-white hover:text-gray-300 text-lg" to="/">
									Home
								</Link>
							</li> */}
							<li>
								<Link className="text-white hover:text-gray-300 text-lg" to="/auctions">
									Auctions
								</Link>
							</li>
							{!isLoggedIn ? (
								<>
									<li>
										<Link className="text-white hover:text-gray-300 text-lg" to="/login">
											Login
										</Link>
									</li>
									<li>
										<Link className="text-white hover:text-gray-300 text-lg" to="/signup">
											Signup
										</Link>
									</li>
								</>
							) : (
								<>
									<li>
										<Link className="text-white hover:text-gray-300 text-lg" to="/profile">
											Profile
										</Link>
									</li>
									<li>
										<Link className="text-white hover:text-gray-300 text-lg" to="/logout">
											Logout
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
