import { Task, step, PerformsTasks, Enter } from "serenity-js/protractor";
import { GoogleTranslate } from "../ui/google_translate";

export class translate implements Task {

    static the(Phrase: string) {
        return new translate(Phrase)
    }

    @step('{0} write {1} in the translator')      // Gives the Task a more descriptive name
    performAs(actor: PerformsTasks): PromiseLike<void> {    // required by the Task interface
        return actor.attemptsTo(                            // delegates the work to lower-level tasks
            Enter.theValue(this.Phrase).into(GoogleTranslate.Enter_text)
        );
    }

    constructor(private Phrase: string) {                  // constructor assigning the list of items
    }                                                       // to a private field

}

