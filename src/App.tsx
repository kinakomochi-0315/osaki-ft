import { useState, useEffect } from "react";
import Header from "./components/Header";
import RouteSelector from "./components/RouteSelector";
import PortFilterButtons from "./components/PortFilterButtons";
import ScheduleList from "./components/ScheduleList";
import Footer from "./components/Footer";
import { FERRY_SCHEDULES } from "./data/schedules";
import { VALID_AREA_ROUTES, AREAS } from "./data/constants";
import type { AreaCode, PortCode } from "./data/types";

// 出発エリアに応じた有効な目的エリアを取得
function getValidDestinations(departure: AreaCode): AreaCode[] {
    return VALID_AREA_ROUTES[departure] || [];
}

export default function App() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [departure, setDeparture] = useState<AreaCode>("TAKEHARA");
    const [destination, setDestination] = useState<AreaCode>("OSAKIKAMIJIMA");
    const [selectedPort, setSelectedPort] = useState<PortCode | null>(null);

    // 現在時刻を1秒ごとに更新
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // 出発地が変更されたときの処理
    const handleDepartureChange = (newDeparture: AreaCode) => {
        setDeparture(newDeparture);
        setSelectedPort(null); // フィルターをリセット
        const validDestinations = getValidDestinations(newDeparture);

        // 現在の目的地が有効でない場合、最初の有効な目的地を設定
        if (!validDestinations.includes(destination)) {
            setDestination(validDestinations[0]);
        }
    };

    const handleDestinationChange = (newDestination: AreaCode) => {
        setDestination(newDestination);
        setSelectedPort(null); // フィルターをリセット
    };

    const handleSwap = () => {
        const temp = departure;
        setDeparture(destination);
        setDestination(temp);
        setSelectedPort(null); // フィルターをリセット
    };

    // 有効な目的エリアリストを取得
    const validDestinations = getValidDestinations(departure);

    // フィルター用のポートリストを決定
    const filterPorts: PortCode[] = (() => {
        if (departure === "TAKEHARA") {
            // 竹原からの場合は大崎上島の到着港でフィルター
            return ["SHIRAMIZU", "TARUMI"];
        } else if (departure === "OSAKIKAMIJIMA") {
            if (destination === "TAKEHARA") {
                // 大崎上島から竹原の場合は出発港でフィルター
                return ["SHIRAMIZU", "TARUMI"];
            } else {
                // 大崎上島から安芸津の場合は大西港のみ
                return ["ONISHI"];
            }
        } else if (departure === "AKITSU") {
            // 安芸津からの場合は大西港のみ
            return ["ONISHI"];
        }
        return [];
    })();

    // フィルター処理
    const filteredSchedules = (() => {
        let schedules = FERRY_SCHEDULES;

        // エリアによるフィルター
        const departurePorts = AREAS[departure].ports;
        const destinationPorts = AREAS[destination].ports;

        schedules = schedules.filter(
            (schedule) =>
                departurePorts.includes(schedule.route.from) &&
                destinationPorts.includes(schedule.route.to)
        );

        // ポートによるフィルター
        if (selectedPort) {
            schedules = schedules.filter(
                (schedule) =>
                    schedule.route.from === selectedPort || schedule.route.to === selectedPort
            );
        }

        return schedules;
    })();

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center">
            <Header currentTime={currentTime} />

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

                <ScheduleList schedules={filteredSchedules} currentTime={currentTime} />
            </div>

            <Footer />
        </div>
    );
}
