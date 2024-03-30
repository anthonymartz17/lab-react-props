import React, { useState } from "react";
import TopBar from "./Components/TopBar";
import DonationForm from "./Components/DonationForm";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";
import "./App.css";

const targetAmount = 1000;
const donationList = [
	{
		amount: 250,
		caption: "You really need this. Really.",
		id: 1,
		name: "Jo",
	},
	{
		amount: 30,
		caption: "Here, take a break from work!",
		id: 2,
		name: "Rami",
	},
	{
		amount: 20,
		caption: "LOL! You are too funny. Happy to do this for you. :)",
		id: 3,
		name: "Michelle",
	},
	{
		amount: 5,
		caption: "Have fun!",
		id: 4,
		name: "Malinda",
	},
	{
		amount: 30,
		caption: "Come visit me in Miami!",
		id: 5,
		name: "Sam",
	},
];

function App() {
	const [donations, setDonationsList] = useState(donationList);
	const raisedSoFar = donations.reduce((acc, curr) => (acc += curr.amount), 0);
	const addDonation = (payload) => {
		setDonationsList([{ id: donations.length + 1, ...payload }, ...donations]);
	};
	return (
		<>
			<TopBar />
			<main className="container">
				<section className="sidebar">
					<RecentDonations donations={donations} />
				</section>
				<section className="">
					<Progress
						donations={donations}
						targetAmount={targetAmount}
						raisedSoFar={raisedSoFar}
					/>
					<DonationForm
						emitAddDonation={addDonation}
						isDonationClosed={raisedSoFar >= targetAmount}
					/>
				</section>
			</main>
		</>
	);
}

export default App;
