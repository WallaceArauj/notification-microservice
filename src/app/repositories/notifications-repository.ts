import { Notification } from "../entities/Notification";

// repository methods contract
export abstract class NotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
}
