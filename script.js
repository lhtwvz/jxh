const button = document.getElementById('openEnvelope');
const fade = document.getElementById('fadeScreen');

function playAmbience(){
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const duration = 1.2;
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for(let i=0;i<bufferSize;i++){
      data[i] = (Math.random()*2-1) * 0.035 * (1 - i/bufferSize);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 900;
    filter.Q.value = 0.7;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.10, ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    noise.connect(filter).connect(gain).connect(ctx.destination);
    noise.start();
  } catch(e) {}
}

button.addEventListener('click', () => {
  playAmbience();
  button.classList.add('opening');
  setTimeout(() => fade.classList.add('active'), 900);
  setTimeout(() => { window.location.href = 'ticket.html'; }, 1450);
});
