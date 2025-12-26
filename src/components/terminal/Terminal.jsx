import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Terminal = ({ onCommand, history = [], className = '', ...props }) => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [lines, setLines] = useState(history);
  const bottomRef = useRef(null);

  useEffect(() => {
    setLines(history);
  }, [history]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim();
    // Add user command to lines immediately
    const newLines = [...lines, { type: 'input', text: `> ${cmd}` }];
    setLines(newLines);
    setInput('');

    // Delegate processing to parent
    if (onCommand) {
      onCommand(cmd, (response) => {
        // Callback to add response
        setLines(prev => [...prev, { type: 'output', text: response }]);
      });
    }
  };

  return (
    <div className={`bg-gray-900 font-mono text-sm p-4 overflow-hidden flex flex-col ${className}`} {...props}>
      <div className="flex-1 overflow-y-auto space-y-2 mb-2 custom-scrollbar">
        {lines.map((line, i) => (
          <div key={i} className={`${line.type === 'input' ? 'text-green-400' : 'text-gray-300'}`}>
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 items-center border-t border-gray-700 pt-2">
        <span className="text-green-500 font-bold">$</span>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600"
            placeholder={t('ui.terminal_placeholder')}
            autoFocus
            autoComplete="off"
        />
      </form>
    </div>
  );
};

export default Terminal;
