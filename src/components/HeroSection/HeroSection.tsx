


import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-orange-500">
            {/* Fond SVG décoratif en bas */}
            <div className="absolute left-0 right-0 bottom-0 z-0 pointer-events-none w-full overflow-hidden" style={{height:'auto'}}>
                <svg width="100%" height="320" viewBox="0 0 1920 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0,120 Q480,-80 960,120 T1920,120 V320 H0 Z" fill="#ff6b35" fillOpacity="0.7" />
                    <path d="M0,220 Q600,20 1200,220 T1920,220 V320 H0 Z" fill="#1a1a1a" fillOpacity="0.8" />
                </svg>
            </div>
            <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16">
                {/* Colonne texte */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="hero-text text-left"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-orange-500 to-orange-300 bg-clip-text text-transparent drop-shadow-lg">
                        DrumBase
                    </h1>
                    <div className="subtitle text-2xl md:text-3xl text-white/90 mb-8 font-medium">
                        Rencontre le Streaming
                    </div>
                    <p className="max-w-xl text-white/85 text-base md:text-lg mb-10 leading-relaxed">
                        Plongez dans une expérience sonore inédite où la chaleur authentique des vinyles rencontre la modernité du streaming haute définition. Redécouvrez vos classiques préférés et explorez de nouveaux univers musicaux avec une qualité audio exceptionnelle qui respecte l'essence même de chaque note.
                    </p>
                    <div className="cta-buttons flex gap-6 flex-wrap">
                        <button className="btn-primary flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-300 border-none py-3 px-8 rounded-full text-white text-base font-semibold cursor-pointer shadow-lg hover:scale-105 transition-transform duration-200">
                            <i className="fas fa-play"></i>
                            Commencer l'Écoute
                        </button>
                        <button className="btn-secondary flex items-center gap-2 bg-transparent border-2 border-white/30 py-3 px-8 rounded-full text-white text-base font-semibold cursor-pointer backdrop-blur-md hover:border-orange-400 hover:bg-orange-50/10 transition-colors duration-200">
                            <i className="fas fa-headphones"></i>
                            Découvrir Plus
                        </button>
                    </div>
                </motion.div>
                {/* Colonne platine vinyle animée */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="vinyl-container flex justify-center items-center relative"
                >
                    {/* Visuel platine vinyle */}
                    <div className="vinyl-player relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
                        {/* Base */}
                        <div className="turntable-base absolute w-full h-full rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl" />
                        {/* Disque vinyle animé */}
                        <motion.div
                            className="vinyl-record absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-full shadow-xl"
                            style={{
                                background: 'radial-gradient(circle, #1a1a1a 15%, #333 16%, #1a1a1a 17%, #333 30%, #1a1a1a 31%, #222 100%)',
                                boxShadow: '0 0 30px rgba(255, 107, 53, 0.3)'
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                        >
                            {/* Centre coloré */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22%] h-[22%] rounded-full" style={{ background: 'linear-gradient(45deg, #ff6b35, #f7931e)', boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)' }} />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8%] h-[8%] rounded-full bg-[#1a1a1a]" />
                        </motion.div>
                        {/* Bras de lecture animé */}
                        <motion.div
                            className="tonearm absolute"
                            style={{
                                top: '20%',
                                right: '15%',
                                width: '35%',
                                height: '4px',
                                background: 'linear-gradient(90deg, #666, #999, #666)',
                                borderRadius: '2px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
                                transformOrigin: 'right center',
                            }}
                            animate={{ rotate: [-20, -5, -20] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full" style={{ background: 'radial-gradient(circle, #ff6b35, #f7931e)', boxShadow: '0 0 15px rgba(255, 107, 53, 0.6)' }} />
                        </motion.div>
                        {/* Ondes sonores */}
                        <div className="sound-waves absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="wave absolute border-2 border-orange-400/30 rounded-full"
                                    style={{
                                        width: `${100 + i * 20}%`,
                                        height: `${100 + i * 20}%`,
                                        top: `${-i * 10}%`,
                                        left: `${-i * 10}%`,
                                    }}
                                    animate={{ opacity: [0.5, 0.15, 0], scale: [1, 1.15, 1.25] }}
                                    transition={{ duration: 3.5, repeat: Infinity, delay: i * 1.1, ease: 'easeInOut' }}
                                />
                            ))}
                        </div>
                        {/* Notes flottantes */}
                        <div className="floating-notes absolute w-full h-full pointer-events-none">
                            <motion.div className="note absolute text-orange-400/70 text-2xl" style={{ top: '20%', left: '-20%' }} animate={{ y: [-10, -30, -10], opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0 }}>
                                ♪
                            </motion.div>
                            <motion.div className="note absolute text-orange-400/70 text-2xl" style={{ top: '60%', right: '-20%' }} animate={{ y: [-10, -30, -10], opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                                ♫
                            </motion.div>
                            <motion.div className="note absolute text-orange-400/70 text-2xl" style={{ top: '70%', right: '-30%' }} animate={{ y: [-10, -30, -10], opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}>
                                ♪
                            </motion.div>                            <motion.div className="note absolute text-orange-400/70 text-2xl" style={{ top: '40%', left: '-20%' }} animate={{ y: [-10, -30, -10], opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0 }}>
                                ♪♪
                            </motion.div>
                            <motion.div className="note absolute text-orange-400/70 text-2xl" style={{ top: '50%', right: '-20%' }} animate={{ y: [-10, -30, -10], opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                                ♫♪
                            </motion.div>
                            <motion.div className="note absolute text-orange-400/70 text-2xl" style={{ top: '40%', left: '-30%' }} animate={{ y: [-10, -30, -10], opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}>
                                ♪♫
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
