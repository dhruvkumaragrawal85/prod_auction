import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../styles/styles";
const ITEMS_PER_PAGE = 10;

function AuctionList() {
	const [auctionItems, setAuctionItems] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		const fetchAuctionItems = async () => {
			const res = await axios.get("/api/auctions");
			setAuctionItems(res.data);
			setSearchResults(res.data);
			setTotalPages(Math.ceil(res.data.length / ITEMS_PER_PAGE));
		};
		fetchAuctionItems();
	}, []);

	useEffect(() => {
		const filterItems = () => {
			const filteredItems = auctionItems.filter((item) => {
				const title = item.title || "";
				const description = item.description || "";
				const startingBid = item.startingBid
					? item.startingBid.toString()
					: "";
				const endDate = item.endDate
					? new Date(item.endDate).toLocaleDateString()
					: "";

				const searchTermString = searchTerm.toLowerCase();

				const matchesTitle = title
					.toLowerCase()
					.includes(searchTermString);
				const matchesDescription = description
					.toLowerCase()
					.includes(searchTermString);
				const matchesStartingBid =
					startingBid.includes(searchTermString);
				const matchesEndDate = endDate.includes(searchTermString);

				return (
					matchesTitle ||
					matchesDescription ||
					matchesStartingBid ||
					matchesEndDate
				);
			});
			setSearchResults(filteredItems);
			setTotalPages(
				Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 0
			);
			setCurrentPage(1);
		};
		filterItems();
	}, [searchTerm, auctionItems]);

	const handlePageChange = (page) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const paginatedItems = searchResults.slice(startIndex, endIndex);

	return (
		<div className="max-w-4xl mx-auto mt-10 p-6 bg-white-900 rounded-lg shadow-lg border-2 border-blue-500">
			<h2 className="text-4xl font-bold mb-6">Auction Items</h2>
			<div className="mb-6 flex flex-col gap-4">
				<input
					type="text"
					placeholder="Search by Title, Description, Starting Bid, End Date"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="p-3 border-[#3957db] border-[2px] rounded-md  focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
			</div>
			<ul className="space-y-4">
				{paginatedItems.map((item) => (
					<li
						key={item._id}
						className="border border-gray-700 rounded-lg p-4 shadow-md"
					>
						<Link
							to={`/auction/${item._id}`}
							className="text-cyan-400 hover:underline text-lg font-semibold"
						>
							{item.title}
						</Link>
						<p className="mt-2">
							<b>{item.description}</b>
						</p>
						<p className="mt-2">
							<b>Starting Bid:</b> ${item.startingBid}
						</p>
						<p className="mt-2">
							<b>End Date: </b>
							{new Date(item.endDate).toLocaleDateString()}
						</p>
					</li>
				))}
			</ul>
			<div className="mt-6 flex justify-between items-center">
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					className={`${styles.button} mt-4 800px:mt-0 text-white`}
					disabled={currentPage === 1}
				>
					Previous
				</button>
				<span className="text-gray-400">
					Page {currentPage} of {totalPages == 0 ? 1 : totalPages}
				</span>
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					className={`${styles.button} mt-4 800px:mt-0 text-white`}
					disabled={totalPages === 0 || currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default AuctionList;
