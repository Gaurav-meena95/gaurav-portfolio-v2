import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import resumePdf from "../assets/Resume-Gaurav Meena.pdf";




export function Hero() {
    const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
    const [text, setText] = useState('')
    const fullText = 'Aspiring Full-Stack Developer | AI Undergrad | Open-Source Contributor';
    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })

        let index = 0
        const timer = setInterval(() => {
            setText(fullText.slice(0, index));
            index++
            if (index > fullText.length){
                index = 0
            }
        }, 100)
        return () => clearInterval(timer);

    }, [])



    const particles = useMemo(() => [...Array(100)].map(() => {
        const x = Math.random() * windowSize.width
        const y = Math.random() * windowSize.height
        const dx = (Math.random() - 0.5) * 160
        const dy = (Math.random() - 0.5) * 160
        const scale = Math.random() * 0.5 + 0.5
        const duration = Math.random() * 2 + 2
        return { x, y, dx, dy, scale, duration }
    }), [windowSize.width, windowSize.height])


    return (
        <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-20">
            {/* animated backgroud*/}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 -left-4 w-96 h-50 bg-[#049ef7] rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-0 -right-4 w-96 h-50 bg-[#A855F7] rounded-full blur-[128px] animate-bounce" style={{ animationDelay: '3s' }}></div>
                <div className="absolute bottom-8 -left-20 w-96 h-50 bg-[#3c52e1] rounded-full blur-[128px] animate-spin" style={{ animationDelay: '3s' }}></div>
            </div>
            {/* random partical */}
            <div className="absolute inset-0">
                {
                    particles.map((p, i) => {
                        return (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-linear-to-r from-[#00A3FF] to-[#A855F7] rounded-full"
                                initial={{ x: p.x, y: p.y, scale: p.scale }}
                                animate={{ x: [p.x - p.dx, p.x + p.dx], y: [p.y - p.dy, p.y + p.dy] }}
                                transition={{
                                    duration: p.duration,
                                    repeat: Infinity,
                                    repeatType: 'mirror',
                                    ease: 'easeInOut',
                                    delay: p.delay,
                                }}
                            />
                        )
                    })
                }

            </div>
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 2, x: 10 }}
                        transition={{ duration: 1}}
                        className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block"
                        >
                            <span className="text-xl md:text-2xl text-gray-300">
                                Hey, I'm <span className="bg-linear-to-r from-[#00A3FF] to-[#A855F7] bg-clip-text text-transparent">Gaurav Meena</span> 👋
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="min-h-20"
                        >
                            <p className="text-neutral-400 text-lg md:text-xl">
                                {text}
                                <span className="inline-block w-0.5 h-6 bg-linear-to-b from-[#00A3FF] to-[#A855F7] ml-1 animate-pulse"></span>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4">

                            <a href={resumePdf} download="Gaurav-Meena-Resume.pdf" className="resume inline-flex items-center gap-2">
                                <FontAwesomeIcon icon={faFileDownload} />
                                Download Resume
                            </a>
                            <a href="#projects" className="project inline-flex items-center gap-2">
                                <FontAwesomeIcon icon={faRocket} />
                                View Projects
                            </a>


                        </motion.div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-linear-to-r from-[#00A3FF] to-[#A855F7] rounded-2xl blur opacity-30 animate-pulse"></div>
                            <div className="relative bg-[#161B22] rounded-2xl p-2 backdrop-blur-xl border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwODY2Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="Developer workspace"
                                    className="rounded-xl w-full h-auto object-cover"
                                />
                            </div>

                            {/* Floating code lines */}
                            <motion.div
                                className="absolute -top-4 -right-4 bg-[#161B22]/80 backdrop-blur-xl px-4 py-2 rounded-lg border border-[#00A3FF]/30 shadow-[0_0_20px_rgba(0,163,255,0.3)]"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <code className="text-[#00A3FF] text-sm">&lt;Code /&gt;</code>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -left-4 bg-[#161B22]/80 backdrop-blur-xl px-4 py-2 rounded-lg border border-[#A855F7]/30 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                            >
                                <code className="text-[#A855F7] text-sm">const dev = &apos;creative&apos;;</code>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}