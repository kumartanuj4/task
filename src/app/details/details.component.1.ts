import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';


@Component({
  selector: 'app-studetails',
  templateUrl: './details.component.1.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent1 implements OnInit {

  students: Student[];

  constructor( private stuService:  StudentService) { }

  ngOnInit() {
    this.getstu();
  }

  getstu(): void {
    this.students = this.stuService.getList();
  }

  previousState() {
    window.history.back();
  }

}
