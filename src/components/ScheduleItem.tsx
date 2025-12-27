import { IconClock } from "@tabler/icons-react";
import { PORTS, ROUTES } from "../data/constants";
import type { FerrySchedule } from "../data/types";

interface ScheduleItemProps {
    schedule: FerrySchedule;
    nowTime: string; // "HH:MM" 形式の文字列
}

function calculateMinutesUntilDeparture(departureTime: string, nowTime: string): number {
    const [depHour, depMinute] = departureTime.split(":").map(Number);
    const [nowHour, nowMinute] = nowTime.split(":").map(Number);
    const departureTotalMinutes = depHour * 60 + depMinute;
    const nowTotalMinutes = nowHour * 60 + nowMinute;
    return departureTotalMinutes - nowTotalMinutes;
}

function calculateArrivalTime(departureTime: string, duration: number): string {
    const [depHour, depMinute] = departureTime.split(":").map(Number);
    const totalMinutes = depHour * 60 + depMinute + duration;
    const arrHour = Math.floor(totalMinutes / 60) % 24;
    const arrMinute = totalMinutes % 60;
    return `${arrHour.toString().padStart(2, "0")}:${arrMinute.toString().padStart(2, "0")}`;
}

export default function ScheduleItem({
    schedule,
    nowTime,
}: ScheduleItemProps) {
    const { route, departureTime } = schedule;

    const minutesUntilDeparture = calculateMinutesUntilDeparture(departureTime, nowTime);
    const duration = ROUTES.find(
        (r) => r.from === route.from && r.to === route.to
    )?.duration || 0;
    const arrivalTime = calculateArrivalTime(departureTime, duration);

    // 出発後かどうかを判定
    const isDeparted = minutesUntilDeparture <= 0;

    return (
        <div className={`flex flex-col p-3 rounded-xl shadow ${isDeparted ? 'bg-gray-200' : 'bg-white'}`}>
            {!isDeparted && (
                <div className="bg-blue-400 rounded-full w-fit text-white px-2 flex gap-2 items-center">
                    <IconClock size={16} />
                    <span className="text-xs">
                        {minutesUntilDeparture >= 60 ? (
                            <>
                                <span className="text-[16px]">{Math.floor(minutesUntilDeparture / 60)}</span>時間<span className="text-[16px]">{(minutesUntilDeparture % 60).toString().padStart(2, '0')}</span>分後
                            </>
                        ) : (
                            <>
                                <span className="text-[16px]">{minutesUntilDeparture}</span>分後
                            </>
                        )}
                    </span>
                </div>
            )}
            {isDeparted && (
                <div className="bg-gray-500 rounded-full w-fit text-white px-2 flex gap-2 items-center">
                    <IconClock size={16} />
                    <span className="text-xs leading-4">出発済み</span>
                </div>
            )}

            <div className="flex items-center">
                {/* 出発時刻 */}
                <div className="flex-1 flex flex-col items-center">
                    <span className={`text-2xl font-bold leading-8 ${isDeparted ? 'text-gray-600' : 'text-gray-800'}`}>{departureTime}</span>
                    <span className={`text-xs ${isDeparted ? 'text-gray-500' : 'text-gray-500'}`}>{`${PORTS[route.from].displayName} 発`}</span>
                </div>

                {/* 所要時間 */}
                <div className={`flex items-center gap-2 ${isDeparted ? 'text-gray-500' : 'text-gray-400'}`}>
                    <div className={`w-6 border-t border-dashed ${isDeparted ? 'border-gray-400' : 'border-gray-300'}`}></div>
                    <span className="text-xs whitespace-nowrap">{`${duration}分`}</span>
                    <div className={`w-6 border-t border-dashed ${isDeparted ? 'border-gray-400' : 'border-gray-300'}`}></div>
                </div>

                {/* 到着時刻 */}
                <div className="flex-1 flex flex-col items-center">
                    <span className={`text-xl leading-8 ${isDeparted ? 'text-gray-600' : 'text-gray-800'}`}>{arrivalTime}</span>
                    <span className={`text-xs ${isDeparted ? 'text-gray-500' : 'text-gray-500'}`}>{`${PORTS[route.to].displayName} 着`}</span>
                </div>
            </div>
        </div>
    );
}
