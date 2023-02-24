import { NotificationContent } from "../entities/NotificationContent";

describe('Notification content', () => {

    it('it shoul be able to create a notification content', () => {
        const content = new NotificationContent('Você recebeu uma notificação');

        expect(content).toBeTruthy();
    });

    it('it shoul not be able to create a notification content with less than 5 charecters', () => {
        expect(() => new NotificationContent('xxx')).toBeTruthy();
    });

    it('it shoul not be able to create a notification content with less than 300 charecters', () => {
        expect(() => new NotificationContent('x'.repeat(301))).toBeTruthy();
    });

})
