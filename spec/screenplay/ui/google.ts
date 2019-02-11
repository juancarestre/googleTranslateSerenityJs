import { Target } from 'serenity-js/protractor';
import { by } from 'protractor';

export class Home {
    static Search_bar = Target.the('Google search bar input box')
                                         .located(by.name('q'));
}