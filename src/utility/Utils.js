import currency from 'currency.js'
import axios from 'axios'
import moment from 'moment'
// import _ from "lodash"

export const http = axios.create({
  baseURL: "http://reg.admin.davxizmat.uz",
  headers: {
    Accept: "application/json"
  }
})
export const baseURL = "http://reg.admin.davxizmat.uz"

export const rmSpace = str => {
  if (str !== null || str !== undefined) return str?.replace(/ /g, '')
  return null
}
const getNameOf = (activityMap, id, locale) => {
  if (locale === 'uz') {
    return activityMap?.names_uz[id] !== null ? activityMap?.names_uz[id] : ''
  } else {
    return activityMap?.names[id] !== null ? activityMap?.names[id] : ''
  }
}

const getNameOfArr = (activityMap, arr, locale) => {
  const result = []
  for (const i in arr) {
    if (locale === 'uz') {
      if (activityMap?.names_uz[arr[i]] !== null) {
        result.push({
          id: arr[i],
          name: activityMap?.names_uz[arr[i]]
        })
      }
    } else {
      if (activityMap?.names[arr[i]] !== null) {
        result.push({
          id: arr[i],
          name: activityMap?.names[arr[i]]
        })
      }
    }
  }
  return result
}

const isAllowed = (arr1, arr2) => arr1?.filter((o) => arr2?.indexOf(o) > -1)?.sort((a, b) => a - b)

export const algoritmTree = ({ activity_tree, allowed_ids }) => {
  const tree = activity_tree?.tree
  const final = []
  const arr = []
  for (const i in tree) {
    if (isAllowed(allowed_ids, tree[i])?.length !== 0 && isAllowed(allowed_ids, tree[i]) !== undefined) {
      arr.push(isAllowed(allowed_ids, tree[i]))
    }
  }
  for (const i in arr[0]) {
    final.push({
      id: arr[0][i],
      name: getNameOf(activity_tree, arr[0][i], "uz"),
      child: getNameOfArr(activity_tree, arr[parseInt(i) + 1], 'uz')
    })
  }
  return final
}

export const algoritmOkedSpacelTree = ({ frequently_used_okeds }) => {
  const final = []
  for (const i in frequently_used_okeds?.graph[0]) {
    final.push({
      id: frequently_used_okeds?.graph[0][i],
      name: getNameOf(frequently_used_okeds, frequently_used_okeds?.graph[0][i]),
      child: getNameOfArr(frequently_used_okeds, frequently_used_okeds?.graph[parseInt(i) + 1])
    })
  }
  return final
}


export const getDate = date => moment(date).format('LLL')

export const isObjEmpty = obj => Object.keys(obj).length === 0

export const legal_status = (status) => {
  switch (status) {
    case 'Complete':
      return 'Faoliyat korsatayorgan'

    default:
      break
  }

}
// ** Returns K format from a number
export const kFormatter = num => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num)

// ** Converts HTML to string
export const htmlToString = html => html.replace(/<\/?[^>]+(>|$)/g, '')

// ** Checks if the passed date is today
const isToday = date => {
  const today = new Date()
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  )
}

export const fCurrency = {
  format: (value, { separator = ' ', precision = 0, decimal = '.', symbol = '' } = {}) => {
    if (Number(value) === Math.floor(value)) {
      precision = 0
    }
    return currency(value, { separator, precision, decimal, symbol }).format()
  },
  add: (value, addValue, { precision = 2 } = {}) => {
    return String(currency(value, { precision }).add(addValue))
  },
  subtract: (value, subtractValue, { precision = 2 } = {}) => {
    return String(currency(value, { precision }).subtract(subtractValue))
  },
  normalize: (value, { precision = 2 } = {}) => {
    return String(currency(value, { precision }))
  }
}


/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */
export const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  if (!value) return value
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

// ** Returns short month of passed date
export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value)
  let formatting = { month: 'short', day: 'numeric' }

  if (toTimeForCurrentDay && isToday(date)) {
    formatting = { hour: 'numeric', minute: 'numeric' }
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

/**
 ** Return if user is logged in
 ** This is completely up to you and how you want to store the token in your frontend application
 *  ? e.g. If you are using cookies to store the application please update this function
 */
export const isUserLoggedIn = () => localStorage.getItem('userData')
export const getUserData = () => JSON.parse(localStorage.getItem('userData'))

/**
 ** This function is used for demo purpose route navigation
 ** In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 ** Please note role field is just for showing purpose it's not used by anything in frontend
 ** We are checking role just for ease
 * ? NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 */
export const getHomeRouteForLoggedInUser = userRole => {
  if (userRole === 'admin') return '/'
  if (userRole === 'client') return '/access-control'
  return '/login'
}

// ** React Select Theme Colors
export const selectThemeColors = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#7367f01a', // for option hover bg-color
    primary: '#7367f0', // for selected option bg-color
    neutral10: '#7367f0', // for tags bg-color
    neutral20: '#ededed', // for input border-color
    neutral30: '#ededed' // for input hover border-color
  }
})
