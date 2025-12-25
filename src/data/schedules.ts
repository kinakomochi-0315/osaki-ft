import type { FerrySchedule } from "./types";

export const FERRY_SCHEDULES: FerrySchedule[] = [
    // 竹原 -> 垂水
    {
        route: { from: "TAKEHARA", to: "TARUMI" },
        departureTime: "06:05",
    },
    {
        route: { from: "TAKEHARA", to: "TARUMI" },
        departureTime: "07:25",
    },
    {
        route: { from: "TAKEHARA", to: "TARUMI" },
        departureTime: "08:05",
    },
    {
        route: { from: "TAKEHARA", to: "TARUMI" },
        departureTime: "08:25",
    },
    {
        route: { from: "TAKEHARA", to: "TARUMI" },
        departureTime: "09:25",
    },
    {
        route: { from: "TAKEHARA", to: "TARUMI" },
        departureTime: "10:40",
    },
    {
        route: { from: "TAKEHARA", to: "TARUMI" },
        departureTime: "12:30",
    },
    {
        route: { from: "TAKEHARA", to: "TARUMI" },
        departureTime: "14:25",
    },
    {
        route: { from: "TAKEHARA", to: "TARUMI" },
        departureTime: "15:25",
    },
    {
        route: { from: "TAKEHARA", to: "TARUMI" },
        departureTime: "16:15",
    },
    {
        route: { from: "TAKEHARA", to: "TARUMI" },
        departureTime: "17:15",
    },
    {
        route: { from: "TAKEHARA", to: "TARUMI" },
        departureTime: "19:10",
    },
    {
        route: { from: "TAKEHARA", to: "TARUMI" },
        departureTime: "20:00",
    },

    // 竹原 -> 白水
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "06:35",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "06:55",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "07:45",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "09:00",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "10:10",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "11:05",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "12:05",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "12:55",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "14:00",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "15:00",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "15:45",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "16:50",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "17:40",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "18:00",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "18:45",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "20:30",
    },
    {
        route: { from: "TAKEHARA", to: "SHIRAMIZU" },
        departureTime: "21:30",
    },

    // 白水 -> 竹原
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "06:00",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "07:10",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "07:30",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "08:15",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "09:35",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "10:30",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "11:30",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "12:20",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "13:30",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "14:35",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "15:35",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "16:15",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "17:05",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "17:25",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "18:10",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "18:35",
    },
    {
        route: { from: "SHIRAMIZU", to: "TAKEHARA" },
        departureTime: "20:00",
    },

    // 垂水 -> 竹原
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "06:30",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "06:55",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "07:35",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "07:55",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "08:35",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "08:55",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "09:55",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "11:10",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "13:00",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "14:00",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "15:40",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "15:55",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "16:45",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "17:45",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "18:40",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "19:35",
    },
    {
        route: { from: "TARUMI", to: "TAKEHARA" },
        departureTime: "21:05",
    },

    // 安芸津 -> 大西
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "06:40",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "07:30",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "08:00",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "08:50",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "09:20",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "10:10",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "11:20",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "12:55",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "14:25",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "15:25",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "16:05",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "17:25",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "18:05",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "18:45",
    },
    {
        route: { from: "AKITSU", to: "ONISHI" },
        departureTime: "19:40",
    },

    // 大西 -> 安芸津
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "06:25",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "07:20",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "08:10",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "08:40",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "09:30",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "10:00",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "11:15",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "12:50",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "14:10",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "15:25",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "16:05",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "16:45",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "17:25",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "18:05",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "18:45",
    },
    {
        route: { from: "ONISHI", to: "AKITSU" },
        departureTime: "19:25",
    }
]