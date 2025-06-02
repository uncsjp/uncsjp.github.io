const MONTH_ORDER = {
    "january": 1,
    "february": 2,
    "march": 3,
    "april": 4,
    "may": 5,
    "june": 6,
    "july": 7,
    "august": 8,
    "september": 9,
    "october": 10,
    "november": 11,
    "december": 12
}

const sort_by_younger_date = function(a, b) {
    const a_younger_year = Number(a.date.year) < Number(b.date.year) ? -1 : Number(a.date.year) > Number(b.date.year) ? 1 : 0
    const a_younger_month = MONTH_ORDER[a.date.month.toLowerCase()] < MONTH_ORDER[b.date.month.toLowerCase()] ? -1 : MONTH_ORDER[a.date.month.toLowerCase()] > MONTH_ORDER[b.date.month.toLowerCase()] ? 1 : 0
    const a_younger_day = Number(a.date.day) < Number(b.date.day) ? -1 : Number(a.date.day) > Number(b.date.day) ? 1 : 0

    if (a_younger_year === 0) {
        if (a_younger_month === 0) {
            if (a_younger_day === 0) return 0
            else return a_younger_day
        }
        else return a_younger_month
    }
    else return a_younger_year
}

export default sort_by_younger_date
