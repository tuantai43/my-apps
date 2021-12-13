import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-sub',
    templateUrl: './sub.component.html',
})
export class SubComponent implements OnInit {
    ngOnInit() {
        console.log('ngOnInit sub component');
    }
}
