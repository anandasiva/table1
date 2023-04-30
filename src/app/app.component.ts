import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title:string='table1';
  students:any=[];
  sName:string="";
  sNative:string="";
  sAge:string="";
  sDegree:string="";
  sExperience:string="";


addStudent(){
   this.students.push({name:this.sName,native:this.sNative,age:this.sAge,degree:this.sDegree,experience:this.sExperience});
   this.sName=""
   this.sNative=""
   this.sAge=""
   this.sDegree=""
   this.sExperience=""
}
remove(i:any){
  this.students.splice(i,1);
}

trackByFn(index:any,item:any){
  return item.name;
}

save(){
  console.log(this.students);
}

}

class student{
  name:string="siva";
  native:string="surandai";
  age:string="29";
  degree:string="B.E";
  experience:string="2 years"
}