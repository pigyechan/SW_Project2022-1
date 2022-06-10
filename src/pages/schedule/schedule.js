import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from "@emotion/styled";
import { Calendar } from "@fullcalendar/core";


export function Schedule(props) {
 
  return(
    
    <div style = {{color : 'black', paddingTop : '1%', paddingLeft : '1%', paddingRight : '2%', paddingBottom : '1%', backgroundColor : 'white', textDecoration : 'none'}}>
      <FullCalendar defaultView="dayGridMonth"
        contentHeight={'700px'}
        buttonText = {{
          today : ''
        }}

        events={[
          { title: '선수 OOO 훈련', date: '2022-06-20' },
          { title: 'vs 삼성', date: '2022-05-31'},
          { title: 'vs 삼성', date: '2022-06-01'},
          { title: 'vs 삼성', date: '2022-06-02' },
          { title: 'vs 한화', date: '2022-06-03'},
          { title: 'vs 한화', date: '2022-06-04' },
          { title: 'vs 한화', date: '2022-06-05'},
          { title: 'vs KT', date: '2022-06-07'},
          { title: 'vs KT', date: '2022-06-08' },
          { title: 'vs KT', date: '2022-06-09'},
          { title: 'vs KIA', date: '2022-06-10' },
          { title: 'vs KIA', date: '2022-06-11'},
          { title: 'vs KIA', date: '2022-06-12' },
          { title: 'vs 두산', date: '2022-06-14'},
          { title: 'vs 두산', date: '2022-06-15' },
          { title: 'vs 두산', date: '2022-06-16'},
          { title: 'vs LG', date: '2022-06-17'},
          { title: 'vs LG', date: '2022-06-18'},
          { title: 'vs LG', date: '2022-06-19'},
          { title: 'vs 삼성', date: '2022-06-21'},
          { title: 'vs 삼성', date: '2022-06-22' },
          { title: 'vs 삼성', date: '2022-06-23'},
          { title: 'vs 롯데', date: '2022-06-24' },
          { title: 'vs 롯데', date: '2022-06-25'},
          { title: 'vs 롯데', date: '2022-06-26' },
          { title: 'vs KIA', date: '2022-06-28' },
          { title: 'vs KIA', date: '2022-06-29'},
          { title: 'vs KIA', date: '2022-06-30' },
          { title: 'vs 한화', date: '2022-07-01'},
          { title: 'vs 한화', date: '2022-07-02'},
          { title: 'vs 한화', date: '2022-07-03'},
          { title: 'vs 두산', date: '2022-07-05'},
          { title: 'vs 두산', date: '2022-07-06'},
          { title: 'vs 두산', date: '2022-07-07'},
          { title: 'vs NC', date: '2022-07-08' },
          { title: 'vs NC', date: '2022-07-09'},
          { title: 'vs NC', date: '2022-07-10' },
          { title: 'vs SSG', date: '2022-07-12' },
          { title: 'vs SSG', date: '2022-07-13'},
          { title: 'vs SSG', date: '2022-07-14' },
          
          { title: 'vs 삼성', date: '2022-07-24'},
          { title: 'vs 삼성', date: '2022-07-22' },
          { title: 'vs 삼성', date: '2022-07-23'},
          { title: 'vs KT', date: '2022-07-26' },
          { title: 'vs KT', date: '2022-07-27'},
          { title: 'vs KT', date: '2022-07-28'},
          { title: 'vs NC', date: '2022-07-29'},
          { title: 'vs NC', date: '2022-07-30'},
          { title: 'vs NC', date: '2022-07-31'},
        ]} 
        plugins={[dayGridPlugin]}
        locale = 'ko'
         />
    </div>
    )
}

  