import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { subscribe } from './generated'

const EmojiThrower = ({ emoji = '💯' }) => {
	const randomX = Math.random() * (window.innerWidth - 100)
	return (
		<motion.div
			z-index={100}
			initial={{ y: '100vh', x: randomX, opacity: 1, position: 'absolute' }}
			animate={{ opacity: 0, y: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<p style={{ fontSize: '40px' }}>{emoji}</p>
		</motion.div>
	)
}
// useEffect(() => {
//   const sub = subscribe('miami', ({ data }) => {
//     const icon = JSON.parse(data).icon
//     setShowcomp((prevState) => [...prevState, { icon }])
//   })

//   return () => {
//     sub.unsubscribe()
//   }
// }, [])

// ...EmojiThrower code

function App() {
	const [emote, setEmote] = useState([])

	useEffect(() => {
		const sub = subscribe('miami', ({ data }) => {
			console.log(data)
			const icon = JSON.parse(data).icon
			setEmote((prevState) => [...prevState, icon])
		})

		return () => {
			sub.unsubscribe()
		}
	}, [])

	return (
		<div className="App">
			{emote.map((item, i) => {
				return <EmojiThrower key={i} emoji={item} />
			})}
		</div>
	)
}

export default App
