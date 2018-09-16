import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthData } from "./auth.model";

@Injectable({ providedIn: "root" })
export class AuthService {
 authData: AuthData;
    constructor(private https: HttpClient) { }

    
    login(userId: string, password: string) {
        this.authData = {
            userId: userId,
            password: password
        }
        this.https
            .post("http://localhost:3000/api/auth/login", this.authData).subscribe(response => {
                console.log(response);
            });
    }

}