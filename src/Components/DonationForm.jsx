import { useState } from "react";

export default function DonationForm({ emitAddDonation, isDonationClosed }) {
	const [formData, setFormData] = useState({
		name: "",
		caption: "",
		amount: "",
	});

	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		const newValue = name === "amount" ? parseInt(value) : value;
		setFormData((prevState) => ({ ...prevState, [name]: newValue }));
	};

	function handleSubmit(e) {
		e.preventDefault();
		emitAddDonation(formData);

		setFormData({ name: "", caption: "", amount: "" });
	}

	return isDonationClosed ? (
		<h2>We have reached the goal. Thank you!</h2>
	) : (
		<form className="donation" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="">Name</label>
				<input
					type="text"
					value={formData.name}
					onChange={handleChange}
					name="name"
				/>
			</div>
			<div>
				<label htmlFor="">Caption</label>
				<input
					type="text"
					name="caption"
					value={formData.caption}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor="">Amount</label>
				<input
					type="number"
					value={formData.amount}
					onChange={handleChange}
					name="amount"
				/>
			</div>
			<button>Donate!</button>
		</form>
	);
}
