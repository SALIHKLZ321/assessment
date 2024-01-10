import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css'],
})
export class ChildComponent {
    inputValue: string = '';

    @Output() childControl = new EventEmitter<string>();

    onAdd() {
        this.childControl.emit(this.inputValue);
        this.inputValue = '';
    }
}
