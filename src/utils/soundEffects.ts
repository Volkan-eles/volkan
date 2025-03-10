
// Function to play a sound effect for countdown and capture
export const playSound = (soundType: 'tick' | 'capture') => {
  const audio = new Audio();
  
  if (soundType === 'tick') {
    audio.src = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3';
  } else if (soundType === 'capture') {
    audio.src = 'https://assets.mixkit.co/active_storage/sfx/2016/2016-preview.mp3';
  }
  
  audio.volume = 0.5;
  audio.play().catch(error => {
    console.error('Error playing sound:', error);
  });
};
