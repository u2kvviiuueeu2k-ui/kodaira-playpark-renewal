"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Sparkles, Send, Image as ImageIcon, Loader2 } from 'lucide-react';

const AIReportGenerator = () => {
  const [images, setImages] = useState<File[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDraft, setGeneratedDraft] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const generateReport = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedDraft(`今日のプレーパークは、五月晴れの空の下、最高に賑やかな一日になりました！\n\n大きなクヌギの木に登って「ヤッホー！」と叫ぶ子どもたち。焚き火コーナーでは、自分たちで火を起こしてマシュマロを焼く姿も見られました。\n\n泥だらけになりながら秘密基地を作るチームは、大人も驚くような発想で枝を組み上げていました。自分の「やりたい」を形にする瞬間、子どもたちの目はキラキラと輝いています。\n\n次回もまた、この森で会いましょう！`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container max-w-4xl">
        <div className="bg-white rounded-[32px] shadow-premium overflow-hidden">
          <div className="bg-primary p-8 text-white flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <Sparkles /> AI活動レポート生成
              </h1>
              <p className="text-white/70 text-sm mt-1">
                写真をアップロードするだけで、AIが素敵なブログ記事のドラフトを作成します。
              </p>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
              Admin Only
            </div>
          </div>

          <div className="p-8">
            {/* Step 1: Upload */}
            <div className="mb-10">
              <label className="block text-sm font-bold text-secondary mb-4 uppercase tracking-wider">
                1. 写真をアップロード（複数可）
              </label>
              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center hover:border-primary transition-colors cursor-pointer relative">
                <input 
                  type="file" 
                  multiple 
                  className="absolute inset-0 opacity-0 cursor-pointer" 
                  onChange={handleFileChange}
                />
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400">
                    <Upload size={32} />
                  </div>
                  <div className="text-sm text-gray-500">
                    {images.length > 0 ? (
                      <span className="text-primary font-bold">{images.length}枚の画像が選択されました</span>
                    ) : (
                      "クリックまたはドラッグ＆ドロップで写真を選択"
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Generate */}
            <div className="flex justify-center mb-10">
              <button
                disabled={images.length === 0 || isGenerating}
                onClick={generateReport}
                className={`btn-primary px-12 py-4 flex items-center gap-3 ${
                  (images.length === 0 || isGenerating) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="animate-spin" /> AIが分析中...
                  </>
                ) : (
                  <>
                    <Sparkles /> レポートを生成する
                  </>
                )}
              </button>
            </div>

            {/* Step 3: Result */}
            {generatedDraft && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-primary flex items-center gap-2">
                    <ImageIcon size={18} /> 生成されたドラフト
                  </h3>
                  <button className="text-xs font-bold text-primary hover:underline">
                    内容を修正する
                  </button>
                </div>
                <textarea
                  className="w-full h-64 bg-transparent border-none focus:ring-0 text-secondary leading-relaxed resize-none p-0"
                  value={generatedDraft}
                  onChange={(e) => setGeneratedDraft(e.target.value)}
                />
                <div className="mt-6 flex justify-end gap-4">
                  <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-bold text-sm">
                    下書き保存
                  </button>
                  <button className="btn-primary px-8 py-2 text-sm flex items-center gap-2">
                    <Send size={16} /> HPに公開する
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Efficiency Message */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm italic">
            「AIが事務を支え、人間が遊びに没頭する時間を作る。」
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIReportGenerator;
