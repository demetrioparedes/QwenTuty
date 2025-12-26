import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../stores/useGameStore';

const CertificationView = () => {
  const { t } = useTranslation();
  const { user } = useGameStore();
  const date = new Date().toLocaleDateString();

  return (
    <div className="w-full h-full bg-gray-900 flex items-center justify-center p-8">
      <div className="bg-white p-2 rounded-lg shadow-2xl max-w-3xl w-full transform rotate-1 hover:rotate-0 transition-transform duration-500">
        <div className="border-4 border-double border-gray-800 p-8 flex flex-col items-center text-center bg-yellow-50/50 relative overflow-hidden">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <span className="text-9xl font-bold">ANTIGRAVITY</span>
            </div>

            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-5xl">🏆</span>
            </div>

            <h1 className="text-4xl font-display font-bold text-gray-800 mb-2 uppercase tracking-widest">{t('ui.certificate')}</h1>
            <p className="text-xl text-gray-600 font-serif italic mb-8">Of Completion</p>

            <p className="text-gray-700 mb-2">This certifies that</p>
            <h2 className="text-5xl font-bold text-blue-900 mb-6 font-display border-b-2 border-gray-300 pb-2 px-8 min-w-[300px]">
                {user.name}
            </h2>

            <p className="text-gray-700 max-w-lg mx-auto mb-8">
                Has successfully completed the <strong>Antigravity Robot Boss Academy</strong> training program, demonstrating expert proficiency in AI Agent management, workflow automation, and code wizardry.
            </p>

            <div className="flex justify-between w-full max-w-lg mt-8">
                <div className="text-left">
                    <p className="font-bold text-gray-800">{date}</p>
                    <div className="h-px w-32 bg-gray-800 mt-1"></div>
                    <p className="text-xs text-gray-500 mt-1">Date</p>
                </div>
                <div className="text-right">
                    <p className="font-bold text-gray-800">Antigravity HQ</p>
                    <div className="h-px w-32 bg-gray-800 mt-1"></div>
                    <p className="text-xs text-gray-500 mt-1">Authorized Signature</p>
                </div>
            </div>

            <div className="mt-12 no-print">
                <button
                    onClick={() => window.print()}
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-500 transition-colors flex items-center gap-2"
                >
                    <span>🖨️</span> {t('ui.download_cert')}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationView;
