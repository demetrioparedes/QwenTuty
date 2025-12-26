import React from 'react';
import Editor from '@monaco-editor/react';
import { useTranslation } from 'react-i18next';

const CodeEditor = ({
  initialValue = '// Code here',
  language = 'javascript',
  onChange,
  onMount,
  readOnly = false,
  height = '100%'
}) => {
  const { t } = useTranslation();

  const handleEditorChange = (value, event) => {
    if (onChange) {
      onChange(value);
    }
  };

  const handleEditorDidMount = (editor, monaco) => {
    if (onMount) {
      onMount(editor, monaco);
    }
  };

  return (
    <div className="w-full h-full border border-gray-700 rounded overflow-hidden">
      <Editor
        height={height}
        defaultLanguage={language}
        defaultValue={initialValue}
        theme="vs-dark"
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        loading={<div className="text-white p-4">{t('ui.editor_loading')}</div>}
        options={{
          readOnly: readOnly,
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: { top: 10 }
        }}
      />
    </div>
  );
};

export default CodeEditor;
