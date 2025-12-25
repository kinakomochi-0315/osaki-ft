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
                className={`text-sm border rounded-full px-4 py-2 shadow ${selectedPort === null
                    ? "border-blue-200 bg-blue-100"
                    : "border-gray-200 bg-white"
                    }`}
                onClick={() => onPortSelect(null)}
            >
                すべて
            </button>
            {ports.map((port) => (
                <button
                    key={port}
                    className={`text-sm border rounded-full px-4 py-2 shadow ${selectedPort === port
                        ? "border-blue-200 bg-blue-100"
                        : "border-gray-200 bg-white"
                        }`}
                    onClick={() => onPortSelect(port)}
                >
                    {PORTS[port].displayName}
                </button>
            ))}
        </div>
    );
}
