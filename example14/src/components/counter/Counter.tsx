import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IGM1 from '../../assets/image/Image1.jpg'
import { actionTypes, selectors } from '../../features/counter'

const Counter: React.FC = () => {
  const count = useSelector(selectors.getCountValue)
  const dispatch = useDispatch()

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Product Name</span>
              <p>
                Here you can increment and decrement counter value using buttons
                below. All the state updates are performed via redux actions.
              </p>
              <img
                src={IGM1}
                alt="anh 1"
                style={{ width: 380, paddingBottom: 10, paddingTop: 25 }}
              />
              <h4>
                Counter: <strong>{count}</strong>
              </h4>
            </div>
            <div className="card-action">
              <div className="group">
                <button
                  className="waves-effect waves-teal btn-flat blue"
                  type="button"
                  data-qa="decrement-counter"
                  onClick={() =>
                    dispatch({ type: actionTypes.DECREMENT_COUNTER })
                  }
                >
                  decrement
                </button>
                <button
                  className="waves-effect waves-teal btn-flat red"
                  type="button"
                  data-qa="increment-counter"
                  onClick={() =>
                    dispatch({ type: actionTypes.INCREMENT_COUNTER })
                  }
                >
                  increment
                </button>
                <button
                  className="waves-effect waves-teal btn-flat yellow"
                  type="button"
                  data-qa="increment-counter"
                  onClick={() =>
                    dispatch({ type: actionTypes.CLEAR_ALL_COUNTER })
                  }
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter
