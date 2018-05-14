import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teachers';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  teachers: Teacher[];

  constructor( private teacherService:  TeacherService) { }

  ngOnInit() {
    this.getteacher();
  }

  getteacher(): void {
    this.teachers = this.teacherService.getList();
  }

  previousState() {
    window.history.back();
  }

}
