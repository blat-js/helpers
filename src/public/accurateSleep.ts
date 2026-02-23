const sleepCtx = new (
  window.AudioContext ||
  (window as globalThis.Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
)();

/**
 * @description
 * Sleeps for the specified duration using accurate timing via the Web Audio API.
 * Could be used only in a browser context.
 */
export const accurateSleep = async (durationMs: number) => {
  return new Promise<void>((resolve) => {
    const now = sleepCtx.currentTime;
    const osc = sleepCtx.createOscillator();
    const gain = sleepCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 0;
    osc.connect(gain);
    gain.connect(sleepCtx.destination);
    gain.gain.value = 0;
    osc.start(now);
    osc.stop(now + durationMs / 1000);

    const handleEnd = () => {
      osc.disconnect();
      gain.disconnect();
      osc.removeEventListener('ended', handleEnd);
      resolve();
    };
    osc.addEventListener('ended', handleEnd);
  });
};
