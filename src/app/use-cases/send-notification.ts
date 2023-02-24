import { NotificationContent } from "../entities/NotificationContent";
import { Notification } from "../entities/Notification";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { Injectable } from "@nestjs/common";

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification
}

@Injectable()
export class SendNotification {
    constructor(private notificationsRepository: NotificationsRepository) { }

    async execute(
        request: SendNotificationRequest,
    ): Promise<SendNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notification({
            recipientId,
            content: new NotificationContent(content),
            category,
        });

        await this.notificationsRepository.create(notification);

        return {
            notification
        };
    }
}
