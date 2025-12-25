import { PORTS } from "../data/constants";
import type { PortCode } from "../data/types";

interface PortSelectProps {
    label: string;
    value: PortCode;
    onChange: (value: PortCode) => void;
    options: PortCode[];
    icon: React.ReactNode;
}

export default function PortSelect({ label, value, onChange, options, icon }: PortSelectProps) {
    return (
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 flex items-center gap-3">
            {icon}
            <div className="flex-1 flex flex-col">
                <span className="text-xs text-gray-400">{label}</span>
                <select
                    className="w-full font-bold text-gray-800 bg-transparent focus:outline-none"
                    value={value}
                    onChange={(e) => onChange(e.target.value as PortCode)}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {PORTS[option].displayName}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
