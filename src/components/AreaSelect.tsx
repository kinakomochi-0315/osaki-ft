import { AREAS } from "../data/constants";
import type { AreaCode } from "../data/types";

interface AreaSelectProps {
    label: string;
    value: AreaCode;
    onChange: (value: AreaCode) => void;
    options: AreaCode[];
    icon: React.ReactNode;
}

export default function AreaSelect({ label, value, onChange, options, icon }: AreaSelectProps) {
    return (
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 flex items-center gap-3">
            {icon}
            <div className="flex-1 flex flex-col">
                <span className="text-xs text-gray-400">{label}</span>
                <select
                    className="w-full font-bold text-gray-800 bg-transparent focus:outline-none"
                    value={value}
                    onChange={(e) => onChange(e.target.value as AreaCode)}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {AREAS[option].displayName}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
