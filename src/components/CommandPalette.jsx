import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const COMMANDS = [
  {
    id: 'about',
    command: 'about',
    label: 'Display short developer bio',
    category: 'IDENTITY',
    output: `Mickey Jr (aka Coderastrophy) — 3rd Year CS & Engineering student at Adama Science & Technology University, Ethiopia. Systems thinking, commit-driven development, film, and philosophy.`,
  },
  {
    id: 'skills',
    command: 'skills',
    label: 'List full technology stack',
    category: 'STACK',
    output: `Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Vite
Backend: Node.js, Express.js, REST APIs
Databases: PostgreSQL, MongoDB
Tools & Workflow: Git/GitHub, Docker, Linux, System Architecture`,
  },
  {
    id: 'projects',
    command: 'projects --filter=fullstack',
    label: 'Filter & jump to projects',
    category: 'NAVIGATION',
    action: 'projects',
    output: `Navigating to projects section and filtering full-stack repos...`,
  },
  {
    id: 'theme',
    command: 'theme toggle',
    label: 'Switch light / dark theme',
    category: 'PREFERENCES',
    action: 'theme',
    output: `Toggling application theme mode...`,
  },
  {
    id: 'cv',
    command: 'cv',
    label: 'View / Download resume (CV)',
    category: 'DOCUMENT',
    action: 'cv',
    output: `Opening resume document modal...`,
  },
  {
    id: 'clear',
    command: 'clear',
    label: 'Clear terminal screen history',
    category: 'UTILITY',
    action: 'clear',
    output: `Terminal screen cleared.`,
  },
];

const CommandPalette = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isDark, toggleTheme } = useTheme();
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  const filteredCommands = COMMANDS.filter(
    (cmd) =>
      cmd.command.toLowerCase().includes(query.toLowerCase()) ||
      cmd.label.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const executeCommand = (cmdItem) => {
    if (!cmdItem) return;

    if (cmdItem.action === 'clear') {
      setHistory([]);
      setQuery('');
      return;
    }

    if (cmdItem.action === 'theme') {
      toggleTheme();
    } else if (cmdItem.action === 'projects') {
      onClose();
      onNavigate('projects');
    } else if (cmdItem.action === 'cv') {
      onClose();
      window.open('/cv.html', '_blank');
    }

    setHistory((prev) => [
      ...prev,
      { command: cmdItem.command, output: cmdItem.output, timestamp: new Date().toLocaleTimeString() },
    ]);
    setQuery('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? Math.max(0, filteredCommands.length - 1) : prev - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands.length > 0) {
        executeCommand(filteredCommands[selectedIndex] || filteredCommands[0]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cmd-overlay" onClick={onClose}>
      <div className="cmd-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-header">
          <div className="cmd-header-left">
            <span className="cmd-dot red" />
            <span className="cmd-dot yellow" />
            <span className="cmd-dot green" />
            <span className="cmd-title">coderastrophy@portfolio ~ cli</span>
          </div>
          <div className="cmd-header-right">
            <span className="cmd-kbd-hint">ESC to close</span>
            <button className="cmd-close-btn" onClick={onClose}>✕</button>
          </div>
        </div>

        {history.length > 0 && (
          <div className="cmd-history">
            {history.map((item, idx) => (
              <div key={idx} className="cmd-history-item">
                <div className="cmd-prompt-line">
                  <span className="cmd-prompt-symbol">❯</span>
                  <span className="cmd-entered">{item.command}</span>
                  <span className="cmd-time">{item.timestamp}</span>
                </div>
                <div className="cmd-output">{item.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>
        )}

        <div className="cmd-input-wrapper">
          <span className="cmd-prompt-symbol">❯</span>
          <input
            ref={inputRef}
            type="text"
            className="cmd-input"
            placeholder="Type a command (e.g. about, skills, theme, cv)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="cmd-suggestions">
          <div className="cmd-suggestions-label">COMMAND SUGGESTIONS ({filteredCommands.length})</div>
          {filteredCommands.length === 0 ? (
            <div className="cmd-no-match">No command matched "{query}".</div>
          ) : (
            filteredCommands.map((cmd, idx) => (
              <div
                key={cmd.id}
                className={`cmd-item ${idx === selectedIndex ? 'selected' : ''}`}
                onClick={() => executeCommand(cmd)}
                onMouseMove={() => {
                  if (selectedIndex !== idx) setSelectedIndex(idx);
                }}
              >
                <div className="cmd-item-main">
                  <span className="cmd-item-name">&gt; {cmd.command}</span>
                  <span className="cmd-item-label">{cmd.label}</span>
                </div>
                <span className="cmd-item-category">{cmd.category}</span>
              </div>
            ))
          )}
        </div>

        <div className="cmd-footer">
          <span>↑↓ to navigate</span>
          <span>↵ to execute</span>
          <span>ctrl + k to toggle</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
