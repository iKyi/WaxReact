import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useScrollPosition from '../../../../../hooks/useScrollPosition';
import AppRoutes from '../../../../../router/appRoutes';
import { useLocation } from 'react-router';
import './AppLeftNav.scss';

export type AppLeftNavPropsType = {
  children?: any
}

const AppLeftNavComp: React.VFC<AppLeftNavPropsType> = ({ children }) => {

  // *************** STATIC PROPS *************** //
  const scrollPos = useScrollPosition();
  const arenaEntry = AppRoutes.find(item => item.name === 'Arena');
  const location = useLocation();
  // *************** LOCAL STATE *************** //
  const [position, setPosition] = useState<number>(0);
  const [expanded, setExpanded] = useState<boolean>(false);

  // *************** LOCAL EVENTS *************** //
  useEffect(() => {
    setPositionNumber(scrollPos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPos])
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPositionNumber(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  // *************** LOCAL METHODS *************** //
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setPositionNumber = useCallback(
    debounce((receivedPosition: number) => {
      setPosition(receivedPosition);
    }, 500),
    []
  )

  // *************** RENDER *************** //
  return (
    <div className="leftNavWrapper">
      <nav className={`leftNav ${expanded ? 'expanded' : ''}`} style={{ top: position }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <ul className="navMenuVertical">
          {arenaEntry && arenaEntry.children?.map(route => {
            return (
              <li key={route.name}>
                <NavLink to={`/arena/${route.path}`}>
                  {route.name}
                </NavLink>
              </li>

            )
          })}
        </ul>

      </nav>
    </div>

  )
}

export default AppLeftNavComp