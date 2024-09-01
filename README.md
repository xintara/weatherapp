# AI Weather App Powered by Meteosource

## Project Description
This app uses the AI Weather API provided by Meteosource to display weather predictions for cities.

### Changing Location
The default location is set to Miami, Florida, but users can input a location into the search bar located at the top to change the location
to any valid one provided by the API. As the search bar is filled, suggestions for locations will show up below, and clicking on one will set the location to the one you've chosen.

### Changing Measurement System
By default, the measurement system displayed on the app is dependent on the location it is displaying. Within the bar at the top, users may select a different system to display information in, which will update the API call as well as save for future locations searched.

### Information Included
Current weather data includes temperature, the "feels-like" temperature, a summary, the accumulated rain in the last hour, wind speed, humidity, UV index, cloud coverage, and visibility.

The hourly forecast displays an icon depicting the summary, the predicted temperature, chance of rain, and wind speed/direction.

The daily forecast displays an icon depicting the summary, the predicted high and low temperatures, and the chance of rain.

The hourly and daily forecast can be clicked on and dragged to see more hours/days.

Clicking on the info circle at the top right will display a box providing the description of PM Accelerator.

## Implementation Details
The general workflow for the development of the website went as follows:
1. Utilize static data in the format that the API provides to choose what type of information to display
2. Add hourly and daily forecasts
3. Make it so that you can scroll through the forecast to see dates farther in the future
4. Update the existing parts to use real API calls instead of static data
5. Add the ability to search for cities other than the default provided
6. Change measurements based on what location was searched
7. Let the user choose which measurement system to use

Additional features that could be implemented include:
1. Reading in the user's location to display as default
2. Display the location of the city that is being shown on a map
3. Suggest activities based on the weather
4. Allow for the display of multiple locations simultaneously
5. Allow users to pick which type of weather-related information they want to show up