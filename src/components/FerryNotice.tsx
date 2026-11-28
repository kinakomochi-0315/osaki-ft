import { useEffect, useState } from "react";
import { IconAlertTriangleFilled } from "@tabler/icons-react";

/** 運航情報カードで使用する当日案内の項目 */
interface Notice {
    body: string;
    noticeAt: string;
}

const apiBase = import.meta.env.DEV ? import.meta.env.BASE_URL : "https://lab.chimonakiko.net/";
const noticeUrl = `${apiBase}api/ferry-mail-receiver/now?route=takehara`;
const japanDate = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit",
});
const japanTime = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
});

/** 竹原航路を表示中の当日案内の取得と表示 */
export default function FerryNotice({ currentTime }: { currentTime: Date }) {
    const [notice, setNotice] = useState<Notice | null>(null);

    useEffect(() => {
        let activeRequest: AbortController | undefined;

        /** 初回表示と画面復帰時の最新案内の取得 */
        async function refresh() {
            if (document.visibilityState !== "visible") return;
            activeRequest?.abort();
            const request = new AbortController();
            activeRequest = request;
            try {
                const response = await fetch(noticeUrl, { signal: request.signal });
                if (!response.ok) return;
                const { item }: { item: Notice | null } = await response.json();
                if (request.signal.aborted) return;
                if (item === null || (typeof item?.body === "string" && Number.isFinite(Date.parse(item.noticeAt)))) {
                    setNotice(item);
                }
            } catch {
                // オフラインや通信中断時は直前の当日案内を保持
            }
        }

        void refresh();
        document.addEventListener("visibilitychange", refresh);
        return () => {
            document.removeEventListener("visibilitychange", refresh);
            activeRequest?.abort();
        };
    }, []);

    if (!notice) return null;
    const noticeAt = new Date(notice.noticeAt);
    const date = japanDate.format(noticeAt);
    if (date !== japanDate.format(currentTime)) return null;

    return (
        <section className="flex flex-col border-2 border-amber-400 bg-white mb-4 rounded-xl text-gray-800 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-amber-400">
                <IconAlertTriangleFilled aria-hidden="true" />
                <h2 className="shrink-0 text-xl font-bold">運航情報</h2>
                <time className="grow text-right opacity-70" dateTime={notice.noticeAt}>
                    {date} {japanTime.format(noticeAt)} 更新
                </time>
            </div>
            <p className="text-center px-4 py-8 whitespace-pre-wrap wrap-anywhere">{notice.body}</p>
        </section>
    );
}
