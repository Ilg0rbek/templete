// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import register from "./reducers/Register"
import sys from "./reducers/System"
import legal_cancel from "./reducers/Legal_Cancel"
import individual_cancel from "./reducers/Individual_Cancel"
import legalPermEdit from "./reducers/Edit_Legal"
import syst from "@src/views/sys/store"
import applications from "@src/views/application/store"
import monitor from './reducers/monitoring'
import certificate from "./reducers/Certificate"

const rootReducer = {
  auth,
  navbar,
  layout,
  register,
  applications,
  legalPermEdit,
  syst,
  sys,
  monitor,
  legal_cancel,
  certificate,
  individual_cancel
}

export default rootReducer
