import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-create-config',
  templateUrl: './create-config.component.html',
  styleUrls: ['./create-config.component.css']
})
export class CreateConfigComponent implements OnInit {
  title:string ='New Config';

  closeButton: string = 'Save'
  qualification:boolean = false;
  config = new FormGroup({
    configName: new FormControl(''),
    configId: new FormControl(''),
    bet1: new FormGroup({
      home: new FormControl(false,Validators.required),
      favourite: new FormControl(false,Validators.required),
      sportsBook: new FormControl('',Validators.required),
      pregame: new FormControl(false,Validators.required),
      minGameTime: new FormControl('',Validators.required),
      below: new FormControl('',Validators.required),
      above: new FormControl('',Validators.required),
      percentageChange: new FormControl('',Validators.required),
    }),
    bet2: new FormGroup({
      sportsBook: new FormControl('',Validators.required),
      pregame: new FormControl(false,Validators.required),
      minGameTime: new FormControl('',Validators.required),
      below: new FormControl('',Validators.required),
      above: new FormControl('',Validators.required),
      qualification:new FormGroup({
        referenceLine:new FormControl('',Validators.required),
        range:new FormControl('',Validators.required),
        period:new FormControl('',Validators.required)
      }),
      recoveryMargin: new FormControl('',Validators.required)
      // Home: new FormControl('',Validators.required),
    })
  });


  constructor(private dialogRef: MatDialogRef<CreateConfigComponent>,public configService :ConfigService,@Inject(MAT_DIALOG_DATA) public data: any) {
    if(data){
      this.qualification = true;
      this.title = 'Edit Config';
      this.closeButton = 'Save changes';

      this.config = new FormGroup({
        configName: new FormControl(data.configName),
        configId: new FormControl(data.configId),
        bet1: new FormGroup({
          home: new FormControl(data.bet1.home,Validators.required),
          favourite: new FormControl(data.bet1.favourite,Validators.required),
          sportsBook: new FormControl(data.bet1.sportsBook,Validators.required),
          pregame: new FormControl(data.bet1.pregame,Validators.required),
          minGameTime: new FormControl(data.bet1.minGameTime,Validators.required),
          below: new FormControl(data.bet1.below,Validators.required),
          above: new FormControl(data.bet1.above,Validators.required),
          percentageChange: new FormControl(data.bet1.percentageChange,Validators.required),
        }),
        bet2: new FormGroup({
          sportsBook: new FormControl(data.bet2.sportsBook,Validators.required),
          pregame: new FormControl(data.bet2.pregame,Validators.required),
          minGameTime: new FormControl(data.bet2.minGameTime,Validators.required),
          below: new FormControl(data.bet2.below,Validators.required),
          above: new FormControl(data.bet2.above,Validators.required),
          qualification:new FormGroup({
            referenceLine:new FormControl(data.bet2.qualification.referenceLine,Validators.required),
            range:new FormControl(data.bet2.qualification.range,Validators.required),
            period:new FormControl(data.bet2.qualification.period,Validators.required)
          }),
          recoveryMargin: new FormControl(data.bet2.recoveryMargin,Validators.required)
          // Home: new FormControl('',Validators.required),
        })
      });
    }
  }

  ngOnInit(): void {}

  onSend() {
    this.dialogRef.close();
    if(this.data){
      this.configService.updateConfig(this.config.value);

    }else{
      this.configService.createConfig(this.config.value);
    }
  }

  delete() {
    this.dialogRef.close();
    this.configService.deleteConfig(this.config.value.configId);
  }
}
