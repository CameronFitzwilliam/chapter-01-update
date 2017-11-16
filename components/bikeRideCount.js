import React from 'react'
import '../stylesheets/ui.scss'

const BikeRideCount = React.createClass({
	render() {
		return(
			<div className="bike-day-count">
				<div className="totalDays">
					<span>5 days</span>
				</div>
				<div className="flat">
					<span>2 days</span>
				</div>
				<div className="hills">
					<span>1 days</span>
				</div>
			</div>
		)
	}
})