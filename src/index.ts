export function greet(name: string) {
    return `Hi, ${name}!`
}

export function getAuthorContactInfo() {
    return new AuthorInfo("Garth", "Whitaker");
}

export class AuthorInfo {
    constructor(public firstName: string, public lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}