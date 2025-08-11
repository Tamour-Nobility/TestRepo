<template>
  <div class="calendar-wrapper">
    <header>
      <div class="icons">
        <span id="prev" @click="changeMonth(-1)">
          <i class="ri-arrow-left-s-line"></i>
        </span>
        <p class="current-date">{{ currentDate }}</p>
        <span id="next" @click="changeMonth(1)">
          <i class="ri-arrow-right-s-line"></i>
        </span>
      </div>
    </header>
    <div class="calendar">
      <ul class="weeks">
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>
      <ul class="days">
        <li
          v-for="(day, index) in calendarDays"
          :key="index"
          :class="[day.class]"
        >
          {{ day.date }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

interface Day {
  date: number;
  class: string;
}

export default defineComponent({
  name: "CalendarContent",
  setup() {
    const date = new Date();
    const currYear = ref(date.getFullYear());
    const currMonth = ref(date.getMonth());
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentDate = ref(`${months[currMonth.value]} ${currYear.value}`);

    const getCalendarDays = (year: number, month: number): Day[] => {
      const days: Day[] = [];
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
      const lastDayOfMonth = new Date(year, month, lastDateOfMonth).getDay();
      const lastDateOfLastMonth = new Date(year, month, 0).getDate();

      for (let i = firstDayOfMonth; i > 0; i--) {
        days.push({ date: lastDateOfLastMonth - i + 1, class: "inactive" });
      }

      for (let i = 1; i <= lastDateOfMonth; i++) {
        const isToday =
          i === date.getDate() &&
          month === date.getMonth() &&
          year === date.getFullYear();
        days.push({ date: i, class: isToday ? "active" : "" });
      }

      for (let i = lastDayOfMonth; i < 6; i++) {
        days.push({ date: i - lastDayOfMonth + 1, class: "inactive" });
      }

      return days;
    };

    const calendarDays = computed(() =>
      getCalendarDays(currYear.value, currMonth.value)
    );

    const changeMonth = (direction: number) => {
      currMonth.value += direction;
      if (currMonth.value < 0 || currMonth.value > 11) {
        const newDate = new Date(currYear.value, currMonth.value);
        currYear.value = newDate.getFullYear();
        currMonth.value = newDate.getMonth();
      }
      currentDate.value = `${months[currMonth.value]} ${currYear.value}`;
    };

    return {
      currentDate,
      calendarDays,
      changeMonth,
    };
  },
});
</script>

<style lang="scss" scoped>
.calendar-wrapper {
  header {
    display: flex;
    align-items: center;
    padding: 10px 0;
    justify-content: space-between;
    h3 {
      margin-bottom: 0;
      font-size: 20px;
      font-weight: bold;
    }
    .icons {
      display: contents;
      span {
        height: 30px;
        width: 30px;
        line-height: 30px;
        margin: 0 2px;
        cursor: pointer;
        background-color: #f3f3f3;
        color: #000000;
        text-align: center;
        font-size: 22px;
        border-radius: 50%;
        transition: 0.5s;
        &:hover {
          background: #3584fc;
          color: #ffffff;
        }
      }
    }
    .current-date {
      font-size: 18px;
      font-weight: 500;
      margin: {
        bottom: 0;
      }
    }
  }
  .calendar {
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      text-align: center;
      li {
        color: var(--paragraphColor);
        width: calc(100% / 7);
        font-size: 1.07rem;
      }
    }
    .weeks {
      padding-left: 0;
      margin: 0 -15px;
      li {
        font-weight: 500;
        cursor: default;
        padding: 5px;
        color: var(--headingColor);
        font-weight: 500;
        font-size: 14px;
      }
    }
    .days {
      padding: 0;
      margin: 0 -15px;
      li {
        font-family: var(--heading-fontFamily);
        color: var(--paragraphColor);
        font-weight: 400;
        font-size: 14px;
        z-index: 1;
        cursor: pointer;
        position: relative;
        padding: 10px;
        transition: var(--transition);
        &.inactive {
          color: #8896a4;
          opacity: 0.3;
        }
        &:nth-child(6) {
          color: #ff4023;
        }
        &:nth-child(7) {
          color: #ff4023;
        }
        &:nth-child(13) {
          color: #ff4023;
        }
        &:nth-child(14) {
          color: #ff4023;
        }
        &:nth-child(20) {
          color: #ff4023;
        }
        &:nth-child(21) {
          color: #ff4023;
        }
        &:nth-child(27) {
          color: #ff4023;
        }
        &:nth-child(28) {
          color: #ff4023;
        }
        &:nth-child(34) {
          color: #ff4023;
        }
        &:nth-child(35) {
          color: #ff4023;
        }
        &.active {
          color: #ffffff;
          &::before {
            background: #3584fc;
            border-radius: 50px;
          }
        }
        &::before {
          position: absolute;
          content: "";
          left: 50%;
          top: 50%;
          height: 43px;
          width: 43px;
          z-index: -1;
          border-radius: 2px;
          transform: translate(-50%, -50%);
        }
        &:not(.active):hover::before {
          background: #3584fc;
          border-radius: 50px;
        }
        &:hover {
          color: #ffffff;
        }
      }
    }
  }
}
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .calendar-wrapper {
    margin-left: 0;
    header {
      padding: 5px;
      .current-date {
        margin: {
          top: 10px;
          bottom: 10px;
          left: 0;
        }
      }
    }
    .calendar {
      padding: 0;
      .weeks {
        padding: 0;

        li {
          padding: 3px;
          font-size: 13px;
        }
      }
      .days {
        li {
          padding: 5px;
          font-size: 15px;
          &::before {
            height: 30px;
            width: 30px;
          }
        }
      }
    }
  }
}
/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .calendar-wrapper {
    header {
      display: flex !important;
    }
  }
}
/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .calendar-wrapper {
    margin-left: 0;
  }
}
/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .calendar-wrapper {
    margin-left: 0;
  }
}
/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .calendar-wrapper {
    header {
      h3 {
        font-size: 15px;
      }
      .current-date {
        font-size: 14px;
        margin-left: 20px;
      }
    }
  }
}
</style>
