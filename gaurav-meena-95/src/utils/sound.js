// Modern tactile Web Audio API sound generator
// Zero external network latency, silky smooth feedback for cards, buttons, tabs, terminal

class SoundController {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = true;
    this.bgmAudio = null;
    this.bgmPlaying = false;
    this.currentTrackIdx = 0;
    this.tracks = [
      '/audio/theme-1.mp3',
      '/audio/theme-2.mp3',
      '/audio/theme-3.mp3',
    ];
  }

  init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  setSoundEnabled(enabled) {
    this.soundEnabled = enabled;
    if (!enabled && this.bgmAudio) {
      this.pauseBgm();
    }
  }

  isSoundEnabled() {
    return this.soundEnabled;
  }

  // Crisp futuristic click
  playClick() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      osc.type = 'sine';
      const now = this.audioCtx.currentTime;
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch {
      // AudioContext safe catch
    }
  }

  // Tactile swoosh when flipping card or expanding modals
  playFlip() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      const now = this.audioCtx.currentTime;
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(540, now + 0.12);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.14);
    } catch {
      // AudioContext safe catch
    }
  }

  // Keystroke for terminal or subtle tabs
  playBeep(pitch = 900) {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      const now = this.audioCtx.currentTime;
      osc.frequency.setValueAtTime(pitch, now);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.03);
    } catch {
      // AudioContext safe catch
    }
  }

  // Celebratory chime on achievements / confetti / copy
  playSuccess() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      const now = this.audioCtx.currentTime;

      notes.forEach((freq, i) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        const start = now + i * 0.06;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.07, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.18);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(start);
        osc.stop(start + 0.18);
      });
    } catch {
      // AudioContext safe catch
    }
  }

  // Background Lo-Fi music toggle
  toggleBgm() {
    if (this.bgmPlaying) {
      this.pauseBgm();
      return false;
    } else {
      this.playBgm();
      return true;
    }
  }

  playBgm() {
    if (typeof window === 'undefined') return;
    try {
      if (!this.bgmAudio) {
        this.bgmAudio = new Audio(this.tracks[this.currentTrackIdx]);
        this.bgmAudio.loop = true;
        this.bgmAudio.volume = 0.2;
      }
      this.bgmAudio.play().then(() => {
        this.bgmPlaying = true;
      }).catch(() => {
        this.bgmPlaying = false;
      });
    } catch {
      this.bgmPlaying = false;
    }
  }

  pauseBgm() {
    if (this.bgmAudio) {
      this.bgmAudio.pause();
      this.bgmPlaying = false;
    }
  }

  nextTrack() {
    this.currentTrackIdx = (this.currentTrackIdx + 1) % this.tracks.length;
    if (this.bgmAudio) {
      this.bgmAudio.pause();
      this.bgmAudio = new Audio(this.tracks[this.currentTrackIdx]);
      this.bgmAudio.loop = true;
      this.bgmAudio.volume = 0.2;
      if (this.bgmPlaying) {
        this.bgmAudio.play();
      }
    }
  }
}

export const sound = new SoundController();
