import { IconShare } from "@tabler/icons-react";
import { useState } from "react";

interface FooterProps {
    isDarkBackground: boolean;
}

export default function Footer({ isDarkBackground }: FooterProps) {
    const [canShare] = useState(() => typeof navigator !== 'undefined' && !!navigator.share);
    const footerTextClassName = isDarkBackground ? "text-white/80" : "text-gray-500";

    const handleShare = async () => {
        const shareData = {
            title: "大崎上島 フェリー時刻表",
            text: "大崎上島のフェリー時刻表を確認できる便利なアプリです。",
            url: window.location.origin + import.meta.env.BASE_URL,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                if ((err as Error).name !== 'AbortError') {
                    console.error("Error sharing:", err);
                }
            }
        }
    };

    return (
        <footer className="mt-12 pb-10 px-6 text-center text-xs space-y-6">
            {canShare && (
                <button
                    onClick={handleShare}
                    className="mx-auto flex items-center gap-2 px-6 py-2.5 bg-white border border-blue-100 rounded-full shadow-sm hover:bg-blue-50 transition-colors text-sm text-blue-600 font-bold active:scale-95"
                >
                    <IconShare size={18} />
                    このアプリを共有する
                </button>
            )}

            <div className="space-y-2">
                <p className={footerTextClassName}>
                    &copy; 2025 chimonakiko
                </p>
                <p className={footerTextClassName}>
                    この時刻表アプリは非公式です。<br />
                    データの正確性や最新性について保証いたしません。<br />
                    必ず公式の時刻表をご確認ください。
                </p>
            </div>
        </footer>
    );
}
