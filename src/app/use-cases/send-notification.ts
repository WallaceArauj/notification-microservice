import { NotificationContent } from "../entities/NotificationContent";
import { Notification } from "../entities/Notification";

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification
}

export class SendNotification {
    async execute(
        request: SendNotificationRequest,
    ): Promise<SendNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notification({
            recipientId,
            content: new NotificationContent(content),
            category,
        });

        return {
            notification
        };
    }
}
