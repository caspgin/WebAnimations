import { AnimatePresence, motion } from "motion/react"
import { HeaderSection } from "../pages/HeaderPage"
export default function Inner({ children }) {

	const animate = (variants) => {
		return {
			initial: 'initial',
			animate: 'enter',
			exit: 'exit',
			variants
		}
	}

	const opacity = {
		initial: {
			opacity: 0,
		},
		enter: {
			opacity: 1,
		},
		exit: {
			opacity: 1,
		}
	}

	const slide = {
		initial: {
			top: "100vh",
		},
		enter: {
			top: "100vh",
		},
		exit: {
			top: 0,
			transition: {
				duration: 1,
				ease: [0.76, 0, 0.24, 1]
			}
		}
	}

	const scale = {
		initial: {
			y: 0,
			opacity: 1,
			scale: 1
		},
		enter: {
			y: 0,
			opacity: 1,
			scale: 1
		},
		exit: {
			y: -100,
			opacity: 0.5,
			scale: 0.9,
			transition: {
				duration: 1.2,
				ease: [0.76, 0, 0.20, 1]
			}

		}
	}

	return (
		<motion.div className="inner">
			<motion.div {...animate(slide)} className="slide" />
			<motion.main {...animate(scale)} className="page">
				<motion.div {...animate(opacity)} className="innerPage">
					<HeaderSection />
					{children}
				</motion.div>
			</motion.main>
		</motion.div>
	)
}
