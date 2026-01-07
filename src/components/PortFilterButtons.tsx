import { PORTS } from "../data/constants";
import type { PortCode } from "../data/types";

interface PortFilterButtonsProps {
    ports: PortCode[];
    selectedPort: PortCode | null;
    onPortSelect: (port: PortCode | null) => void;
}

export default function PortFilterButtons({ ports, selectedPort, onPortSelect }: PortFilterButtonsProps) {
    return (
        <div className="flex gap-2 mb-4">
            <button
                className={`text-sm rounded-full px-4 py-2 transition-colors ${selectedPort === null
                    ? "bg-blue-400 text-white"
                    : "bg-white text-blue-400"
                    }`}
                onClick={() => onPortSelect(null)}
            >
                すべて
            </button>
            {ports.map((port) => (
                <button
                    key={port}
                    className={`text-sm rounded-full px-4 py-2 transition-colors ${selectedPort === port
                        ? "bg-blue-400 text-white"
                        : "bg-white text-blue-400"
                        }`}
                    onClick={() => onPortSelect(port)}
                >
                    {PORTS[port].displayName}
                </button>
            ))}
        </div>
    );
}
