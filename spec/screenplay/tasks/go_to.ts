import { PerformsTasks, Task, step, Open, Enter } from 'serenity-js/protractor';
import {Home} from '../ui/google'
import { protractor } from 'protractor/built/ptor';

export class goTo implements Task {

    static googleTranslate() {
        return new goTo()
    }

    @step('that {0} go to google translate using google')      // Gives the Task a more descriptive name
    performAs(actor: PerformsTasks): PromiseLike<void> {    // required by the Task interface
        return actor.attemptsTo(                            // delegates the work to lower-level tasks
            Open.browserOn(''),
            Enter.theValue('translate').into(Home.Search_bar).thenHit(protractor.Key.ENTER)
        );
    }

    constructor() {                  // constructor assigning the list of items
    }                                                       // to a private field

}