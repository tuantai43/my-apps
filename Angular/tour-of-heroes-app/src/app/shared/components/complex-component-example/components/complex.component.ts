import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-complex',
    templateUrl: './complex.component.html',
})
export class ComplexComponent implements OnInit {
    ngOnInit() {
        console.log('ngOnInit complex component');
    }
}
