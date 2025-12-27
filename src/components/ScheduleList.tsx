import ScheduleItem from "./ScheduleItem";
import type { FerrySchedule } from "../data/types";

interface ScheduleListProps {
    schedules: FerrySchedule[];
    currentTime: Date;
}

export default function ScheduleList({ schedules, currentTime }: ScheduleListProps) {
    // Date を "HH:MM" 形式に変換
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const nowTime = `${hours}:${minutes}`;

    // 出発時刻までの残り時間を計算する関数（分単位）
    const getMinutesUntilDeparture = (departureTime: string): number => {
        const [hours, minutes] = departureTime.split(':').map(Number);
        const departureDate = new Date(currentTime);
        departureDate.setHours(hours, minutes, 0, 0);

        const diff = departureDate.getTime() - currentTime.getTime();
        return Math.floor(diff / (1000 * 60));
    };

    // 出発までの残り時間でソート（出発前を優先、出発後は最後に）
    const sortedSchedules = [...schedules].sort((a, b) => {
        const aMinutes = getMinutesUntilDeparture(a.departureTime);
        const bMinutes = getMinutesUntilDeparture(b.departureTime);

        // 両方とも出発前の場合、残り時間が短い順
        if (aMinutes >= 0 && bMinutes >= 0) {
            return aMinutes - bMinutes;
        }

        // 両方とも出発後の場合
        if (aMinutes < 0 && bMinutes < 0) {
            return aMinutes - bMinutes;
        }

        // 片方が出発前、片方が出発済みの場合、出発前を優先
        return aMinutes >= 0 ? -1 : 1;
    });

    return (
        <div className="flex flex-col gap-4">
            {sortedSchedules.map((schedule) => (
                <ScheduleItem
                    key={`${schedule.route.from}-${schedule.route.to}-${schedule.departureTime}`}
                    nowTime={nowTime}
                    schedule={schedule}
                />
            ))}
        </div>
    );
}
