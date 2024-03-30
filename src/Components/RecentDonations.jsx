export default function RecentDonations({ donations }) {
	return (
		<div className="donations">
			<h2 className="">Recent Donations</h2>
			<ul>
				{donations.map((ele) => (
					<li key={ele.id}>
						<span className="primary">{`${ele.name} donated $${ele.amount}`}</span>
						<p>{ele.caption}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
