import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleComponent} from './sample.component';
import {SampleDirective} from './sample.directive';
import {SamplePipe} from './sample.pipe';
import {SampleService} from './sample.service';
import {ExpanderComponent} from './expander.component';
/*
import {ExpanderComponent} from './expandier';
*/

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';
export * from './expander.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SampleComponent,
        ExpanderComponent,
        SampleDirective,
        SamplePipe
    ],
    exports: [
        SampleComponent,
        ExpanderComponent,
        SampleDirective,
        SamplePipe
    ]
})
export class SampleModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SampleModule,
            providers: [SampleService]
        };
    }
}
