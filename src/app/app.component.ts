import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dropdown_BindingTask';
  states: any;
  division: any;
  districts: any;
  taluka: any;
  village: any;
  constructor(private api: ApiService) {

  }
  ngOnInit(): void {
    this.showall();
  }
  showall() {
    this.api.getall("http://awsmaster.mahamining.com/master/states/GetState").subscribe((data: any) => {
      this.states = data;
      this.states = data.responseData;
      // console.log(this.states)
    })
  }
  statechanged(event: Event) {
    let stateid = (<HTMLInputElement>event.target).value
    this.api.getall("http://awsmaster.mahamining.com/master/divisions/" + stateid).subscribe((data: any) => {
      this.division = data.responseData;
      // console.log(this.division);

    });
  }

  divchange(event: Event) {
    let divCode = (<HTMLInputElement>event.target).value

    this.api.getall("http://awsmaster.mahamining.com/master/districts/GetDistrictByDivisionId?UserId=1&DivisionId=" + divCode).subscribe((data: any) => {
      this.districts = data.responseData;
      // alert(divCode);
      console.log(this.districts)
    });
  }
  distchange(event: Event) {
    let distid = (<HTMLInputElement>event.target).value;
    //alert(distid)
    this.api.getall("http://awsmaster.mahamining.com/master/talukas/GetTalukaByDistrictId/" + distid).subscribe((data: any) => {
      this.taluka = data.responseData;
      console.log(this.taluka)
      //  alert(distid);

    });
  }
  talukachange(event: Event) {
    let talukaid = (<HTMLInputElement>event.target).value;

    this.api.getall("http://awsmaster.mahamining.com/master/villages/GetVillagesByCriteria/" + talukaid).subscribe((data: any) => {
      this.village = data.responseData;
      console.log(this.village)


    });
  }

  villagechange(event: Event) {
    let villageid = (<HTMLInputElement>event.target).value;

    this.api.getall("http://awsmaster.mahamining.com/master/villages/GetVillagesByCriteria/" + villageid).subscribe((data: any) => {
      this.village = data.responseData;



    });
  }
  save() {
    let stateSelect = <HTMLSelectElement>document.getElementById("state");
    let state = stateSelect.options[stateSelect.selectedIndex].text;
  //  console.log(state);

    let divisionselect = <HTMLSelectElement>document.getElementById("division");
    let division = divisionselect.options[divisionselect.selectedIndex].text;
  console.log(division);



    let districtselect = <HTMLSelectElement>document.getElementById("district");
    let district = districtselect.options[districtselect.selectedIndex].text;
 console.log(district);


    let talukaselect = <HTMLSelectElement>document.getElementById("taluka");
    let taluka = talukaselect.options[talukaselect.selectedIndex].text;
console.log(taluka);


    let villageselect = <HTMLSelectElement>document.getElementById("village");
    let village = villageselect.options[villageselect.selectedIndex].text;
  console.log(village);


  }

  submiteed(){
    if(this.states.valid){
      this.api.poststate(this.states.value).subscribe({
        next:(res)=>{
          alert("added")
        }
      })
    }
  }
}
