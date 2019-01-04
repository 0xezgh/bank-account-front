import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Identity } from './identity';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private myRoute: Router) { }
    getIdentity(): Identity {
        let identity = new Identity();
        const authenticatedUser = localStorage.getItem('authenticatedUser');
        if (!authenticatedUser) {
            identity = JSON.parse(authenticatedUser);
        }
        return identity;
    }
    setIdentity(username: string) {
        const identity = new Identity();
        identity.setUsername(username);
        localStorage.setItem('authenticatedUser', JSON.stringify(identity));
    }
    isAuthenticated() {
        return this.getIdentity() !== null;
    }
    logout() {
        localStorage.removeItem('authenticatedUser');
        this.myRoute.navigate(['login']);
    }
}