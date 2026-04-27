"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CloudRain, Sun, AlertCircle, Send, CheckCircle, Bell, RefreshCcw } from 'lucide-react';

const AdminDashboard = () => {
  const [weatherStatus, setWeatherStatus] = useState("checking");
  const [announcement, setAnnouncement] = useState("");
  const [isSent, setIsSent] = useState(false);

  const checkWeather = () => {
    setWeatherStatus("loading");
    setTimeout(() => {
      setWeatherStatus("rainy");
      setAnnouncement("【開催見合わせのお知らせ】\n明日のプレーパークは、あいにくの雨予報のため開催を見合わせ、来週に延期いたします。楽しみにしてくださっていた皆様、申し訳ありません。来週、泥んこ遊びができるのを楽しみにしています！");
    }, 1500);
  };

  const sendAnnouncement = () => {
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-secondary">運営ダッシュボード</h1>
            <p className="text-text-muted">AIが運営の「泥臭い」事務作業をサポートします。</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 text-gray-400">
              <RefreshCcw size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Weather & Status Card */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[32px] p-8 shadow-premium border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <CloudRain className="text-primary" /> 開催判断サポート
                </h2>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Weather AI</span>
              </div>

              {weatherStatus === "checking" ? (
                <div className="text-center py-10">
                  <button 
                    onClick={checkWeather}
                    className="btn-primary"
                  >
                    明日の天気をチェックして案内を作成
                  </button>
                </div>
              ) : weatherStatus === "loading" ? (
                <div className="text-center py-10">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block text-primary mb-4"
                  >
                    <RefreshCcw size={40} />
                  </motion.div>
                  <p className="text-text-muted">気象データと過去の判断基準を分析中...</p>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-6 p-6 bg-red-50 rounded-2xl border border-red-100">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm">
                      <CloudRain size={32} />
                    </div>
                    <div>
                      <p className="text-red-800 font-bold text-lg">明日は「雨」の予報です（降水確率80%）</p>
                      <p className="text-red-600 text-sm">過去の基準に基づき、「中止・延期」の案内を推奨します。</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">生成された案内文</label>
                    <textarea 
                      className="w-full h-40 p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm leading-relaxed"
                      value={announcement}
                      onChange={(e) => setAnnouncement(e.target.value)}
                    />
                  </div>

                  <div className="flex justify-end gap-4">
                    <button className="px-6 py-2 rounded-full font-bold text-sm text-gray-500 hover:bg-gray-100">
                      内容を修正
                    </button>
                    <button 
                      onClick={sendAnnouncement}
                      className="btn-primary px-8 flex items-center gap-2"
                    >
                      {isSent ? <CheckCircle size={18} /> : <Send size={18} />}
                      {isSent ? "配信完了" : "HP・SNSへ一斉配信"}
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Participation Stats (Dummy) */}
            <div className="bg-white rounded-[32px] p-8 shadow-premium border border-gray-100">
              <h2 className="text-xl font-bold mb-6">直近の参加状況</h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "前回の参加者", value: "42名", trend: "+12%" },
                  { label: "ボランティア", value: "8名", trend: "安定" },
                  { label: "新規の親子", value: "5組", trend: "+20%" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-xs text-text-muted mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                    <p className="text-[10px] text-primary font-bold mt-1">{stat.trend}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Notifications */}
          <div className="space-y-8">
            <div className="bg-secondary text-white rounded-[32px] p-8 shadow-lg">
              <h3 className="font-bold flex items-center gap-2 mb-6">
                <Bell size={18} /> 通知・タスク
              </h3>
              <div className="space-y-4">
                {[
                  { icon: <AlertCircle size={14} />, text: "備品のノコギリが1本不足しています" },
                  { icon: <Sun size={14} />, text: "次回の開催地（雑木林）の下見が必要です" },
                  { icon: <RefreshCcw size={14} />, text: "AIレポートの確認待ちが1件あります" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-xs bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="mt-0.5">{item.icon}</div>
                    <p className="opacity-80">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
