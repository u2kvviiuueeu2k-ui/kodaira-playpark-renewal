"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Tent, TreePine, Coffee, Hammer, Info } from 'lucide-react';

const MapPoint = ({ x, y, icon, label, description, activePoint, setActivePoint }: any) => {
  const isActive = activePoint === label;

  return (
    <div 
      className="absolute" 
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setActivePoint(isActive ? null : label)}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-premium transition-colors ${
          isActive ? 'bg-accent text-white' : 'bg-white text-primary'
        }`}
      >
        {icon}
      </motion.button>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 p-4 glass-morphism rounded-2xl z-20 pointer-events-none"
          >
            <h4 className="font-bold text-secondary text-sm mb-1">{label}</h4>
            <p className="text-xs text-text-muted">{description}</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white/80" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ParkMap = () => {
  const [activePoint, setActivePoint] = useState(null);

  const points = [
    { x: 30, y: 40, icon: <Flame size={20} />, label: "焚き火場", description: "冬でも暖かく、焼き芋やおやつ作りが楽しめます。" },
    { x: 60, y: 30, icon: <TreePine size={20} />, label: "木登りエリア", description: "大きな木に登って、いつもと違う景色を見よう！" },
    { x: 20, y: 70, icon: <Hammer size={20} />, label: "工作コーナー", description: "トンカチやノコギリを使って、自由になんでも作れます。" },
    { x: 80, y: 60, icon: <Tent size={20} />, label: "秘密基地", description: "みんなで協力して作る、自分たちだけの特別な場所。" },
    { x: 50, y: 80, icon: <Coffee size={20} />, label: "休憩スペース", description: "保護者の方もゆったり過ごせる、憩いの場です。" },
  ];

  return (
    <div className="relative w-full aspect-[16/9] bg-[#e8f5e9] rounded-[40px] overflow-hidden shadow-inner border-8 border-white">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-light rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-secondary/10 rotate-12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-secondary/10 -rotate-12" />
      </div>

      <div className="absolute top-8 left-8">
        <h3 className="text-2xl text-primary flex items-center gap-2">
          <Info size={24} />
          冒険フィールドマップ
        </h3>
        <p className="text-sm text-text-muted">アイコンをタップして遊び場をチェック！</p>
      </div>

      {points.map((point) => (
        <MapPoint 
          key={point.label} 
          {...point} 
          activePoint={activePoint} 
          setActivePoint={setActivePoint} 
        />
      ))}

      {/* Decorative Elements */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4 text-xs font-bold text-primary/40 uppercase tracking-widest">
        <span>East Wood</span>
        <div className="w-8 h-[1px] bg-primary/20" />
        <span>West River</span>
      </div>
    </div>
  );
};

export default ParkMap;
