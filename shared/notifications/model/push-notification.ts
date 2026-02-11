import { NotificationType } from "@/entities/notification/model/notification";

export type PushNotificationType = "Android" | "Ios" | "Web";

export interface PushNotificationI {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    type: NotificationType;
    text: {
        ru: string;
        en: string;
    };
    isRead: 0 | 1;
    isArchived: 0 | 1;
    userUuid: string;
    forecastUuid: string;
    expressForecastUuid: string;
    matchUuid: string;
    chatUuid: string;
    teamUuid: string;
}
