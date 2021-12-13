import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'appl-simple',
    templateUrl: './simple.component.html',
})
export class SimpleComponent implements OnInit {
    ngOnInit() {
        console.log('ngOnInit');
    }
}
