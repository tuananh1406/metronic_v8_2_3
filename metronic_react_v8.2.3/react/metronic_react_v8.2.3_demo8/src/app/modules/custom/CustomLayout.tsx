
import {useEffect} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const CustomLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (

          <div className='row d-flex flex-column-fluid flex-center'>
  <div className="row align-items-end justify-content-center">
      <div className="col-lg-4">
        <div className="card card-custom overlay overflow-hidden">
  <div className="card-header justify-content-center">
      <h3 className="card-title">Title</h3>
  </div>
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('media/stock/600x400/img-1.jpg')}
                alt=""
                className="w-100 rounded"
              />
            </div>
          </div>
  <div className="card-footer">
      Footer
  </div>
        </div>
      </div>
</div>
          </div>
  )
}

export {CustomLayout}
