## 🌟 Key Features and User Stories

### 🏙️ Key Feature 1: Filter Events by City

**User Story**
As a user, I should be able to filter events by city so that I can find events that are relevant to my location.

**Scenarios**

1. **Scenario 1**: When user hasn’t searched for a specific city, show upcoming events from all cities.

   - Given user hasn’t searched for any city,
   - When the user opens the app,
   - Then the user should see a list of upcoming events.

2. **Scenario 2**: User should see a list of suggestions when they search for a city.

   - Given the main page is open,
   - When user starts typing in the city textbox,
   - Then the user should receive a list of cities (suggestions) that match what they’ve typed.

3. **Scenario 3**: User can select a city from the suggested list.
   - Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing,
   - When the user selects a city (e.g., “Berlin, Germany”) from the list,
   - Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### 👀 Key Feature 2: Show/Hide Event Details

**User Story**
As a user, I should be able to show or hide details of an event so that I can either get more information about an event or keep the list view simple.

**Scenarios**

1. **Scenario 1**: Default view shows events without detailed information.

   - Given the user is viewing the list of events,
   - When the list is initially loaded,
   - Then the events are displayed without detailed information.

2. **Scenario 2**: User can expand an event to see more details.

   - Given the user is viewing the list of events,
   - When the user selects an event,
   - Then the app should display detailed information about that event.

3. **Scenario 3**: User can hide an event’s details.
   - Given the user is viewing detailed information of an event,
   - When the user selects to hide details,
   - Then the app should collapse the event details back into the list view.

### 🔢 Key Feature 3: Specify Number of Events

**User Story**
As a user, I should be able to specify the number of events displayed so that I can control the amount of information I view at a time.

**Scenarios**

1. **Scenario 1**: User views default number of events on initial load.

   - Given the app is opened for the first time,
   - When the events list is loaded,
   - Then a default number of events are displayed.

2. **Scenario 2**: User changes the number of events to display.
   - Given the user is viewing the list of events,
   - When the user selects a new number of events to display,
   - Then the app should update the list to show the specified number of events.

### 📴 Key Feature 4: Use the App When Offline

**User Story**
As a user, I should be able to use the app when offline so that I can access event information without an internet connection.

**Scenarios**

1. **Scenario 1**: App displays previously loaded events when offline.

   - Given the user has previously used the app with an internet connection,
   - When the user accesses the app without an internet connection,
   - Then the app should show the most recently loaded events.

2. **Scenario 2**: User receives notification about offline status.

   - Given the user is using the app,
   - When the device loses internet connectivity,
   - Then the app should notify the user that they are in offline mode.

3. **Scenario 3**: User tries to access new data when offline.
   - Given the user is in offline mode,
   - When the user attempts to access information not stored on the device,
   - Then the app should display a message indicating that the action cannot be completed while offline.

### 🏠 Key Feature 5: Add an App Shortcut to the Home Screen

**User Story**
As a user, I should be able to add a shortcut to the app on my home screen so that I can quickly access the app.

**Scenarios**

1. **Scenario 1**: User adds the app shortcut to the home screen.

   - Given the user is using the app,
   - When the user selects the option to add the app to the home screen,
   - Then a shortcut to the app should be created on the user's device home screen.

2. **Scenario 2**: User accesses the app through the shortcut.
   - Given the user has a shortcut to the app on their home screen,
   - When the user selects the app shortcut,
   - Then the app should open.

### 📊 Key Feature 6: Display Charts Visualizing Event Details

**User Story**
As a user, I should be able to view charts visualizing event details so that I can better understand the data related to events.

**Scenarios**

1. **Scenario 1**: Charts are displayed within event details.

   - Given the user is viewing an event’s details,
   - When the event has data suitable for chart visualization,
   - Then the app should display a chart visualizing this data.

2. **Scenario 2**: User interacts with the chart for more details.
   - Given the user is viewing a chart within an event’s details,
   - When the user interacts with the chart (e.g., tapping on a chart segment),
   - Then the app should provide more detailed information related to that part of the chart.
