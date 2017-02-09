import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {LoginService} from "./login.service";


@Injectable()
export class MediaService {
    private token: string= '';
    private url: string = 'http://media.mw.metropolia.fi/wbma';

    constructor(private http: Http, private loginService : LoginService) {
        this.token = this.loginService.getUser().token;
    }

    getMedia = () => {
        return this.http.get(this.url + '/media')
            .map(
                res =>
                    res.json()
            );
    };

    uploadMedia = (formContent: any) => {
        return this.http.post(this.url + '/media?token=' + this.loginService.getUser().token, formContent)
            .map(
                res =>
                    res.json()
            );
    }

}
