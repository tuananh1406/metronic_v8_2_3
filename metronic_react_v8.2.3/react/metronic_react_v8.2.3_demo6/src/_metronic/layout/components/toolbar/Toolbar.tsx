import {useLayout} from '../../core/LayoutProvider'
import {Toolbar2} from './Toolbar2'

const Toolbar = () => {
  const {config} = useLayout()

  switch (config.toolbar.layout) {
    case 'toolbar2':
      return <Toolbar2 />

    default:
      return <Toolbar2 />
  }
}

export {Toolbar}
