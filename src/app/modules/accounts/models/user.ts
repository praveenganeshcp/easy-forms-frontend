export class User {
    private userName: string;
    private mailId: string;
    private token: string;

    public getUserName(): string {
        return this.userName;
    }

    public setUserName(userName: string): void {
        this.userName = userName;
    }

    public getMailId(): string {
        return this.mailId;
    }

    public setMailId(mailId: string): void {
        this.mailId = mailId;
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string): void {
        this.token = token;
    }

}