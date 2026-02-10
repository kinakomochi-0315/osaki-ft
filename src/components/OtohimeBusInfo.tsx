import { IconExternalLink } from "@tabler/icons-react";

export default function OtohimeBusInfo() {
    return (
        <div className="flex flex-col bg-white/50 p-4 mb-4 rounded-xl items-center text-blue-800">
            <div className="flex flex-col text-center">
                <span>大崎上島内の移動は</span>
                <span>デマンド型<span className="text-xl font-bold">「おと姫バス」</span>が便利です</span>
            </div>
            <a className="mt-2 bg-green-600 text-white rounded-full px-4 py-2 flex gap-2"
               href="https://osakikamijima.fjodt.com/consumer/reservations/top_menu">
                <IconExternalLink/>
                <span>予約ページに移動</span>
            </a>
        </div>
    );
}
