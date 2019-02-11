import { Target, Text } from 'serenity-js/protractor';
import { by } from 'protractor';

export class GoogleTranslate {
    static Enter_text = Target.the('Enter text input')
                                         .located(by.id('tw-source-text-ta'));

    static Translation = Text.of(Target.the('Translation input').located(by.id('tw-target-text-container')))
}