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

	return (
		<motion.div className="inner">
			<motion.div className="page">
				<HeaderSection />
				{children}
			</motion.div>
		</motion.div>
	)
}
