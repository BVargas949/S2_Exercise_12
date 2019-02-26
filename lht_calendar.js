"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Bryan Vargas
   Date:  02/19/19

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/
/* Set the date displayed in the Calendar. */
var thisDay = new Date("August 24, 2018");

//Write the Calendar to the element with the ID "Calendar".
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//Create Fubction to generate calendar Table.
function createCalendar(calDate) {
      var calendarHTML = "<table id='calendar_table'>";
      calendarHTML += calCaption(calDate);
      calendarHTML += calWeekdayRow();
      calendarHTML += "</table>";
      return calendarHTML;
}

//functionto write calender caption
function calCaption(calDate) {
      //monthName array contains the list of month names
      var monthName = ["January", "Februaury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      // Determine the Current Month
      var thisMonth = calDate.getMonth();

      //Determine the Current Year 
      var thisYear = calDate.getFullYear();

      //write the caption 

      return "<caption>" + monthName[thisMonth] + " " +
            thisYear + "</caption>";
}

//function to write a tablerow of abbreviations.
function calWeekdayRow() {
      //array of weekday abbreviation
      var dayName = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];
      var rowHTML = "<tr>";

      //look through the day name array
      for (var i = 0; i = dayName.length; i++) {
            rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>"
      }
      rowHTML += "</tr>";
      return rowHTML;
}

//function to calculate the number of days in the month.
function daysInMonth(calDate) {
      //array of days in each month.
      var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      //extract the four digit year and month value.
      var thisYear = calDate.getFullYear();
      var thisMonth = calDate.getMonth();

      //revise the days in february for leap years
      if (thisYear % 4 === 0) {
            dayCount[1] = 29;
      }

      // return the number of days for the current month.
      return dayCount[thisMonth];
}