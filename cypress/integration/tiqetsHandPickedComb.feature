@handPickedCombinations
@sprint7

Feature: Hand Picked Combinations
    As a user I want to add a Picked Combination and run a booking procedure

    @tiqets_home_page
    @search_procedure
    @jiraTask885
    Scenario: Validate the Tiqets home page and Search Procedure
        Given already on Tiqets page
        When I click on Search Museums & Attractions field
        Then best places to visit in Australia is showed successfully

    @jiraTask886
    Scenario: Validate Hand-picked Combinations: Basic verification
        Given already on Tiqets page
        And confirm that Hand-picked Combinations field is active
        When I click on SUMMIT One Vanderbilt and The Museum of Modern Art option
        Then all details of this option appears correctly

    @jiraTask887
    Scenario: Validate Hand-picked Combinations: Ticket and Date's flow
        Given already on 'Search Museums & Attractions' page
        When I click on BOOK NOW button
        And select a Date, Hour and Ticket to the Museum
        And select a Date, Hour and Ticket to Vanderbilt
        Then Ticket and Date flow performed successfully