// ** React Imports
import { useEffect, useState, Fragment, forwardRef } from 'react'
// ** Third Party Components
import Stepper from 'bs-stepper'
import classnames from 'classnames'
import { PropTypes } from 'prop-types'
import { Minus } from 'react-feather'

// ** Styles
import 'bs-stepper/dist/css/bs-stepper.min.css'
import '../../../@core/scss/base/plugins/forms/form-wizard.scss'

const Wizard = forwardRef((props, ref) => {
  // ** Props
  const { type, className, contentClassName, headerClassName, steps, separator, options, instance } = props

  // ** State
  const [activeIndex, setActiveIndex] = useState(0)

  // ** Vars
  let stepper = null

  // ** Step change listener on mount
  useEffect(() => {
    stepper = new Stepper(ref.current, options)

    ref.current.addEventListener('shown.bs-stepper', function (event) {
      setActiveIndex(event.detail.indexStep)
    })

    if (instance) {
      instance(stepper)
    }
  }, [])
  // ** Renders Wizard Header
  const renderHeader = () => {
    return steps.map((step, index) => {
      return (
        <Fragment key={step.id}>
          {index !== 0 && index !== steps.length ? <div className='line'>{separator}</div> : null}
          <div
            className={classnames('step', {
              crossed: activeIndex > index,
              active: index === activeIndex
            })}
            data-target={`#${step.id}`}
          >
            <button type='button' className='step-trigger'>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <span className='bs-stepper-box'>{step.icon ? step.icon : index + 1}</span>
                <span>
                  <b>{step.title}</b>
                </span>
              </div>
            </button>
          </div>
        </Fragment>
      )
    })
  }

  // ** Renders Wizard Content
  const renderContent = () => {
    return steps.map((step, index) => {
      return (
        <div
          className={classnames('content', {
            [contentClassName]: contentClassName,
            'active dstepper-block': activeIndex === index
          })}
          id={step.id}
          key={step.id}
        >
          {step.content}
        </div>
      )
    })
  }

  return (
    <div
      ref={ref}
      className={classnames('bs-stepper', {
        [className]: className,
        vertical: type === 'vertical',
        'vertical wizard-modern': type === 'modern-vertical',
        'wizard-modern': type === 'modern-horizontal'
      })}
    >
      <div className={classnames('bs-stepper-header d-flex justify-content-center', { [headerClassName]: headerClassName })}>{renderHeader()}</div>
      <div className='bs-stepper-content'>{renderContent()}</div>
    </div>
  )
})

export default Wizard

// ** Default Props
Wizard.defaultProps = {
  options: {},
  type: 'horizontal',
  separator: <Minus size={17} />
}

// ** PropTypes
Wizard.propTypes = {
  type: PropTypes.string,
  instance: PropTypes.func,
  options: PropTypes.object,
  className: PropTypes.string,
  separator: PropTypes.element,
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      icon: PropTypes.any,
      content: PropTypes.any.isRequired
    })
  ).isRequired
}
