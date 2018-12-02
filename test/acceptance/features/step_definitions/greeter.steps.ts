import { Greeter } from '@experimental/core';
import { StepDefinitions } from 'cucumber';
import * as assert from 'assert';

export = function(this: StepDefinitions) {
    const greeter = new Greeter();

    let myName: string,
        greeting: string;

    this.Given(/^my name is (.*)$/, function (name: string) {
        myName = name;
    });

    this.When(/^the Greeter greets me$/, function () {
        greeting = greeter.greet(myName);
    });

    this.Then(/^it should say ['"](.*)['"]$/, function (expectedGreeting: string) {
        assert.equal(greeting, expectedGreeting);
    });
};
