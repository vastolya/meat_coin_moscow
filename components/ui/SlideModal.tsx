'use client'

import clsx from 'clsx'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import PlusIcon from '../icons/PlusIcon'

interface SlideModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  ariaLabel?: string
  className?: string
}

export default function SlideModal({
  isOpen,
  onClose,
  children,
  ariaLabel,
  className,
}: SlideModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : ''
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[5000] flex justify-end">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            onClick={onClose}
          />

          <motion.div
            className={clsx(
              'text-dark relative z-10 h-full w-full overflow-y-auto bg-white px-5 pt-5 pb-8 shadow-2xl md:w-[49vw] md:min-w-160 md:pt-10 md:pr-20 md:pb-18 md:pl-8',
              className,
            )}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
            aria-modal="true"
            role="dialog"
            aria-label={ariaLabel}
          >
            <button
              type="button"
              onClick={onClose}
              className="text-dark hover:text-accent flex w-full cursor-pointer justify-end transition-colors duration-300"
              aria-label="Закрыть"
            >
              <div className="rotate-45">
                <PlusIcon />
              </div>
            </button>

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
