"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, TreePine, Hammer, Smile, Map as MapIcon } from 'lucide-react';
import Link from 'next/link';
import ParkMap from '@/components/ParkMap';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Adventure Play Park"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 text-sm font-bold tracking-widest text-white uppercase bg-accent organic-shape">
                  Kodaira Play Park
                </span>
                <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-green-500/30">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Today: Open</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
                自分の責任で、<br />
                <span className="text-sunlight">自由に遊ぶ。</span>
              </h1>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
                木登り、焚き火、泥遊び。禁止事項の多い公園ではできない「本気の遊び」がここにはあります。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary text-lg px-8 py-4">
                  冒険をはじめる
                  <ArrowRight size={20} />
                </Link>
                <Link href="/access" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold transition-all border border-white/30">
                  場所を確認する
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="section-padding bg-background relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">プレーパークでできること</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              草、土、水、火。自然の素材を使い、子どもの「やりたい」を形にする場所です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <TreePine className="text-primary" />, 
                title: "自然の中で遊ぶ", 
                desc: "木登りや秘密基地作り。季節の移ろいを肌で感じながら遊びます。" 
              },
              { 
                icon: <Flame className="text-accent" />, 
                title: "火を使う", 
                desc: "焚き火を囲んでおやつを焼いたり、火の温かさや怖さを学びます。" 
              },
              { 
                icon: <Hammer className="text-secondary" />, 
                title: "道具でつくる", 
                desc: "トンカチやノコギリを使って、自分だけの作品を形にします。" 
              },
              { 
                icon: <Smile className="text-primary-light" />, 
                title: "ありのままで", 
                desc: "大人は見守るだけ。自分のペースで、自由に過ごせる時間です。" 
              },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-morphism p-8 rounded-3xl hover:shadow-premium transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center mb-6 shadow-subtle group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <MapIcon size={24} />
                </div>
                <h2 className="text-4xl mb-6">遊び場を探検しよう</h2>
                <p className="text-text-muted mb-8 leading-relaxed">
                  小平中央公園の雑木林や、きつねっぱら公園など、開催日によって場所が変わります。それぞれの場所に、その土地ならではの遊びが待っています。
                </p>
                <Link href="/access" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                  詳しいアクセス情報を見る <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
            <div className="lg:w-2/3 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <ParkMap />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl text-white mb-8">
            冒険の準備はできましたか？
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            はじめての方も大歓迎です。持ち物やルールを確認して、遊び場へ行こう！
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/first-time" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
              はじめてガイドを見る
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .text-sunlight {
          color: #ffd700;
        }
      `}</style>
    </div>
  );
}
