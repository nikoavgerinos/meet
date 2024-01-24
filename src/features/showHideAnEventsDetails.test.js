import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('When the details of an event are hidden by default.', ({ given, when, then }) => {
        given('the main page is open', () => {

        });

        when('the app displays a list of event', () => {

        });

        then('the event details are hidden by default', () => {

        });
    });
    test('User clicks to show event details.', ({ given, when, then }) => {
        given('there is an event with hidden details', () => {

        });

        when('the user clicks on the event to show details', () => {

        });

        then('the app should display the details of the event', () => {

        });
    });
    test('User clicks to hide event details.', ({ given, when, then }) => {
        given('there is an event with displayed details', () => {

        });

        when('the user clicks on the event to hide details again', () => {

        });

        then('the app should hide the details of the event', () => {

        });
    });



});