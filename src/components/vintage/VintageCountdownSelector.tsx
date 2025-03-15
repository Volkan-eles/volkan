
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VintageCountdownSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

const VintageCountdownSelector: React.FC<VintageCountdownSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium text-amber-800 font-serif">Countdown Time:</span>
        <Select
          value={value.toString()}
          onValueChange={(v) => onChange(parseInt(v))}
        >
          <SelectTrigger className="w-[80px] bg-amber-50 border-amber-300">
            <SelectValue placeholder={`${value}s`} />
          </SelectTrigger>
          <SelectContent className="bg-amber-50">
            <SelectItem value="3">3s</SelectItem>
            <SelectItem value="5">5s</SelectItem>
            <SelectItem value="10">10s</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default VintageCountdownSelector;
