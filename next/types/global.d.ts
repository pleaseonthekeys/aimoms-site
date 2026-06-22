export {};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    _fbqQueue?: unknown[];
    _fbqLoaded?: boolean;
  }
}
