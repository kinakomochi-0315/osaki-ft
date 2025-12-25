import type { Port, PortCode, Area, AreaCode } from "./types";

export const AREAS: Record<AreaCode, Area> = {
    OSAKIKAMIJIMA: {
        code: "OSAKIKAMIJIMA",
        name: "大崎上島",
        displayName: "大崎上島",
        ports: ["SHIRAMIZU", "TARUMI", "ONISHI"]
    },
    TAKEHARA: {
        code: "TAKEHARA",
        name: "竹原港",
        displayName: "竹原港",
        ports: ["TAKEHARA"]
    },
    AKITSU: {
        code: "AKITSU",
        name: "安芸津港",
        displayName: "安芸津港",
        ports: ["AKITSU"]
    },
};

export const PORTS: Record<PortCode, Port> = {
    SHIRAMIZU: { code: "SHIRAMIZU", name: "白水港", displayName: "白水港" },
    TARUMI: { code: "TARUMI", name: "垂水港", displayName: "垂水港" },
    ONISHI: { code: "ONISHI", name: "大西港", displayName: "大西港" },
    TAKEHARA: { code: "TAKEHARA", name: "竹原港", displayName: "竹原港" },
    AKITSU: { code: "AKITSU", name: "安芸津港", displayName: "安芸津港" },
}

export const ROUTES: { from: PortCode; to: PortCode, duration: number }[] = [
    { from: "TAKEHARA", to: "SHIRAMIZU", duration: 30 },
    { from: "TAKEHARA", to: "TARUMI", duration: 25 },
    { from: "SHIRAMIZU", to: "TAKEHARA", duration: 30 },
    { from: "TARUMI", to: "TAKEHARA", duration: 25 },
    { from: "AKITSU", to: "ONISHI", duration: 35 },
    { from: "ONISHI", to: "AKITSU", duration: 35 },
];

export const VALID_ROUTES: Record<PortCode, PortCode[]> = {
    TAKEHARA: ["SHIRAMIZU", "TARUMI"],
    SHIRAMIZU: ["TAKEHARA"],
    TARUMI: ["TAKEHARA"],
    AKITSU: ["ONISHI"],
    ONISHI: ["AKITSU"],
};

export const VALID_AREA_ROUTES: Record<AreaCode, AreaCode[]> = {
    OSAKIKAMIJIMA: ["TAKEHARA", "AKITSU"],
    TAKEHARA: ["OSAKIKAMIJIMA"],
    AKITSU: ["OSAKIKAMIJIMA"],
};