import { NotificationContent } from "../entities/NotificationContent";
import { Notification } from "../entities/Notification";

describe('Notification', () => {

    it('should be able to create a notification', () => {
        const notification = new Notification({
            content: new NotificationContent('nova mensagem recebida'),
            category: 'social',
            recipientId: 'example-recepient-id'
        });

        expect(notification).toBeTruthy();
    });
});
