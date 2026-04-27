"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, MessageCircle, Hammer, Coffee, TreePine, CheckCircle2 } from 'lucide-react';

const VolunteerPage = () => {
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState("");

  const steps = [
    {
      id: 1,
      title: "あなたの「好き」を教えてください",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {[
            { id: 'craft', icon: <Hammer />, label: "工作・大工仕事", desc: "秘密基地作りや修理をお手伝い" },
            { id: 'play', icon: <TreePine />, label: "子どもと一緒に遊ぶ", desc: "泥遊びや鬼ごっこの相棒に" },
            { id: 'support', icon: <Coffee />, label: "見守り・おもてなし", desc: "受付や焚き火でのティータイム担当" },
            { id: 'photo', icon: <Sparkles />, label: "記録・発信", desc: "写真撮影やSNSでの魅力発信" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => { setInterest(item.label); setStep(2); }}
              className="p-6 rounded-[24px] border-2 border-gray-100 hover:border-primary hover:bg-primary/5 transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 text-gray-400 group-hover:text-primary group-hover:bg-white transition-colors">
                {item.icon}
              </div>
              <p className="font-bold text-secondary mb-1">{item.label}</p>
              <p className="text-xs text-text-muted">{item.desc}</p>
            </button>
          ))}
        </div>
      )
    },
    {
      id: 2,
      title: "AIが最適な役割を提案中...",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary animate-pulse">
            <Sparkles size={40} />
          </div>
          <h3 className="text-2xl mb-4">「{interest}」がお得意なんですね！</h3>
          <div className="bg-white p-8 rounded-[32px] shadow-premium max-w-lg mx-auto border border-primary/10">
            <p className="text-secondary leading-relaxed mb-6">
              AI分析の結果、あなたには**「冒険の伴走者」**という役割がぴったりです。子どもたちの発想を形にしつつ、安全を見守る重要なポジション。あなたのスキルが、誰かの忘れられない思い出になります。
            </p>
            <button onClick={() => setStep(3)} className="btn-primary w-full justify-center py-4">
              この役割で応募する
            </button>
          </div>
        </motion.div>
      )
    },
    {
      id: 3,
      title: "ありがとうございます！",
      content: (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-3xl mb-4">冒険の仲間入りです</h3>
          <p className="text-text-muted mb-8">
            追って、担当者よりLINEまたはメールにて詳細をご連絡いたします。<br />
            まずは一度、遊び場へ遊びに来てくださいね。
          </p>
          <button onClick={() => setStep(1)} className="text-primary font-bold hover:underline">
            トップページへ戻る
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <Heart size={16} />
            <span>Join Our Adventure</span>
          </motion.div>
          <h1 className="text-5xl mb-6">一緒に遊び場を創る仲間へ</h1>
          <p className="text-text-muted max-w-xl mx-auto">
            「自分に何ができるかわからない」という方も大丈夫。
            AIがあなたの興味に合わせた参加方法を提案します。
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-[40px] p-8 md:p-12 shadow-premium border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                  {step}
                </span>
                <h2 className="text-2xl font-bold">{steps[step-1].title}</h2>
              </div>
              
              {steps[step-1].content}
            </motion.div>
          </AnimatePresence>

          {/* AI Helper Bubble */}
          <div className="absolute -right-4 md:-right-12 top-0 translate-y-1/2 hidden lg:block">
            <div className="bg-primary p-6 rounded-[24px] rounded-bl-none text-white w-48 shadow-lg">
              <p className="text-xs font-bold flex items-center gap-2 mb-2">
                <MessageCircle size={14} /> AIコンシェルジュ
              </p>
              <p className="text-xs leading-relaxed opacity-90">
                あなたの得意なこと、やってみたいことを教えてください！最適なチームをご提案します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;
