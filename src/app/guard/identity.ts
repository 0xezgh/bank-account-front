export class Identity {
    username: string;
    role = 'admin';

    setUsername(username: string) {
        this.username = username;
    }
}