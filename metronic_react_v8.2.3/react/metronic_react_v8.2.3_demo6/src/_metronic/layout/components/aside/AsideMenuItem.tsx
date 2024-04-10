import {FC} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import {checkIsActive, KTIcon, WithChildren} from '../../../helpers'
import {useLayout} from '../../core'

type Props = {
  to: string
  title: string
  icon?: string
  fontIcon?: string
  className?: string
  hasBullet?: boolean
  bsTitle?: string
  outside?: boolean
}

const WithOverlay: FC<Props & WithChildren> = ({bsTitle, children}) => {
  return (
    <OverlayTrigger
      placement='right'
      delay={{show: 250, hide: 400}}
      overlay={(props) => (
        <Tooltip id='button-tooltip' {...props}>
          {bsTitle}
        </Tooltip>
      )}
    >
      <>{children}</>
    </OverlayTrigger>
  )
}

const MenuItem: FC<Props & WithChildren> = ({
  to,
  className,
  outside,
  title,
  fontIcon,
  bsTitle,
  hasBullet,
  icon,
  children,
}) => {
  const {pathname} = useLocation()
  const isActive = checkIsActive(pathname, to)
  const {config} = useLayout()
  const {aside} = config
  const overlayAttributes = bsTitle
    ? {
        'data-bs-toggle': 'tooltip',
        'data-bs-trigger': 'hover',
        'data-bs-dismiss': 'click',
        'data-bs-placement': 'right',
        'data-bs-original-title': bsTitle,
      }
    : {}

  return (
    <div className={clsx('menu-item', isActive && 'here show', className)}>
      {outside ? (
        <a href={to} target='_blank' className={clsx('menu-link menu-center', {active: isActive})}>
          {fontIcon && aside.menuIcon === 'font' && (
            <>
              <span className='menu-icon me-0'>
                <i className={clsx('bi', fontIcon, 'fs-2')}></i>
              </span>
              <span className='menu-title'>{title}</span>
            </>
          )}
        </a>
      ) : (
        <>
          <Link className='menu-link menu-center' to={to} {...overlayAttributes}>
            {hasBullet && (
              <span className='menu-bullet'>
                <span className='bullet bullet-dot'></span>
              </span>
            )}
            {icon && aside.menuIcon === 'svg' && (
              <span className='menu-icon'>
                <KTIcon iconName={icon} className='fs-2' />
              </span>
            )}
            {fontIcon && aside.menuIcon === 'font' ? (
              <>
                <span className='menu-icon me-0'>
                  <i className={clsx('bi', fontIcon)}></i>
                </span>
                <span className='menu-title'>{title}</span>
              </>
            ) : (
              <span className='menu-title'>{title}</span>
            )}
          </Link>
          {children}
        </>
      )}
    </div>
  )
}

const AsideMenuItem: FC<Props & WithChildren> = (props) => {
  if (props.bsTitle) {
    return (
      <WithOverlay {...props}>
        <MenuItem {...props}>{props.children}</MenuItem>
      </WithOverlay>
    )
  }

  return <MenuItem {...props}>{props.children}</MenuItem>
}
export {AsideMenuItem}
