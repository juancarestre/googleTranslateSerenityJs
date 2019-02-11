import { Ability, UsesAbilities } from '@serenity-js/core/lib/screenplay';
import { LogDriver } from '../../logDriver';

export declare class RunRPATask implements Ability {
    private logdriver;

    static as(actor: UsesAbilities): RunRPATask;
    takeScreenshot(): PromiseLike<string>;
    get(destination: string, timeout?: number): PromiseLike<void>;
    sleep(millis: number): PromiseLike<void>;
    enableAngularSynchronisation(enable: boolean): PromiseLike<any>;
    executeScript(script: string | Function, ...args: any[]): PromiseLike<any>;
    executeAsyncScript(script: string | Function, ...args: any[]): PromiseLike<any>;
    constructor(logdriver: LogDriver);
    private resolveTargets(maybeTarget);
}

