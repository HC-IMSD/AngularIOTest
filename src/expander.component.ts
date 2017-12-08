import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
    selector: 'expander-component',
    // template: `<h1>Sample Expander component</h1>`
    templateUrl: 'expander.component.html'
})
/**
 * Sample component is used for nothing
 */
export class ExpanderComponent {
    name: string;
    rowIndex: number;
    collapsed1 = false;
    collapsed2 = false;
    collapsed3 = false;
    expanderTable = [false, false];
    columnDefinitions = [
        {
            label: 'FIRSTNAME',
            binding: 'givenName',
            width: '25'
        },
        {
            label: 'LASTNAME',
            binding: 'lastName',
            width: '25'
        }
    ];
    listItems = [
        {
            'givenName': 'Dan',
            'lastName': 'Kilty'
        },
        {
            'givenName': 'Jane',
            'lastName': 'Smith'
        }
    ];

    constructor() {
    }

    /**
     *  A function that returns a test string
     * @param name -not used for anything
     * @returns {string}
     */
    test(name ?: String) {
        return 'This is a test';
    }

  /*  selectTableRow(rowIndex: number) {
        for (let i in this.expanderTable) {
            if (i == rowIndex) {
                this.expanderTable[i] = true;
            } else {
                this.expanderTable[i] = false;
            }


        }

    }*/

}
