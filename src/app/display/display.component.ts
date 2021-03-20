import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../shared/students.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styles: [
  ]
})
export class DisplayComponent implements OnInit {

  constructor(public objs:StudentsService) { }

  ngOnInit(): void {
    this.objs.studentList();
  }

}
