"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Palette, Camera } from 'lucide-react';

const artworks = [
  { id: 1, title: "空飛ぶ秘密基地", author: "たける君 (6歳)", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800", description: "枝と葉っぱを組み合わせて作った、鳥と一緒に飛べる基地だそうです。" },
  { id: 2, title: "泥んこの怪獣", author: "ゆいちゃん (4歳)", image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800", description: "雨上がりの泥を使って、強そうな怪獣を一生懸命こねて作りました。" },
  { id: 3, title: "虹色の焚き火", author: "そうた君 (8歳)", image: "https://images.unsplash.com/photo-1521470500477-da62199ed4a5?q=80&w=800", description: "薪の並べ方を工夫して、炎が虹色に見えるように工夫した自信作です。" },
];

const GalleryPage = () => {
  return (
    <div className="pt-32 pb-20 bg-[#FDFCF8]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-accent font-bold mb-4"
            >
              <Palette size={24} />
              <span>Adventurous Art</span>
            </motion.div>
            <h1 className="text-5xl mb-6">こどもたちの「冒険の跡」</h1>
            <p className="text-text-muted leading-relaxed">
              プレーパークで生まれた、世界にたった一つの作品たち。
              完成品だけでなく、それを作っている時の「夢中」な表情こそが、最高の芸術です。
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-subtle flex items-center gap-4 border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Camera size={24} />
            </div>
            <div className="text-sm">
              <p className="font-bold">今日の投稿</p>
              <p className="text-gray-400">12件の新しい発見</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {artworks.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 shadow-premium">
                <Image 
                  src={art.image} 
                  alt={art.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1">AI Voice</p>
                    <p className="text-sm leading-tight italic">
                      「{art.description}」
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl mb-1">{art.title}</h3>
              <p className="text-primary font-bold text-sm flex items-center gap-2">
                <Sparkles size={16} /> {art.author}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="btn-primary">
            もっと作品を見る
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
