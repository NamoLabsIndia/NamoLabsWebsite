/**
 * Dialling data for the phone field.
 *
 * Deliberately hand-maintained rather than pulling in `libphonenumber-js`:
 * that library ships ~145KB of metadata, which is a poor trade for a single
 * optional-precision field on one form. What we need is the dial code, a
 * realistic example number, and a plausible national digit range — enough to
 * catch typos without rejecting legitimate numbers we don't have rules for.
 *
 * `min`/`max` are national significant digits, excluding the dial code.
 * Where a country's rules are irregular the range is kept deliberately wide:
 * a false rejection costs us a candidate, a false accept costs nothing.
 *
 * Flags are rendered as images, not emoji — Windows has no flag glyphs and
 * renders regional indicators as bare letters ("IN"), so emoji would break
 * for a large share of applicants. See CountryFlag in PhoneField.
 */

export interface Country {
  /** ISO 3166-1 alpha-2, lowercased for flag URLs. */
  code: string;
  name: string;
  dialCode: string;
  /** Example national number, shown as the placeholder. */
  example: string;
  min: number;
  max: number;
}

/**
 * India first — it is where most applicants are, and a form should not make
 * its most common user hunt. The rest follow alphabetically.
 */
export const COUNTRIES: Country[] = [
  { code: "IN", name: "India", dialCode: "+91", example: "98765 43210", min: 10, max: 10 },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971", example: "50 123 4567", min: 8, max: 9 },
  { code: "AR", name: "Argentina", dialCode: "+54", example: "11 1234 5678", min: 10, max: 11 },
  { code: "AT", name: "Austria", dialCode: "+43", example: "664 123456", min: 9, max: 13 },
  { code: "AU", name: "Australia", dialCode: "+61", example: "412 345 678", min: 9, max: 9 },
  { code: "BD", name: "Bangladesh", dialCode: "+880", example: "1712 345678", min: 10, max: 10 },
  { code: "BE", name: "Belgium", dialCode: "+32", example: "470 12 34 56", min: 8, max: 9 },
  { code: "BR", name: "Brazil", dialCode: "+55", example: "11 91234 5678", min: 10, max: 11 },
  { code: "CA", name: "Canada", dialCode: "+1", example: "416 555 0123", min: 10, max: 10 },
  { code: "CH", name: "Switzerland", dialCode: "+41", example: "78 123 45 67", min: 9, max: 9 },
  { code: "CL", name: "Chile", dialCode: "+56", example: "9 8765 4321", min: 8, max: 9 },
  { code: "CN", name: "China", dialCode: "+86", example: "138 0013 8000", min: 11, max: 11 },
  { code: "CO", name: "Colombia", dialCode: "+57", example: "321 1234567", min: 10, max: 10 },
  { code: "CZ", name: "Czechia", dialCode: "+420", example: "601 123 456", min: 9, max: 9 },
  { code: "DE", name: "Germany", dialCode: "+49", example: "151 12345678", min: 10, max: 11 },
  { code: "DK", name: "Denmark", dialCode: "+45", example: "20 12 34 56", min: 8, max: 8 },
  { code: "EG", name: "Egypt", dialCode: "+20", example: "10 1234 5678", min: 10, max: 10 },
  { code: "ES", name: "Spain", dialCode: "+34", example: "612 34 56 78", min: 9, max: 9 },
  { code: "FI", name: "Finland", dialCode: "+358", example: "50 123 4567", min: 9, max: 10 },
  { code: "FR", name: "France", dialCode: "+33", example: "6 12 34 56 78", min: 9, max: 9 },
  { code: "GB", name: "United Kingdom", dialCode: "+44", example: "7911 123456", min: 10, max: 10 },
  { code: "GH", name: "Ghana", dialCode: "+233", example: "23 123 4567", min: 9, max: 9 },
  { code: "GR", name: "Greece", dialCode: "+30", example: "694 123 4567", min: 10, max: 10 },
  { code: "HK", name: "Hong Kong", dialCode: "+852", example: "5123 4567", min: 8, max: 8 },
  { code: "ID", name: "Indonesia", dialCode: "+62", example: "812 3456 789", min: 9, max: 12 },
  { code: "IE", name: "Ireland", dialCode: "+353", example: "85 012 3456", min: 9, max: 9 },
  { code: "IL", name: "Israel", dialCode: "+972", example: "50 123 4567", min: 9, max: 9 },
  { code: "IT", name: "Italy", dialCode: "+39", example: "312 345 6789", min: 9, max: 11 },
  { code: "JP", name: "Japan", dialCode: "+81", example: "90 1234 5678", min: 10, max: 10 },
  { code: "KE", name: "Kenya", dialCode: "+254", example: "712 123456", min: 9, max: 9 },
  { code: "KR", name: "South Korea", dialCode: "+82", example: "10 1234 5678", min: 9, max: 10 },
  { code: "LK", name: "Sri Lanka", dialCode: "+94", example: "71 234 5678", min: 9, max: 9 },
  { code: "MX", name: "Mexico", dialCode: "+52", example: "55 1234 5678", min: 10, max: 10 },
  { code: "MY", name: "Malaysia", dialCode: "+60", example: "12 345 6789", min: 9, max: 10 },
  { code: "NG", name: "Nigeria", dialCode: "+234", example: "802 123 4567", min: 10, max: 10 },
  { code: "NL", name: "Netherlands", dialCode: "+31", example: "6 12345678", min: 9, max: 9 },
  { code: "NO", name: "Norway", dialCode: "+47", example: "412 34 567", min: 8, max: 8 },
  { code: "NP", name: "Nepal", dialCode: "+977", example: "984 1234567", min: 10, max: 10 },
  { code: "NZ", name: "New Zealand", dialCode: "+64", example: "21 123 4567", min: 8, max: 10 },
  { code: "PH", name: "Philippines", dialCode: "+63", example: "917 123 4567", min: 10, max: 10 },
  { code: "PK", name: "Pakistan", dialCode: "+92", example: "301 2345678", min: 10, max: 10 },
  { code: "PL", name: "Poland", dialCode: "+48", example: "512 123 456", min: 9, max: 9 },
  { code: "PT", name: "Portugal", dialCode: "+351", example: "912 345 678", min: 9, max: 9 },
  { code: "QA", name: "Qatar", dialCode: "+974", example: "3312 3456", min: 8, max: 8 },
  { code: "RO", name: "Romania", dialCode: "+40", example: "712 345 678", min: 9, max: 9 },
  { code: "RU", name: "Russia", dialCode: "+7", example: "912 123 4567", min: 10, max: 10 },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966", example: "50 123 4567", min: 9, max: 9 },
  { code: "SE", name: "Sweden", dialCode: "+46", example: "70 123 45 67", min: 7, max: 10 },
  { code: "SG", name: "Singapore", dialCode: "+65", example: "8123 4567", min: 8, max: 8 },
  { code: "TH", name: "Thailand", dialCode: "+66", example: "81 234 5678", min: 9, max: 9 },
  { code: "TR", name: "Türkiye", dialCode: "+90", example: "532 123 45 67", min: 10, max: 10 },
  { code: "TW", name: "Taiwan", dialCode: "+886", example: "912 345 678", min: 9, max: 9 },
  { code: "UA", name: "Ukraine", dialCode: "+380", example: "50 123 4567", min: 9, max: 9 },
  { code: "US", name: "United States", dialCode: "+1", example: "415 555 0123", min: 10, max: 10 },
  { code: "VN", name: "Vietnam", dialCode: "+84", example: "91 234 5678", min: 9, max: 10 },
  { code: "ZA", name: "South Africa", dialCode: "+27", example: "82 123 4567", min: 9, max: 9 },
];

export const DEFAULT_COUNTRY_CODE = "IN";

export function findCountry(code: string): Country {
  return (
    COUNTRIES.find((country) => country.code === code) ??
    COUNTRIES[0]
  );
}

/**
 * Resolves a stored `+91 98765 43210` back into a country and national number
 * so the field can be rehydrated. Longest dial code wins, because `+1` is a
 * prefix of nothing but `+9` is a prefix of `+91`, `+92`, `+94`…
 */
export function splitPhone(value: string): {
  country: Country;
  national: string;
} {
  const trimmed = value.trim();
  if (trimmed.startsWith("+")) {
    const matches = COUNTRIES.filter((country) =>
      trimmed.startsWith(country.dialCode),
    ).sort((a, b) => b.dialCode.length - a.dialCode.length);

    if (matches.length > 0) {
      const country = matches[0];
      return {
        country,
        national: trimmed.slice(country.dialCode.length).trim(),
      };
    }
  }
  return { country: findCountry(DEFAULT_COUNTRY_CODE), national: trimmed };
}

/** Digits only, for length checks. */
export const digitsOf = (value: string) => value.replace(/\D/g, "");
