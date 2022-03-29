export class Form {
    private _id?: string;
    private no: number;
    private name: string;
    private createdOn: Date;
    private responseCount: number;
    private link: string;

    public getId?(): string | undefined {
        return this._id;
    }

    public getNo(): number {
        return this.no;
    }

    public setNo(no: number): void {
        this.no = no;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getCreatedOn(): Date {
        return this.createdOn;
    }

    public setCreatedOn(createdOn: Date): void {
        this.createdOn = createdOn;
    }

    public getResponseCount(): number {
        return this.responseCount;
    }

    public setResponseCount(responseCount: number): void {
        this.responseCount = responseCount;
    }

    public getLink(): string {
        return this.link;
    }

    public setLink(link: string): void {
        this.link = link;
    }

}