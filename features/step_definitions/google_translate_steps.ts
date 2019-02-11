import {Actor, BrowseTheWeb} from 'serenity-js/protractor';
import { protractor } from 'protractor';

import { goTo } from '../../spec/screenplay/tasks/go_to';
import { translate } from '../../spec/screenplay/tasks/translate';
import { GoogleTranslate } from '../../spec/screenplay/ui/google_translate';
// import { AddATodoItem } from '../../spec/screenplay/tasks/add_a_todo_item';

// import { listOf } from '../../spec/text';

import { expect } from '../../spec/expect';
// import { TodoList } from '../../spec/screenplay/components/todo_list';

export = function googleTranslateSteps() {

    this.setDefaultTimeout(30 * 1000);
    protractor.browser.waitForAngularEnabled(false);
    let actor: Actor;
    
    this.Given(/^that (.*) go to google translate using google$/, function (actorName: string) {
        actor = Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));

        return actor.attemptsTo(
            goTo.googleTranslate()
        );

    });


    this.When(/^(.*?) write (.*?) in the translator$/, function (actorName: string,Phrase: string) {
        return actor.attemptsTo(
            translate.the(Phrase)
        );
    });


    this.Then(/^Juan should see (.*?) in the translator output$/, function (theTranslation: string) {
        return expect(actor.toSee(GoogleTranslate.Translation)).eventually.deep.include(theTranslation);
    });
}


