let cd = new Countdown({
    cont: document.querySelector('.timePassed'),
    countdown: false,
    date: {
        year: 2022,
        moth: 2,
        day: 24,
        hour: 0,
        minute: 0,
        second: 1,

    },
    outputTranslation: {
        year: 'Years',
        week: 'Weeks',
        day: 'Days',
        hour: 'Hours',
        minute: 'Minutes',
        second: 'Seconds',
    },
    endCallback: null,
    outputFormat: 'day|hour|minute',
});
