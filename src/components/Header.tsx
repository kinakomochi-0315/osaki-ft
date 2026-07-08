import titleLogo from "/osaki_ft_title.png?url";

interface HeaderProps {
    currentTime: Date;
    isLightBackground: boolean;
}

export default function Header({ currentTime, isLightBackground }: HeaderProps) {
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");
    const headerClassName = `relative pb-16 pt-6 w-full ${isLightBackground ? "bg-blue-50" : "bg-blue-500"}`;
    const timePanelClassName = `w-64 mx-auto mt-6 flex items-center justify-center rounded-xl py-2 shadow ${isLightBackground ? "bg-white/70 text-blue-900" : "bg-white/20 text-white"}`;
    const timeLabelClassName = `text-xs ${isLightBackground ? "text-blue-700" : "text-blue-500"}`;
    const waveClassName = isLightBackground ? "fill-blue-50" : "fill-blue-500";

    return (
        <>
            <div className={headerClassName}>
                <div className="flex flex-col w-full max-w-xl mx-auto px-6">
                    {/* タイトル */}
                    <h1 className="flex justify-start">
                        <img
                            src={titleLogo}
                            alt="大崎上島 フェリー時刻表"
                            className="w-1/2"
                        />
                    </h1>

                    <div
                        className={timePanelClassName}>
                        <div className="flex gap-4 items-center justify-center">
                            <div className="bg-white rounded-md px-2">
                                <span className={timeLabelClassName}>現在時刻</span>
                            </div>
                            <span className="text-3xl font-bold tracking-wider">
                                {hours}:{minutes}<span className="text-sm">:{seconds}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 波線デコレーション */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 8" width="100%">
                <path className={waveClassName} d="M -21.599999999999998 0 Q -12.6 0 -3.6 4 Q 14.4 12 32.4 4 Q 41.4 0 50.4 0 Q 59.4 0 68.4 4 Q 86.4 12 104.4 4 Q 113.4 0 122.4 0 Q 131.4 0 140.4 4 Q 158.4 12 176.4 4 Q 185.4 0 194.4 0 Q 203.4 0 212.4 4 Q 230.4 12 248.4 4 Q 257.4 0 266.4 0 Q 275.4 0 284.4 4 Q 302.4 12 320.4 4 Q 329.4 0 338.4 0 Q 347.4 0 356.4 4 Q 374.4 12 392.4 4 Q 401.4 0 410.4 0 Q 419.4 0 428.4 4 Q 446.4 12 464.4 4 Q 473.4 0 482.4 0 Q 491.4 0 500.4 4 Q 518.4 12 536.4 4 Q 545.4 0 554.4 0 Q 563.4 0 572.4 4 Q 590.4 12 608.4 4 Q 617.4 0 626.4 0 L 576 0 L 0 0 Z"></path>
            </svg>
        </>
    );
}
