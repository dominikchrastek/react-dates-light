# 0.0.36 (2018-05-29)

* new prop **CustomTd** React.ComponentType<CalendarDayProps> - shoudl be used as custom Day component in Calendar

# 0.0.35 (2018-05-17)

* new props **customClasses** { [string]: Date[]} - the class (css) will be applied to the dates that are in the array

# 0.0.34 (2018-03-23)

* **styled-components** are now `peerDependency`

# 0.0.32 (2018-03-22)

### BREAKING CHANGES

* new prop **past** - allow/disable past date selection (default `true`)
* new prop **allowedDates** - array of dates that are selectable (default `[]`) when it's empty, all dates are selectable (except disabled dates)
* new prop **rangeSelect** - if enabled, ranges can be selected, otherwise just one date (default `true`)

### BREAKING CHANGES

**numberOfMonths** and **numberOfPastMonths** were removed, use **firstMonth** and **lastMonth**

```js
numberOfMonths={1} -> firstMonth={new Date(2018, 1, 1)} // some month
numberOfPastMonths={1} -> lastMonth={new Date(2018, 2, 1)}  // some month
```
