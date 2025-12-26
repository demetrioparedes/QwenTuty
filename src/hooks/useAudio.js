import { useCallback, useRef } from 'react';

export const useAudio = () => {
  const audioContext = useRef(null);

  const initAudio = () => {
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
    }
  };

  const playTone = (freq, type, duration, startTime = 0) => {
    initAudio();
    const ctx = audioContext.current;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);

    gain.gain.setValueAtTime(0.1, ctx.currentTime + startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + startTime);
    osc.stop(ctx.currentTime + startTime + duration);
  };

  const playSfx = useCallback((type) => {
    try {
        switch (type) {
        case 'click':
            playTone(800, 'sine', 0.1);
            break;
        case 'type':
            playTone(400 + Math.random() * 200, 'square', 0.05);
            break;
        case 'success':
            playTone(440, 'sine', 0.1, 0);       // A4
            playTone(554.37, 'sine', 0.1, 0.1);  // C#5
            playTone(659.25, 'sine', 0.2, 0.2);  // E5
            break;
        case 'error':
            playTone(150, 'sawtooth', 0.3);
            break;
        default:
            break;
        }
    } catch (e) {
        console.error("Audio playback failed", e);
    }
  }, []);

  const speak = useCallback((text, lang = 'es-ES') => {
    if (!window.speechSynthesis) return;

    // Cancel previous
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.pitch = 1.2; // Robot-like
    utterance.rate = 1.0;

    window.speechSynthesis.speak(utterance);
  }, []);

  return { playSfx, speak };
};
