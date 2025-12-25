export type PortCode = "SHIRAMIZU" | "TARUMI" | "ONISHI" | "TAKEHARA" | "AKITSU";
export type AreaCode = "OSAKIKAMIJIMA" | "TAKEHARA" | "AKITSU";

export interface Port {
    code: PortCode;
    name: string;
    displayName: string;
}

export interface Area {
    code: AreaCode;
    name: string;
    displayName: string;
    ports: PortCode[];
}

export interface FerrySchedule {
    route: {
        from: PortCode;
        to: PortCode;
    };
    departureTime: string; // "HH:MM" 形式の文字列
}