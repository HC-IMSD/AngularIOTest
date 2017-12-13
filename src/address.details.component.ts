import {Component, Input, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {NgForm, FormArray, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {AddressData} from './test.interface';


@Component({
    selector: 'address-details',
    templateUrl: 'address.details.component.html'
})

/**
 * Sample component is used for nothing
 */
export class AddressDetailsComponent implements OnInit, AfterViewInit {
    @Input('addressDetailsForm')
    public addressDetailsForm: FormArray;

    @Input('addressData')
    public addressData: AddressData;

    public parentForm: FormGroup;

    constructor(private fb: FormBuilder) {

    }

    ngOnInit() {
        // console.log('Initializing child form', this.child);
        this.parentForm = this.toFormGroup(this.addressData);
        this.addressDetailsForm.push(this.parentForm);
    }

    ngAfterViewInit() {
    }

    private toFormGroup(data: AddressData) {
        const formGroup = this.fb.group({
            id: [data.id],
            childField1: [data.address || '', Validators.required],
            childField2: [data.city || '', Validators.required]
        });

        return formGroup;
    }


    /**
     *  A function that returns a test string
     * @param name -not used for anything
     * @returns {string}
     */
    test(name ?: String) {
        return 'This is a test';
    }
}
