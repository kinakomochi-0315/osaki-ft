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
    const isIsland = value === "OSAKIKAMIJIMA";
    const wrapperClassName = `rounded-xl px-4 py-2 flex items-center gap-3 ${isIsland ? "bg-blue-50" : "bg-blue-500"}`;
    const iconClassName = isIsland ? "text-blue-600" : "text-white";
    const labelClassName = `text-xs ${isIsland ? "text-blue-400" : "text-white/80"}`;
    const selectClassName = `w-full font-bold bg-transparent focus:outline-none ${isIsland ? "text-blue-900" : "text-white"}`;

    return (
        <div className={wrapperClassName}>
            <span className={iconClassName}>{icon}</span>
            <div className="flex-1 flex flex-col">
                <span className={labelClassName}>{label}</span>
                <select
                    className={selectClassName}
                    value={value}
                    onChange={(e) => onChange(e.target.value as AreaCode)}
                >
                    {options.map((option) => (
                        <option className="text-blue-900" key={option} value={option}>
                            {AREAS[option].displayName}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
