import { useEffect, useRef, useState } from 'react';
import {
  Root,
  Button,
  Chevron,
  Listbox,
  Option,
} from '../assets/wrappers/LanguageSelect';

import { useTranslation } from 'react-i18next';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
];

export default function LanguageSelect({ value = 'en', onChange, $isSticky }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(
    Math.max(
      0,
      LANGS.findIndex((l) => l.code === value)
    )
  );
  const rootRef = useRef(null);
  const btnRef = useRef(null);
  const listRef = useRef(null);

  const selectIndex = (i) => {
    const lang = LANGS[i];
    if (!lang) return;
    onChange?.(lang.code);
    setActiveIndex(i);
    setOpen(false);
    btnRef.current?.focus();
  };

  // close on click outside
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  // keyboard
  const onKeyDown = (e) => {
    if (
      !open &&
      (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')
    ) {
      e.preventDefault();
      setOpen(true);
      setTimeout(
        () =>
          listRef.current
            ?.querySelector('[data-active="true"]')
            ?.scrollIntoView({ block: 'nearest' }),
        0
      );
      return;
    }
    if (!open) return;

    if (e.key === 'Escape') {
      setOpen(false);
      btnRef.current?.focus();
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(LANGS.length - 1, i + 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectIndex(activeIndex);
    }
    if (e.key === 'Tab') {
      setOpen(false);
    } // allow normal tabbing
  };

  return (
    <Root ref={rootRef}>
      <Button
        ref={btnRef}
        type='button'
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-controls='lang-listbox'
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        $isSticky={$isSticky}
      >
        {LANGS.find((l) => l.code === value)?.label ?? 'English'}
        <Chevron $open={open}>
          <MdOutlineKeyboardArrowDown />
        </Chevron>
      </Button>

      {open && (
        <Listbox
          id='lang-listbox'
          role='listbox'
          tabIndex={-1}
          ref={listRef}
          aria-activedescendant={`lang-opt-${activeIndex}`}
          onKeyDown={onKeyDown}
        >
          {LANGS.map((l, i) => (
            <Option
              key={l.code}
              id={`lang-opt-${i}`}
              role='option'
              aria-selected={i === activeIndex}
              data-active={i === activeIndex}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseDown={(e) => e.preventDefault()} // prevent button blur before click
              onClick={() => {
                i18n.changeLanguage(l.code);
                selectIndex(i);
              }}
            >
              {l.label}
            </Option>
          ))}
        </Listbox>
      )}
    </Root>
  );
}
