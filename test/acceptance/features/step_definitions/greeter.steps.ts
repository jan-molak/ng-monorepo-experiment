import { StepDefinitions } from 'cucumber';

export = function(this: StepDefinitions) {
    this.Given(/^my name is (.*)$/, function (name: string) {

    });

    this.When(/^the Greeter greets me$/, function () {

    });

    this.Then(/^it should say ['"](.*)['"]$/, function (expectedGreeting: string) {

    });
};
