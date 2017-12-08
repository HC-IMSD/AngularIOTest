/**
 * This is only for local test
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Component} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {SampleModule} from 'test-lib';
import {ExpanderComponent} from 'test-lib';
@Component({
    selector: 'app',
    template: `
        <div>
            <sample-component></sample-component>
            <expander-component></expander-component>
        </div>`

})
class AppComponent {
}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, SampleModule]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
