import { IconLocation, IconMapPin, IconTransferVertical } from "@tabler/icons-react";
import AreaSelect from "./AreaSelect";
import type { AreaCode } from "../data/types";

interface RouteSelectorProps {
    departure: AreaCode;
    destination: AreaCode;
    onDepartureChange: (value: AreaCode) => void;
    onDestinationChange: (value: AreaCode) => void;
    onSwap: () => void;
    departurePorts: AreaCode[];
    destinationPorts: AreaCode[];
}

export default function RouteSelector({
    departure,
    destination,
    onDepartureChange,
    onDestinationChange,
    onSwap,
    departurePorts,
    destinationPorts,
}: RouteSelectorProps) {
    return (
        <div className="relative -my-14 mx-6">
            <div className="bg-white rounded-3xl shadow-lg p-4 space-y-4">
                <div className="flex flex-col justify-center">
                    {/* 出発地 */}
                    <AreaSelect
                        label="出発地"
                        value={departure}
                        onChange={onDepartureChange}
                        options={departurePorts}
                        icon={<IconMapPin className="text-blue-600" />}
                    />

                    {/* 入れ替えボタン */}
                    <button
                        type="button"
                        className="mx-auto -my-3 bg-white rounded-full border-2 border-blue-200 aspect-square w-10 hover:cursor-pointer shadow z-0"
                        onClick={onSwap}
                    >
                        <IconTransferVertical className="text-blue-400 mx-auto" />
                    </button>

                    {/* 目的地 */}
                    <AreaSelect
                        label="目的地"
                        value={destination}
                        onChange={onDestinationChange}
                        options={destinationPorts}
                        icon={<IconLocation className="text-blue-600" />}
                    />
                </div>
            </div>
        </div>
    );
}
