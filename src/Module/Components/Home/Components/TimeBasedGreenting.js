import React from 'react';

class TimeBasedGreeting extends React.Component {
    constructor() {
        super();
        this.state = {
            greeting: this.getGreeting()
        };
    }

    getGreeting() {
        let currentHour = new Date().getHours();
        if (currentHour >= 5 && currentHour < 12) {
            return 'Good Morning';
        } else if (currentHour >= 12 && currentHour < 18) {
            return 'Good Afternoon';
        } else {
            return 'Good Night';
        }
    }

    render() {
        return (
            this.state.greeting
        );
    }
}

export default TimeBasedGreeting;