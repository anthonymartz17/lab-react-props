export default function Progress({
	raisedSoFar,
	donations,
	targetAmount,
	isDonationClosed,
}) {
	return (
		<div className="progress">
			<h1>
				Raised $<span className="secondary">{raisedSoFar} </span> of $
				<span className="secondary">{targetAmount}</span>
			</h1>
			{!isDonationClosed ? (
				<h3>
					You could be donation{" "}
					<span className="secondary">#{donations.length + 1}! </span>{" "}
				</h3>
			) : null}
		</div>
	);
}
