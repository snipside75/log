import {Component, OnInit} from '@angular/core';
import {MediaService} from "../services/media.service";

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

    constructor(private mediaService: MediaService) {
    }

    upload = (event: any, value: any) => {
        //console.log(event.target.querySelector('input[type=file]');
        const fileElement = event.target.querySelector('input[type=file]');
        const file = fileElement.files[0];

        const fd = new FormData();
        fd.append('file', file);
        fd.append('title', value.title);
        fd.append('description', value.description);

        this.mediaService.uploadMedia(fd).subscribe(data => {console.log(data); });
    };

    ngOnInit() {
    }

}
