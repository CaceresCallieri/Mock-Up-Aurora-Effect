import './styles/App.css'

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

import useGetAnimatedStyles from './hooks/useGetAnimatedStyles'

import ArrowIcon from './assets/arrow.svg?react'


function App() {
    const { backgroundImage, border, boxShadow } = useGetAnimatedStyles()

    return (
        <motion.section className="hero"
            style={{ backgroundImage }}
        >

            <div className="content">
                <motion.span whileHover={{ scale: 1.05 }}>
                    Beta Now Live!
                </motion.span>

                <h1>Decrease your Saas churn by over 90%</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda possimus recusandae deserunt nam perferendis aut nihil
                    necessitatibus inventore quasi. Eligendi?
                </p>

                <motion.button
                    style={{ border, boxShadow }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.975 }}
                >
                    Start free trial
                    <ArrowIcon />
                </motion.button>
            </div>

            <div className="stars">
                <Canvas>
                    <Stars
                        radius={175}
                        depth={50}
                        count={3500}
                        factor={4}
                        speed={2}
                        fade
                    />
                </Canvas>
            </div>
        </motion.section>
    )
}

export default App
