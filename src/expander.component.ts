import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';


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
    collapsed1 = false;
    collapsed2 = false;
    collapsed3 = false;
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
}
