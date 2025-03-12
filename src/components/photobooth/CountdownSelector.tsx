
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CountdownSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

const CountdownSelector: React.FC<CountdownSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium">Select Countdown Time:</span>
        <Select
          value={value.toString()}
          onValueChange={(v) => onChange(parseInt(v))}
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

export default CountdownSelector;
