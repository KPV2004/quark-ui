import React, { useState } from 'react';
import styles from './CodeHighlight.module.css';

interface CodeHighlightProps {
  code: string;
  language?: 'tsx' | 'css';
}

function highlightTSX(code: string) {
  // Escape HTML characters first
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Regex replacement for syntax highlighting
  // 1. Comments
  html = html.replace(/(\/\/.*)/g, '<span class="comment">$1</span>');

  // 2. Keywords
  const keywords = ['import', 'export', 'from', 'const', 'return', 'function', 'type', 'interface', 'default', 'void', 'as', 'let', 'var', 'if', 'else', 'extends', 'true', 'false'];
  keywords.forEach(kw => {
    const regex = new RegExp(`\\b(${kw})\\b`, 'g');
    html = html.replace(regex, '<span class="keyword">$1</span>');
  });

  // 3. String literals (double quotes, single quotes, backticks)
  html = html.replace(/(["'`])(.*?)\1/g, '<span class="string">$1$2$1</span>');

  // 4. Props / Attributes (like variant=, size=)
  html = html.replace(/\b([a-zA-Z0-9_-]+)=/g, '<span class="attr">$1</span>=');

  // 5. Component Tags (Uppercase JSX elements like <Button or </Button>)
  html = html.replace(/(&lt;\/?[A-Z][a-zA-Z0-9]*)/g, '<span class="component">$1</span>');
  
  // 6. Builtin HTML Tags (Lowercase JSX elements like <div or </div)
  html = html.replace(/(&lt;\/?[a-z]+)/g, '<span class="tag">$1</span>');
  
  // 7. JSX tag closings (like > or />)
  html = html.replace(/(\/?&gt;)/g, '<span class="tag-close">$1</span>');

  return html;
}

function highlightCSS(code: string) {
  // Escape HTML characters
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // 1. Comments /* ... */
  html = html.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>');

  // 2. Class names (.button, .variantDefault)
  html = html.replace(/(\.[a-zA-Z0-9_-]+)/g, '<span class="class">$1</span>');

  // 3. Properties (color:, background-color:)
  html = html.replace(/([a-zA-Z0-9_-]+)\s*:/g, '<span class="property">$1</span>:');

  // 4. Values (: #fff, : 16px)
  html = html.replace(/:\s*([^;]+);/g, ': <span class="value">$1</span>;');

  // 5. CSS variables (var(--qk-...))
  html = html.replace(/(var\(--[a-zA-Z0-9_-]+\))/g, '<span class="variable">$1</span>');

  return html;
}

export const CodeHighlight: React.FC<CodeHighlightProps> = ({ code, language = 'tsx' }) => {
  const [copied, setCopied] = useState(false);

  const highlighted = language === 'tsx' ? highlightTSX(code) : highlightCSS(code);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.codeBlock}>
      <button 
        onClick={handleCopy} 
        className={styles.copyButton}
        aria-label="Copy code"
      >
        {copied ? 'Copied! ✓' : 'Copy'}
      </button>
      <pre className={styles.pre}>
        <code 
          className={styles.code}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
    </div>
  );
};
