import React, { useState, useEffect } from 'react';

function TimeCounter() {
    const [elapsedTime, setElapsedTime] = useState("");

    useEffect(() => {
        const startDate = new Date('May 14, 1948 00:00:00');
        const startYear = startDate.getFullYear();
        const startMonth = startDate.getMonth();
        const startDay = startDate.getDate();
        
        const timer = setInterval(() => {
            const now = new Date();
            const currentYear = now.getFullYear();
            const currentMonth = now.getMonth();
            const currentDay = now.getDate();

            let years = currentYear - startYear;
            let months = currentMonth - startMonth;
            let days = currentDay - startDay;

            if (months < 0) {
                years--;
                months += 12; // Borrow 12 months from the year decrement
            }

            if (days < 0) {
                months--;
                const lastMonth = new Date(currentYear, currentMonth, 0);
                days += lastMonth.getDate(); // Number of days last month
            }

            // Calculate hours, minutes, and seconds
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            // Update the state with the new elapsed time
            setElapsedTime(`${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <p className="w-[45rem] text-center px-6 py-6 bg-[#09003b] text-[#faf2e9] text-[1.4rem] rounded-xl cursor-default">{elapsedTime}</p>
            <h1 className="text-3xl text-[#FF0000]">Time Elapsed Since May 14, 1948</h1>
        </div>
    );
}

export default TimeCounter;
