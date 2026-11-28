import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import RouteSelector from "./components/RouteSelector";
import PortFilterButtons from "./components/PortFilterButtons";
import ScheduleList from "./components/ScheduleList";
import Footer from "./components/Footer";
import OtohimeBusInfo from "./components/OtohimeBusInfo";
import FerryNotice from "./components/FerryNotice";
import { FERRY_SCHEDULES } from "./data/schedules";
import { VALID_AREA_ROUTES, AREAS } from "./data/constants";
import type { AreaCode, PortCode } from "./data/types";
import { loadFilters, saveFilters } from "./utils/storage";

// 出発エリアに応じた有効な目的エリアを取得
function getValidDestinations(departure: AreaCode): AreaCode[] {
    return VALID_AREA_ROUTES[departure] || [];
}

function getFilterPorts(departure: AreaCode, destination: AreaCode): PortCode[] {
    if (departure === "TAKEHARA") {
        return ["SHIRAMIZU", "TARUMI"];
    }

    if (departure === "OSAKIKAMIJIMA") {
        if (destination === "TAKEHARA") {
            return ["SHIRAMIZU", "TARUMI"];
        }
        return ["ONISHI"];
    }

    if (departure === "AKITSU") {
        return ["ONISHI"];
    }

    return [];
}

export default function App() {
    const initialState = (() => {
        const persisted = loadFilters();
        const departure = persisted?.departure ?? "TAKEHARA";
        const validDestinations = getValidDestinations(departure);
        const destination =
            persisted?.destination && validDestinations.includes(persisted.destination)
                ? persisted.destination
                : validDestinations[0] ?? "OSAKIKAMIJIMA";
        const availablePorts = getFilterPorts(departure, destination);
        const selectedPort =
            persisted?.selectedPort && availablePorts.includes(persisted.selectedPort)
                ? persisted.selectedPort
                : availablePorts[0] ?? null;

        return { departure, destination, selectedPort };
    })();

    const [currentTime, setCurrentTime] = useState(new Date());
    const [departure, setDeparture] = useState<AreaCode>(initialState.departure);
    const [destination, setDestination] = useState<AreaCode>(initialState.destination);
    const [selectedPort, setSelectedPort] = useState<PortCode | null>(initialState.selectedPort);

    // 現在時刻を1秒ごとに更新
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // 出発地が変更されたときの処理
    const handleDepartureChange = (newDeparture: AreaCode) => {
        const validDestinations = getValidDestinations(newDeparture);
        const nextDestination = validDestinations.includes(destination)
            ? destination
            : validDestinations[0];
        const nextFilterPorts = getFilterPorts(newDeparture, nextDestination);
        const nextSelectedPort =
            selectedPort && nextFilterPorts.includes(selectedPort)
                ? selectedPort
                : nextFilterPorts[0] ?? null;

        setDeparture(newDeparture);
        setDestination(nextDestination);
        setSelectedPort(nextSelectedPort);
    };

    const handleDestinationChange = (newDestination: AreaCode) => {
        const nextFilterPorts = getFilterPorts(departure, newDestination);
        const nextSelectedPort =
            selectedPort && nextFilterPorts.includes(selectedPort)
                ? selectedPort
                : nextFilterPorts[0] ?? null;
        setDestination(newDestination);
        setSelectedPort(nextSelectedPort);
    };

    const handleSwap = () => {
        const nextDeparture = destination;
        const nextDestination = departure;
        const nextFilterPorts = getFilterPorts(nextDeparture, nextDestination);
        const nextSelectedPort =
            selectedPort && nextFilterPorts.includes(selectedPort)
                ? selectedPort
                : nextFilterPorts[0] ?? null;
        setDeparture(nextDeparture);
        setDestination(nextDestination);
        setSelectedPort(nextSelectedPort);
    };

    // 有効な目的エリアリストを取得
    const validDestinations = getValidDestinations(departure);

    // フィルター用のポートリストを決定
    const filterPorts = useMemo(
        () => getFilterPorts(departure, destination),
        [departure, destination],
    );

    useEffect(() => {
        saveFilters({ departure, destination, selectedPort });
    }, [departure, destination, selectedPort]);

    // フィルター処理
    const filteredSchedules = (() => {
        let schedules = FERRY_SCHEDULES;

        // エリアによるフィルター
        const departurePorts = AREAS[departure].ports;
        const destinationPorts = AREAS[destination].ports;

        schedules = schedules.filter(
            (schedule) =>
                departurePorts.includes(schedule.route.from) &&
                destinationPorts.includes(schedule.route.to),
        );

        // ポートによるフィルター
        if (selectedPort) {
            schedules = schedules.filter(
                (schedule) =>
                    schedule.route.from === selectedPort || schedule.route.to === selectedPort,
            );
        }

        return schedules;
    })();
    const isDepartingFromIsland = departure === "OSAKIKAMIJIMA";

    return (
        <div className={`min-h-screen flex flex-col items-center ${isDepartingFromIsland ? "bg-blue-500" : "bg-blue-50"}`}>
            <Header currentTime={currentTime} isLightBackground={isDepartingFromIsland}/>

            <RouteSelector
                departure={departure}
                destination={destination}
                onDepartureChange={handleDepartureChange}
                onDestinationChange={handleDestinationChange}
                onSwap={handleSwap}
                departurePorts={Object.keys(AREAS) as AreaCode[]}
                destinationPorts={validDestinations}
            />

            {/* コンテンツエリア */}
            <div className="flex-1 mt-20 px-6 w-full max-w-xl">
                {filterPorts.length > 0 && (
                    <PortFilterButtons
                        ports={filterPorts}
                        selectedPort={selectedPort}
                        onPortSelect={setSelectedPort}
                    />
                )}

                {(departure === "TAKEHARA" || destination === "TAKEHARA") && (
                    <FerryNotice currentTime={currentTime} />
                )}

                {(departure === "OSAKIKAMIJIMA" || destination === "OSAKIKAMIJIMA") && (
                    <OtohimeBusInfo />
                )}

                <ScheduleList schedules={filteredSchedules} currentTime={currentTime}/>
            </div>

            <Footer isDarkBackground={isDepartingFromIsland}/>
        </div>
    );
}
