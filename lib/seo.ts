// Trim long copy into a search-friendly meta description.
// Prefers whole sentences up to `max`; falls back to a clean word-boundary cut.
export function toMetaDescription(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;

  // Keep as many full sentences as fit.
  const sentences = clean.split(/(?<=\.)\s+/);
  let out = "";
  for (const s of sentences) {
    if ((out ? out.length + 1 : 0) + s.length > max) break;
    out += (out ? " " : "") + s;
  }
  if (out.length >= 80) return out;

  // Fallback: cut at a word boundary and add an ellipsis.
  const words = clean.slice(0, max - 1).split(" ");
  words.pop();
  return words.join(" ") + "…";
}
