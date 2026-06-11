/**
 * Reading time estimation.
 * Based on average adult reading speed: ~200 words per minute.
 * Technical content with code blocks is adjusted: code is 3× slower to read.
 *
 * See INFORMATION_ARCHITECTURE.md for expected reading times per destination:
 *   Case study: 3–8 minutes
 *   Architecture entry: 3–8 minutes
 *   Article: 5–15 minutes
 */

const WORDS_PER_MINUTE = 200;
const CODE_READING_PENALTY = 3;

interface ReadingTimeResult {
  minutes: number;
  words: number;
  text: string; // e.g., "5 min read"
}

/** Estimate reading time from raw text content. */
export function estimateReadingTime(text: string): ReadingTimeResult {
  // Split prose and code blocks
  const proseWords = countWords(text.replace(/```[\s\S]*?```/g, ""));
  const codeWords = countWords((text.match(/```[\s\S]*?```/g) || []).join(" "));

  const adjustedWords = proseWords + codeWords * CODE_READING_PENALTY;
  const minutes = Math.max(1, Math.ceil(adjustedWords / WORDS_PER_MINUTE));

  return {
    minutes,
    words: proseWords + codeWords,
    text: `${minutes} min read`,
  };
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
