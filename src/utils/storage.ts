import { AREAS, PORTS } from "../data/constants";
import type { AreaCode, PortCode } from "../data/types";

const STORAGE_KEY = "osaki-ft:filters:v1";

export type StoredFilters = {
    departure: AreaCode;
    destination: AreaCode;
    selectedPort: PortCode | null;
};

function isAreaCode(value: unknown): value is AreaCode {
    return typeof value === "string" && value in AREAS;
}

function isPortCode(value: unknown): value is PortCode {
    return typeof value === "string" && value in PORTS;
}

export function loadFilters(): StoredFilters | null {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return null;
        }
        const parsed = JSON.parse(raw) as Record<string, unknown>;
        if (!isAreaCode(parsed.departure) || !isAreaCode(parsed.destination)) {
            return null;
        }
        const selectedPort = isPortCode(parsed.selectedPort) ? parsed.selectedPort : null;
        return {
            departure: parsed.departure,
            destination: parsed.destination,
            selectedPort,
        };
    } catch {
        return null;
    }
}

export function saveFilters(filters: StoredFilters): void {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filters));
    } catch {
        // ignore write errors
    }
}
