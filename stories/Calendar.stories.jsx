/* @flow */
import React from "react";

import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs/react";

import Calendar from "../src";

storiesOf("Calendar", module).add("default", () => (
  <Calendar
    visibleMonths={1}
    firstMonth={subMonths(new Date(), 1)}
    lastMonth={addMonths(new Date(), 1)}
    selectedDates={[]}
    disabledDates={[]}
    selectDates={action("click")}
    showWeekDayNames={boolean("showWeekDayNames", true)}
    showMonthName={boolean("showMonthName", true)}
  />
));

storiesOf("Calendar", module).add("range select", () => (
  <Calendar
    visibleMonths={1}
    firstMonth={subMonths(new Date(), 1)}
    lastMonth={addMonths(new Date(), 1)}
    selectedDates={[]}
    disabledDates={[]}
    selectDates={action("click")}
    rangeSelect
    showWeekDayNames={boolean("showWeekDayNames", true)}
    showMonthName={boolean("showMonthName", true)}
  />
));

storiesOf("Calendar", module).add("2 visibleMonths", () => (
  <Calendar
    visibleMonths={2}
    firstMonth={subMonths(new Date(), 1)}
    lastMonth={addMonths(new Date(), 1)}
    selectedDates={[]}
    disabledDates={[]}
    selectDates={action("click")}
    showWeekDayNames={boolean("showWeekDayNames", true)}
    showMonthName={boolean("showMonthName", true)}
  />
));
