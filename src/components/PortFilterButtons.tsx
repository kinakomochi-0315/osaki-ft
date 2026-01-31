import { PORTS } from "../data/constants";
import type { PortCode } from "../data/types";

interface PortFilterButtonsProps {
    ports: PortCode[];
    selectedPort: PortCode | null;
    onPortSelect: (port: PortCode | null) => void;
}

export default function PortFilterButtons({ ports, selectedPort, onPortSelect }: PortFilterButtonsProps) {
    const options: Array<{ key: string; value: PortCode; label: string }> = ports.map((port) => ({
        key: port,
        value: port,
        label: PORTS[port].displayName,
    }));

    const selectedIndex = Math.max(
        0,
        options.findIndex((opt) => opt.value === selectedPort)
    );

    const indicatorWidth = `${100 / options.length}%`;
    const indicatorTransform = `translateX(${selectedIndex * 100}%)`;

    const moveSelection = (nextIndex: number) => {
        const clamped = Math.min(Math.max(nextIndex, 0), options.length - 1);
        onPortSelect(options[clamped].value);
    };

    return (
        <div className="mb-4">
            <div
                role="radiogroup"
                aria-label="港で絞り込む"
                className="w-full bg-blue-100 rounded-full p-1"
            >
                <div className="relative">
                    <div
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 rounded-full bg-white transition-transform duration-200 ease-out"
                        style={{
                            width: indicatorWidth,
                            transform: indicatorTransform,
                        }}
                    />

                    <div
                        className="relative grid"
                        style={{
                            gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
                        }}
                    >
                        {options.map((opt, index) => {
                            const isSelected = index === selectedIndex;
                            return (
                                <button
                                    key={opt.key}
                                    type="button"
                                    role="radio"
                                    aria-checked={isSelected}
                                    tabIndex={isSelected ? 0 : -1}
                                    className={
                                        "relative z-10 select-none rounded-full px-2 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-100 " +
                                        (isSelected
                                            ? "text-blue-800"
                                            : "text-blue-400 hover:text-blue-800")
                                    }
                                    onClick={() => onPortSelect(opt.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "ArrowRight") {
                                            e.preventDefault();
                                            moveSelection(index + 1);
                                        } else if (e.key === "ArrowLeft") {
                                            e.preventDefault();
                                            moveSelection(index - 1);
                                        } else if (e.key === "Home") {
                                            e.preventDefault();
                                            moveSelection(0);
                                        } else if (e.key === "End") {
                                            e.preventDefault();
                                            moveSelection(options.length - 1);
                                        }
                                    }}
                                >
                                    {opt.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
