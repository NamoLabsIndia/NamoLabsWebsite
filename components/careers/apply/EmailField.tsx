"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FieldError, RequiredMark, inputClass, labelClass } from "./FormField";
import { EMAIL_MAX_LENGTH, suggestEmailDomains } from "@/lib/careers";

/**
 * Email input that completes the domain once `@` is typed.
 *
 * Built as an ARIA 1.2 combobox rather than a plain datalist: `<datalist>`
 * renders inconsistently across browsers, can't be styled, and on several
 * mobile browsers doesn't appear at all.
 *
 * The suggestions are a shortcut, never a constraint — university and company
 * addresses are exactly the ones we most want, so anything typed is accepted
 * and the list simply disappears when it has nothing to add.
 */
export default function EmailField({
  id = "email",
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
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => suggestEmailDomains(value), [value]);
  const errorId = `${id}-error`;
  const listId = `${id}-suggestions`;
  const visible = open && suggestions.length > 0;

  useEffect(() => {
    setActiveIndex(-1);
  }, [value]);

  useEffect(() => {
    if (!visible) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [visible]);

  const accept = (suggestion: string) => {
    onChange(suggestion);
    setOpen(false);
    setActiveIndex(-1);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!visible) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (event.key === "Enter" && activeIndex >= 0) {
      // Only intercept Enter when a suggestion is actually highlighted, so the
      // form can still be submitted from this field.
      event.preventDefault();
      accept(suggestions[activeIndex]);
    } else if (event.key === "Tab" && activeIndex >= 0) {
      accept(suggestions[activeIndex]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <label htmlFor={id} className={labelClass}>
        Email address
        {required && <RequiredMark />}
      </label>

      <input
        id={id}
        name={id}
        type="email"
        inputMode="email"
        autoComplete="email"
        role="combobox"
        aria-expanded={visible}
        aria-controls={visible ? listId : undefined}
        aria-autocomplete="list"
        aria-activedescendant={
          activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined
        }
        value={value}
        disabled={disabled}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        placeholder="ayush.burnwal@gmail.com"
        maxLength={EMAIL_MAX_LENGTH}
        onChange={(event) => {
          onChange(event.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        className={`mt-2 ${inputClass(Boolean(error))}`}
      />

      {/* Announced without stealing focus from the input. */}
      <span className="sr-only" aria-live="polite">
        {visible
          ? `${suggestions.length} email ${
              suggestions.length === 1 ? "suggestion" : "suggestions"
            } available. Use arrow keys to review.`
          : ""}
      </span>

      <FieldError id={errorId} message={error} />

      {visible && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Email suggestions"
          className="absolute left-0 z-30 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-xl shadow-black/5"
        >
          {suggestions.map((suggestion, index) => {
            const [local, domain] = suggestion.split("@");
            return (
              <li
                key={suggestion}
                id={`${listId}-${index}`}
                role="option"
                aria-selected={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
                // mousedown, not click: click fires after blur, by which point
                // the outside-click handler has already closed the list.
                onMouseDown={(event) => {
                  event.preventDefault();
                  accept(suggestion);
                }}
                className={`flex min-h-[44px] cursor-pointer items-center px-4 py-2.5 text-[14px] ${
                  index === activeIndex ? "bg-accent-light" : ""
                }`}
              >
                <span className="text-gray-500">{local}@</span>
                <span className="font-semibold text-namo-black">{domain}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
