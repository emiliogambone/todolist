import { Component, OnInit } from '@angular/core';
import { TaskService } from './shared/task.service';
import {Model} from './../shared/model';
import { FormControl,FormGroup,FormGroupDirective, NgForm, Validators} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-todo',
  templateUrl: './task.component.html',
  styles: [],
  providers : [TaskService]
})
export class TaskComponent implements OnInit {

  formGroup = new FormGroup({
    status: new FormControl()
 });

  statusArray: Array<any> = 
    [{key: 1, value: 'Inserito'},
    {key: 2, value: 'In Elaborazione'},
    {key: 3, value: 'Consegnato'}];

  toDoListArray: Model[] = []; // array of tasks
  date = new Date(new Date().getTime()); // date of today
  selectedStatus: any = null; // id of selected status

  // validators
  titleValidator = new FormControl('', [Validators.required]);
  descriptionValidator = new FormControl('', [Validators.required]);
  dateValidator = new FormControl('', [Validators.required]);
  statusSelected =  new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private taskService: TaskService) { }

  ngOnInit() {

    // GET DATA FROM API

  }

  onAdd(itemTitle, itemDescription, itemStatus, itemDate) {
    
    if( this.titleValidator.errors != null || this.descriptionValidator.errors != null || this.selectedStatus == null || this.dateValidator.errors != null){
      return;
    }
    
    var newTask = new Model(this.toDoListArray.length+1, itemTitle.value, itemDescription.value, itemStatus, itemDate.value);
    this.toDoListArray.push(newTask);

    itemTitle.value = null;
    itemDescription.value = null;
    itemDate.value = null;
    this.selectedStatus = null;
  }

  onDelete(id : Model){
    const index = this.toDoListArray.indexOf(id);
    this.toDoListArray.splice(index, 1);
  }

  update(item){
    // SEND DATA VIA SERVICE
  }

}