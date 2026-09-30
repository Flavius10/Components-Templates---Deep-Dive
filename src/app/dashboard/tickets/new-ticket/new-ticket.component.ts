import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

import { FormsModule } from '@angular/forms'
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {

  enteredTitle = '';
  enteredText = '';

  add = output<{
    title: string,
    request: string
  }>();

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit() {
    this.add.emit({title: this.enteredTitle, request: this.enteredText});
    // this.form().nativeElement.reset();
    this.enteredText = '';
    this.enteredTitle = '';
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT!')
    console.log(this.form().nativeElement);
  }

  ngOnInit() {
    console.log('ONINIT');
    console.log(this.form().nativeElement);
  }

}
