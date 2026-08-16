"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import { FieldError, RequiredMark, labelClass } from "./FormField";
import {
  COUNTRIES,
  DEFAULT_COUNTRY_CODE,
  digitsOf,
  findCountry,
  splitPhone,
  type Country,
} from "@/lib/countries";

/**
 * International phone entry: a country selector carrying the flag and dial
 * code, plus a national-number input.
 *
 * Two decisions worth recording:
 *
 * 1. Flags are <img> elements from flagcdn, not emoji. Windows ships no flag
 *    glyphs, so 🇮🇳 renders as the bare letters "IN" for a large share of
 *    applicants — on a form whose main audience is in India. The image has an
 *    explicit fallback to the ISO code so a blocked CDN degrades to something
 *    legible rather than a broken-image icon.
 *
 * 2. The list is searchable. Fifty-odd countries in a plain <select> is a
 *    scroll-hunt on mobile; typing "sing" or "65" should be enough.
 *
 * The value handed to the form is always `+<dial> <national>`, so the shared
 * validator in lib/careers can check it against the country's digit range.
 */

function CountryFlag({
  code,
  className = "",
}: {
  code: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        aria-hidden="true"
        className={`inline-flex h-4 w-6 items-center justify-center rounded-[2px] border border-gray-200 bg-gray-50 text-[8px] font-bold tracking-tight text-gray-600 ${className}`}
      >
        {code}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- external flag CDN;
    // next/image would require whitelisting the host in next.config.
    <img
      src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w80/${code.toLowerCase()}.png 2x`}
      width={24}
      height={16}
      alt=""
      aria-hidden="true"
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-4 w-6 shrink-0 rounded-[2px] object-cover ring-1 ring-black/10 ${className}`}
    />
  );
}

export default function PhoneField({
  id = "phone",
  value,
  onChange,
  error,
  disabled,
  required,
}: {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}) {
  const initial = useMemo(() => splitPhone(value), []); // eslint-disable-line react-hooks/exhaustive-deps
  const [country, setCountry] = useState<Country>(
    value ? initial.country : findCountry(DEFAULT_COUNTRY_CODE),
  );
  const [national, setNational] = useState(value ? initial.national : "");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const listId = `${id}-country-list`;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    // Match on name, ISO code, or dial code with or without the leading +.
    const bare = q.replace(/^\+/, "");
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase() === q ||
        c.dialCode.replace("+", "").startsWith(bare),
    );
  }, [query]);

  const emit = (nextCountry: Country, nextNational: string) => {
    const trimmed = nextNational.trim();
    onChange(trimmed ? `${nextCountry.dialCode} ${trimmed}` : "");
  };

  const choose = (next: Country) => {
    setCountry(next);
    emit(next, national);
    setOpen(false);
    setQuery("");
    triggerRef.current?.focus();
  };

  // Close on outside click and on Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      setActiveIndex(0);
      searchRef.current?.focus();
    }
  }, [open]);

  // Keep the highlighted row in view during keyboard navigation.
  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelector(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  const onListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (filtered[activeIndex]) choose(filtered[activeIndex]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  };

  const digits = digitsOf(national).length;
  const invalid = Boolean(error);

  return (
    <div ref={wrapperRef} className="relative">
      <label htmlFor={id} className={labelClass}>
        Phone number
        {required && <RequiredMark />}
      </label>
      <p id={hintId} className="mt-1.5 text-[13px] text-gray-500">
        Pick your country, then enter the number without the code.
      </p>

      <div
        className={`mt-2 flex rounded-lg border bg-white transition-colors ${
          invalid
            ? "border-rose-400 focus-within:border-rose-500 focus-within:ring-4 focus-within:ring-rose-500/10"
            : "border-gray-200 hover:border-gray-300 focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/10"
        } ${disabled ? "cursor-not-allowed bg-gray-50" : ""}`}
      >
        <button
          ref={triggerRef}
          type="button"
          disabled={disabled}
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-label={`Country code: ${country.name}, ${country.dialCode}. Change country`}
          className="flex shrink-0 items-center gap-2 rounded-l-lg border-r border-gray-200 px-3.5 text-[15px] text-namo-black transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <CountryFlag code={country.code} />
          <span className="font-medium tabular-nums">{country.dialCode}</span>
          <ChevronDown
            size={14}
            aria-hidden="true"
            className={`text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <input
          id={id}
          name={id}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          value={national}
          disabled={disabled}
          required={required}
          aria-required={required || undefined}
          aria-invalid={invalid ? true : undefined}
          aria-describedby={[invalid ? errorId : null, hintId]
            .filter(Boolean)
            .join(" ")}
          placeholder={country.example}
          maxLength={country.max + 6}
          onChange={(event) => {
            // Allow digits and the separators people naturally type.
            const next = event.target.value.replace(/[^\d\s()-]/g, "");
            setNational(next);
            emit(country, next);
          }}
          className="w-full min-w-0 rounded-r-lg bg-transparent px-4 py-3.5 text-[15px] text-namo-black outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:text-gray-500"
        />
      </div>

      {/* Live digit count, but only once typing has started and only while the
          number is short — a correct number should not be nagged at. */}
      {digits > 0 && digits < country.min && !invalid && (
        <p className="mt-2 text-[12px] text-gray-500">
          {country.name} numbers are{" "}
          {country.min === country.max
            ? `${country.min} digits`
            : `${country.min}–${country.max} digits`}
          . You've entered {digits}.
        </p>
      )}

      <FieldError id={errorId} message={error} />

      {open && (
        <div className="absolute left-0 z-30 mt-2 w-full max-w-[380px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl shadow-black/5">
          <div className="flex items-center gap-2 border-b border-gray-100 px-3.5 py-2.5">
            <Search size={15} className="shrink-0 text-gray-500" aria-hidden="true" />
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={onListKeyDown}
              placeholder="Search country or code"
              aria-label="Search countries"
              aria-controls={listId}
              aria-activedescendant={
                filtered[activeIndex]
                  ? `${listId}-${filtered[activeIndex].code}`
                  : undefined
              }
              className="w-full bg-transparent text-[14px] text-namo-black outline-none placeholder:text-gray-500"
            />
          </div>

          <ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-label="Country"
            className="max-h-[260px] overflow-y-auto py-1"
          >
            {filtered.length === 0 && (
              <li className="px-3.5 py-6 text-center text-[13px] text-gray-500">
                No country matches “{query}”.
              </li>
            )}
            {filtered.map((item, index) => {
              const selected = item.code === country.code;
              return (
                <li
                  key={item.code}
                  id={`${listId}-${item.code}`}
                  role="option"
                  aria-selected={selected}
                  data-index={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => choose(item)}
                  className={`flex min-h-[44px] cursor-pointer items-center gap-3 px-3.5 py-2.5 text-[14px] ${
                    index === activeIndex ? "bg-accent-light" : ""
                  }`}
                >
                  <CountryFlag code={item.code} />
                  <span className="min-w-0 flex-1 truncate text-namo-black">
                    {item.name}
                  </span>
                  {/* gray-600, not gray-500: on the accent-light highlight of
                      the active row, gray-500 falls to 4.32:1 — under AA. */}
                  <span className="shrink-0 tabular-nums text-gray-600">
                    {item.dialCode}
                  </span>
                  {selected && (
                    <Check size={15} className="shrink-0 text-accent" aria-hidden="true" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
