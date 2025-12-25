import titleLogo from "/osaki_ft_title.png?url";

interface HeaderProps {
    currentTime: Date;
}

export default function Header({ currentTime }: HeaderProps) {
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");

    return (
        <div className="relative bg-blue-600 rounded-b-[40px] pb-16 pt-6 w-full">
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
                    className="w-64 mx-auto mt-6 flex items-center justify-center bg-white/20 text-white rounded-xl py-2 shadow">
                    <div className="flex gap-4 items-center justify-center">
                        <div className="bg-white rounded-md px-2">
                            <span className="text-xs text-blue-600">現在時刻</span>
                        </div>
                        <span className="text-3xl font-bold tracking-wider">
                            {hours}:{minutes}<span className="text-sm">:{seconds}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
