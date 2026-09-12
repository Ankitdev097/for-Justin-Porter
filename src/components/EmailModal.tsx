import { motion, AnimatePresence } from 'motion/react';
import { Copy, ExternalLink, X, Check } from 'lucide-react';
import { useState } from 'react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export function EmailModal({ isOpen, onClose, email }: EmailModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleOpenEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-md shadow-2xl relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-white mb-2">Let's set it up</h3>
                <p className="text-zinc-400 text-sm">
                  Reply to my previous message or use the options below to schedule your free 9-minute setup call.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 transition-colors group"
                >
                  <div className="flex items-center gap-3 text-zinc-200">
                    {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />}
                    <span className="font-medium">{email}</span>
                  </div>
                  <span className="text-xs text-zinc-500 font-medium tracking-wide uppercase group-hover:text-zinc-400 transition-colors">
                    {copied ? 'Copied' : 'Copy'}
                  </span>
                </button>

                <button
                  onClick={handleOpenEmail}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 transition-colors group"
                >
                  <div className="flex items-center gap-3 text-indigo-400">
                    <ExternalLink className="w-5 h-5 group-hover:text-indigo-300 transition-colors" />
                    <span className="font-medium text-indigo-100">Open Email App</span>
                  </div>
                  <span className="text-xs text-indigo-500/70 font-medium tracking-wide uppercase group-hover:text-indigo-400 transition-colors">
                    Draft Email
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
