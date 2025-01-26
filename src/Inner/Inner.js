import { AnimatePresence, motion } from "motion/react"
export default function Inner({ children }) {

	const animate = (variants, custom) => {
		return {
			initial: 'initial',
			animate: 'enter',
			exit: 'exit',
			variants,
			custom
		}
	}

	const slideDown = {

		initial: {
			top: '0%',
		},
		enter: (i) => ({
			top: '100%',
			transition: {
				duration: '0.45',
				delay: 0.05 * i,
			},
			transitionEnd: {
				top: '-100%'
			}

		}),
		exit: (i) => ({
			top: '0%',
			transition: {
				duration: '0.45',
				delay: 0.07 * i,
			}
		})
	}

	const overlay = {
		initial: {
			opacity: 0.7,
		},
		enter: {
			opacity: 0,

			transition: {
				duration: '0.5',
			}
		},
		exit: {
			opacity: 0.5,
			transition: {
				duration: '0.40',
			}

		}

	}
	const numOfColumns = 5;

	return (
		<motion.div className="inner">

			<motion.div {...animate(overlay)} className="back" > </motion.div>
			<div className="ladder">
				{
					[...Array(numOfColumns)].map((_, column) => {
						return <motion.div {...animate(slideDown, numOfColumns - column)} className="column" key={column}></motion.div>
					})
				}
			</div>

			<motion.div className="page">
				{children}
			</motion.div>
		</motion.div>
	)
}
