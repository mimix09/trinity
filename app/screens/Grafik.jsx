import React, { useState } from 'react';
import { format, eachDayOfInterval, startOfMonth, endOfMonth, getDay, getDate } from 'date-fns';

import '../style/grafikStyl.css';
import { tr } from 'date-fns/locale';

function Kalendarz(){
    const [startWeek, setStartWeek] = useState(true);

    const obecnaData = new Date();
    const dniWTygodniu = eachDayOfInterval({
        start: startOfMonth(obecnaData),
        end: endOfMonth(obecnaData)
    });

    const numerDnia = (data) => {
        return getDay(data);
    }

    const ukladanie = () => {
        const dniRows = [];
        let dniColumns = [];
        let currentDayIndex = 0;

        dniWTygodniu.forEach((day, index) => {
            if (index === 0) {
                for (let i = 0; i < numerDnia(day); i++) {
                    dniColumns.push(<td key={`empty-${i}`}></td>);
                    currentDayIndex++;
                }
            }

            dniColumns.push(<td key={day}>{getDate(day)}</td>);
            currentDayIndex++;

            if (currentDayIndex === 7) {
                dniRows.push(<tr key={`row-${index}`}>{dniColumns}</tr>);
                dniColumns = [];
                currentDayIndex = 0;
            }
        });

        if (dniColumns.length > 0) {
            while (dniColumns.length < 7) {
                dniColumns.push(<td key={`empty-${dniColumns.length}`}></td>);
            }
            dniRows.push(<tr key={`row-last`}>{dniColumns}</tr>);
        }

        return dniRows;
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Poniedziałek</th>
                        <th>Wtorek</th>
                        <th>Środa</th>
                        <th>Czwartek</th>
                        <th>Piątek</th>
                        <th>Sobota</th>
                        <th>Niedziela</th>
                    </tr>
                    </thead>

                <tbody>
                    {ukladanie()}
                </tbody>

            </table>
        </div>
    );
}

//     const now = new Date();
//   const daysInMonth = eachDayOfInterval({
//     start: startOfMonth(now),
//     end: endOfMonth(now)
//   });

//   const getWeekDayNumber = (date) => {
//     const day = getDay(date); // 0 (Sunday) - 6 (Saturday)
//     return day; // Convert 0 (Sunday) to 7
//   };

//   return (
//     <div>
//       <h1>Days of the current month</h1>
//       <ul>
//         {daysInMonth.map(day => (
//           <li key={day}>
//             {`${getWeekDayNumber(day)}, ${format(day, 'd, M, yyyy')}`}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

function Grafik(){

    return(
        <div>
           <h1>Kalendarz</h1>

            <Kalendarz />

        </div>
    );
}

export default Grafik;