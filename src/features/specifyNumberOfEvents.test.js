import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When the user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        given('a user has not specified the number of events', () => {

        });

        when('the user views the events section', () => {

        });

        then(/^(\d+) events are shown by default$/, (arg0) => {

        });
    });
    test('When the user specifies the number of events.', ({ given, when, then }) => {
        given('a user has specified the number of events', () => {

        });

        when('the user views the events section', () => {

        });

        then('the app displays exactly as many events as the user specified', () => {

        });
    });


});