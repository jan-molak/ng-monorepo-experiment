Feature: Greeter

  Scenario: Says hi

    Given my name is Jan
    When the Greeter greets me
    Then it should say "Hello Jan!"
