import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  // rankingNo: number;
  rankingData: any;
  isRankAvailabel : boolean = false;
  SortedArr!:any[];
  marksArr:any[] = [];

  studentApi = [
    {
    students:[
      {
        name: "Amar",
        subject:"Maths",
        marks: 45
      },
      {
        name: "Amar",
        subject:"Phy",
        marks: 80
      },
      {
        name: "Amar",
        subject:"Chem",
        marks: 65
      },
    ]
    },

    {
    students:[
      {
        name: "Max",
        subject:"Maths",
        marks: 55
      },
      {
        name: "Max",
        subject:"Phy",
        marks: 30
      },
      {
        name: "Max",
        subject:"Chem",
        marks: 45
      },
    ]
    },

    {
      students:[
        {
          name: "Jame",
          subject:"Maths",
          marks: 75
        },
        {
          name: "Jame",
          subject:"Phy",
          marks: 43
        },
        {
          name: "Jame",
          subject:"Chem",
          marks: 89
        },
      ]
    }
  ]

 arrangeStudentsByMax() {
   let studentName: any;
   this.studentApi.map((item, id) => {
      const newArr = item.students;
      newArr.map((item, id) => {
        if(id == 0) studentName = item.name;
      });
      let studentMarks = newArr.reduce((total, item) => {
         return total + item.marks;
      }, 0);
      this.marksArr.push({name: studentName,  marks:studentMarks});
   })
  this.SortedArr = this.marksArr.sort((a, b) => b.marks - a.marks);
 }

  getStudentInfo(value: any){
    let idx = +value;
    if(this.SortedArr[idx -1] == undefined || this.SortedArr[idx] === 0) {
      alert("This Rank is not available!");
      this.isRankAvailabel = false;
    } else{
      this.rankingData = this.SortedArr[idx - 1];
      console.log(this.rankingData);
      this.isRankAvailabel = true;
    }
  }


  // @ViewChild('para', {static:false}) para!: ElementRef;
  @ViewChildren('para') para!: QueryList<any>;

  // we have multiple elementref with name of para but view child will will apply on
  // the first one always but when we want to apply on all the element there comes the
  // viewchilren.
  // now view child and children with respect to accessing thre component.
  @ViewChild('childview', {static:false}) child!: CounterComponent;
  constructor(private cref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.arrangeStudentsByMax();
  }

  ngAfterViewInit() {
    this.cref.detectChanges();
    // console.log(this.para);
    // we can apply seperate style to first and last
    // this.para.first.nativeElement.style.color="red";
    // this.para.last.nativeElement.style.color="green";

    // we can apply common styles to both.
    this.para.forEach(item => {
      item.nativeElement.style = "color:green; font-weight: bolder";

    })
  }

  inc() {
    this.child.increment();
  }

  dec() {
   this.child.decrement();
  }
}
