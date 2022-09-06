/* 

Forcing Font Awesome icons for Fullcalendar WITHOUT using any Bootstrap theme

ISSUE AND SOLUTION: 

Determines which icons are displayed in buttons of the headerToolbar/footerToolbar when Bootstrap 4 theming is on.
This option only applies to calendars that have themeSystem set to 'bootstrap' (Bootstrap 4). 
A FontAwesome stylesheet must be loaded before you can use Bootstrap 4 theming or customize the icons.
Referred Fullcalendar documentation: https://fullcalendar.io/docs/bootstrapFontAwesome

An below example we use https://fontawesome.com/v4/ 
Theme included on HTML header. 

*/

//calendar initialization:
var calendarEl = document.getElementById('fullcalendar');
var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
        start: 'prev,next,today',
        center: 'title',
        end: 'timeGridWeek,dayGridWeek,timeGridDay,listWeek'
    },
    buttonIcons: {
        timeGridWeek: 'fa-adjust',
    }
    // ... your calendar configuration ... //
});

calendar.render();

//forcing fa-icons
var fcIcons = document.getElementsByClassName("fc-icon");
for (var i = 0; i < fcIcons.length; i++) {
    var array = [].slice.apply(fcIcons[i].classList);
        array.find(element => {
            if (element.includes('fc-icon-fa')) {
                var faIconClass = element.replace('fc-icon-', '');
                fcIcons[i].classList.add('fa');
                fcIcons[i].classList.add(faIconClass);
                fcIcons[i].classList.remove('fc-icon');
            }
        });
}
