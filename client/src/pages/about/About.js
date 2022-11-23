import React, { useEffect } from 'react'
import './About.css'
import { Button, TitlePage } from '../../components/index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function About() {
	const isLoggedIn = useSelector((state) => state.auth.isAuthenticated)
	const navigate = useNavigate()
	useEffect(() => {
		if (isLoggedIn) {
			console.log(isLoggedIn)
		} else {
			console.log(isLoggedIn)
			navigate('/')
		}
	})
	return (
		<div className="about">
			<TitlePage title="About Us" icon="😋" />
			<div className="container">
				<div className="about-item">
					<div className="about-item-content">
						<h1>
							<span>Wellome!</span>Best burger ideas in the world
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam.
						</p>
						<Button come="/contact">Contact Now</Button>
					</div>
					<div className="about-item-image">
						<div className="top">
							<div className="image">
								<img
									src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
									alt="Food"
								/>
							</div>
							<div className="image">
								<img
									src="https://images.pexels.com/photos/1633572/pexels-photo-1633572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
									alt="Food"
								/>
							</div>
						</div>
						<div className="bottom">
							<img
								src="https://images.pexels.com/photos/2271106/pexels-photo-2271106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="about-item">
					<div className="about-item-content">
						<h2>
							<span>Our quality</span>chicken
						</h2>
						<p>
							Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are
							made from chickens raised without antibiotics and fed an all vegetable-grain diet.
						</p>
						<Button come="/contact">order now</Button>
					</div>
					<div className="about-item-img">
						<div></div>
					</div>
				</div>
				<div className="about-item about-info">
					<div className="about-item-content">
						<h2>
							<span>Our quality</span>burger
						</h2>
						<p>
							Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are
							made from chickens raised without antibiotics and fed an all vegetable-grain diet.
						</p>
						<Button come="/contact">order now</Button>
					</div>
					<div className="about-item-img">
						<div></div>
					</div>
				</div>

				<div className="about-item">
					<div className="about-item-content">
						<h2>
							<span>Our quality</span>pizza douch
						</h2>
						<p>
							Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are
							made from chickens raised without antibiotics and fed an all vegetable-grain diet.
						</p>
						<Button come="/contact">order now</Button>
					</div>
					<div className="about-item-img">
						<div></div>
					</div>
				</div>
			</div>
			<div className="about-banner">
				<div className="about-banner-content">
					<h1>
						<span>We guarantee</span>30 Minutes Delivery!
					</h1>
					<p>If you’re having a meeting, working late at night and need an extra push.</p>
					<p>Let us know and we will be there.</p>
					<Button come="/menu">make an order</Button>
				</div>
			</div>
		</div>
	)
}

export default About
