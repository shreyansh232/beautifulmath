export const PROGRESS_KEY = "beautifulmath-progress-v1";

export type ProgressState = {
  completed: string[];
  lastLesson: string | null;
};

export const emptyProgress = (): ProgressState => ({
  completed: [],
  lastLesson: null,
});

export function readProgress(): ProgressState {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as ProgressState;
    return {
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      lastLesson: parsed.lastLesson ?? null,
    };
  } catch {
    return emptyProgress();
  }
}

export function writeProgress(state: ProgressState) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(state));
}

export function markLessonComplete(lessonKey: string) {
  const state = readProgress();
  if (!state.completed.includes(lessonKey)) {
    state.completed.push(lessonKey);
  }
  state.lastLesson = lessonKey;
  writeProgress(state);
  return state;
}

export function setLastLesson(lessonKey: string) {
  const state = readProgress();
  state.lastLesson = lessonKey;
  writeProgress(state);
  return state;
}

export function isLessonComplete(lessonKey: string, state?: ProgressState) {
  const s = state ?? readProgress();
  return s.completed.includes(lessonKey);
}
