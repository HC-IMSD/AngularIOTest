import {Component, Input, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {NgForm, FormArray, FormGroup, Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {REPListData} from './test.interface';


@Component({
    selector: 'rep-list',
    templateUrl: 'repcontact.list.component.html'
})

/**
 * Sample component is used for nothing
 */
export class AddressDetailsComponent implements OnInit, AfterViewInit {

    public initialState: REPListData;
    public parentData: REPListData;
    public parentForm: FormGroup;

    constructor(private fb: FormBuilder) {

    }

    ngOnInit() {
        this.initialState = this.getParentData();
        //this.parentData = _.cloneDeep(this.initialState);
        this.parentData = this.initialState;
        this.parentForm = this.toFormGroup(this.parentData);
        console.log('Initial parentData', this.parentData);
    }

    ngAfterViewInit() {
        this.parentForm.valueChanges
            .subscribe(value => {
                console.log('Parent Form changed', value);
               // this.parentData = _.mergeWith(this.parentData,
                 //   value,
                  //  this.mergeCustomizer);

            });
    }


    private getParentData(): REPListData {
        return {
            test: 'foo',
            adresssList: [
                {
                    id: 1,
                    address: ' address1',
                    city: 'city1'
                },
                {
                    id: 2,
                    address: ' address2',
                    city: 'city2'
                }
            ]
        }
    }

    private toFormGroup(data: REPListData): FormGroup {
        const formGroup = this.fb.group({
            testField1: [data.test, Validators.required],
        });
        return formGroup;
    }

    /*  private toFormGroup(data: AddressData) {
          const formGroup = this.fb.group({
              id: [data.id],
              childField1: [data.address || '', Validators.required],
              childField2: [data.city || '', Validators.required]
          });

          return formGroup;
      }*/


    /**
     *  A function that returns a test string
     * @param name -not used for anything
     * @returns {string}
     */
    test(name ?: String) {
        return 'This is a test';
    }
}
