import { useEffect } from 'react'
import { useMotionTemplate, useMotionValue, animate } from 'framer-motion'

const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

function useGetAnimatedStyles() {
    const color = useMotionValue(COLORS[0])
    const backgroundImage = useMotionTemplate`radial-gradient(115% 115% at 50% 0%, #000000 50%, ${color} 100%)`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0 4px 24px ${color}`

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror'
        })
    }, [color])

    return { backgroundImage, border, boxShadow }
}

export default useGetAnimatedStyles