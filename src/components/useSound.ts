import { useCallback, useEffect, useRef } from 'react';

export function useSound(soundUrl: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(soundUrl);
    audio.preload = 'auto';
    audio.volume = 0.2; // Volume mais sutil
    
    // Pré-carrega o som
    audio.load();
    
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [soundUrl]);

  const play = useCallback(() => {
    if (audioRef.current) {
      try {
        // Reseta o som antes de tocar
        audioRef.current.currentTime = 0;
        
        // Tenta tocar o som
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error('Erro ao tocar som:', error);
          });
        }
      } catch (error) {
        console.error('Erro ao tocar som:', error);
      }
    }
  }, []);

  return { play };
} 