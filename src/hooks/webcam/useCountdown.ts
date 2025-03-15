
import { useState, useEffect, useCallback } from 'react';

interface UseCountdownProps {
  isCapturing: boolean;
  isCameraReady: boolean;
  countdownTime?: number;
  onComplete: () => void;
}

interface UseCountdownReturn {
  countdownActive: boolean;
  handleCountdownComplete: () => void;
}

export const useCountdown = ({
  isCapturing,
  isCameraReady,
  countdownTime = 3,
  onComplete
}: UseCountdownProps): UseCountdownReturn => {
  const [countdownActive, setCountdownActive] = useState(false);

  useEffect(() => {
    if (isCapturing && isCameraReady) {
      setCountdownActive(true);
    }
  }, [isCapturing, isCameraReady]);

  const handleCountdownComplete = useCallback(() => {
    setCountdownActive(false);
    onComplete();
  }, [onComplete]);

  return {
    countdownActive,
    handleCountdownComplete
  };
};
