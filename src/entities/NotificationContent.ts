export class NotificationContent {
    private readonly content: string;

    get value(): string {
        return this.content;
    }

    private validateContentLength(content: string): boolean {
        return content.length >= 5 && content.length <= 300;
    }

    constructor(content: string){
        const isContentLengthValid = this.validateContentLength(content);

        if(!isContentLengthValid){
            throw new Error('content length error.');
        }

        this.content = content;
    }


}

