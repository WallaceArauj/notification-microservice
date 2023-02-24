import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { Notification } from "../entities/Notification";
import { SendNotification } from "./send-notification"


describe('Send Notification', () => {
    it('Should be able to send a notifcation', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepository)

        const {notification} = await sendNotification.execute({
            content: 'This is a Notification',
            category: 'social',
            recipientId: 'example-recipient-id'
        });

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);

    });
})