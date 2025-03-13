
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DigiboothCountdownSelectorProps {
  value: number;
  onChange: (value: number) => void;
  // Add the missing props that cause the error
  selectedTime?: number;
  onSelectTime?: (time: number) => void;
}

const DigiboothCountdownSelector: React.FC<DigiboothCountdownSelectorProps> = ({ 
  value, 
  onChange,
  selectedTime,
  onSelectTime
}) => {
  // Use either value/onChange or selectedTime/onSelectTime props (for backward compatibility)
  const timeValue = selectedTime !== undefined ? selectedTime : value;
  const handleChange = (v: string) => {
    const timeValue = parseInt(v);
    if (onSelectTime) {
      onSelectTime(timeValue);
    } else {
      onChange(timeValue);
    }
  };

  return (
    <div className="flex flex-col items-center my-4">
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium">Select Countdown Time:</span>
        <Select
          value={timeValue.toString()}
          onValueChange={handleChange}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="3s" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3">3s</SelectItem>
            <SelectItem value="5">5s</SelectItem>
            <SelectItem value="10">10s</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default DigiboothCountdownSelector;
