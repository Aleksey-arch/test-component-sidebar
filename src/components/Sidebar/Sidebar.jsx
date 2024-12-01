import { useState } from 'react';
import classnames from 'classnames';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const AnimationText = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
 }
`;
const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  & span {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colorTextLogoDefault};
  }
  & img {
    width: 30px;
    margin-right: 4px;
  }
  & div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    background-color: ${({ theme }) => theme.colorSidebarBorder};
    border-radius: 50%;
    color: ${({ theme }) => theme.colorTextHover};
    &:hover {
      cursor: pointer;
    }
  }
  & span {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colorTextHover};
  }
  &.opened {
    & span {
      animation: ${AnimationText} 0.6s linear;
    }
    & div {
      position: absolute;
      top: inherit;
      right: -12px;
      transition: right 0.3s;
    }
  }
  &.closed {
    & span {
      display: none;
    }
    & div {
      right: -36px;
      transition: right 0.3s;
    }
  }
`;
const ContainerSidebar = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 815px;
  border-radius: 15px;
  border: 4px solid ${({ theme }) => theme.colorSidebarBorder};
  background-color: ${({ theme }) => theme.colorSidebarBackgroundDefault};
  padding: 20px;
  margin: 20px;
  color: ${({ theme }) => theme.colorTextDefault};
  &.opened {
    width: 219px;
    transition: width 0.3s;
  }
  &.closed {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 74px;
    transition: width 0.3s;
  }
`;
const ContainerRoutes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: auto;
  &.opened {
    transition: width 0.3s;
    & span {
      animation: ${AnimationText} 0.6s linear;
    }
  }
  &.closed {
    transition: width 0.3s;
    & span {
      display: none;
    }
    & div {
      justify-content: center;
    }
  }
`;
const ContainerBottomRoutes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  &.opened {
    & span {
      animation: ${AnimationText} 0.6s linear;
    }
  }
  &.closed {
    transition: width 0.3s;
    & span {
      display: none;
    }
    & div {
      justify-content: center;
    }
  }
`;
const Route = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 11px;
  border-radius: 15px;
  background-color: ${({ theme }) =>
    theme.isSelected ? theme.colorSidebarBorder : 'transparent'};
  color: ${({ theme }) =>
    theme.isSelected ? theme.colorTextActive : theme.colorTextDefault};
  height: 41px;
  min-width: 41px;
  transition: width 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colorSidebarBackgroundHover};
    color: ${({ theme }) => theme.colorTextHover};
    cursor: pointer;
  }
  &:active {
    background-color: ${(props) => props.theme.colorButtonBackgroundActive};
    color: ${(props) => props.theme.colorTextActive};
  }
`;
const BottomRoute = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 11px;
  border-radius: 15px;
  height: 41px;
  min-width: 41px;
  background-color: ${({ theme }) =>
    theme.isSelected ? theme.colorSidebarBorder : 'transparent'};
  color: ${({ theme }) =>
    theme.isSelected ? theme.colorTextActive : theme.colorTextDefault};
  &:hover {
    background-color: ${({ theme }) => theme.colorSidebarBackgroundHover};
    color: ${({ theme }) => theme.colorTextHover};
    cursor: pointer;
  }
  &:active {
    background-color: ${({ theme }) => theme.colorButtonBackgroundActive};
    color: ${({ theme }) => theme.colorTextActive};
  }
`;

const Sidebar = ({ theme }) => {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const conditionIsOpened = {
    opened: isOpened,
    closed: !isOpened,
  };
  const containerClassnames = classnames('sidebar', conditionIsOpened);
  const containerLogoClassnames = classnames(
    'container-logo',
    conditionIsOpened,
  );
  const containerRoutesClassnames = classnames(
    'container-routes',
    conditionIsOpened,
  );
  const containerBottomRoutesClassnames = classnames(
    'container-routes',
    conditionIsOpened,
  );
  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };
  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <ContainerSidebar theme={theme} className={containerClassnames}>
      <ContainerLogo theme={theme} className={containerLogoClassnames}>
        <img src={logo} alt="TensorFlow logo" />
        <span>TensorFlow</span>
        <div onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
        </div>
      </ContainerLogo>
      <ContainerRoutes theme={theme} className={containerRoutesClassnames}>
        {routes.map((route) => (
          <Route
            key={route.title}
            onClick={() => {
              goToRoute(route.path);
              setSelectedRoute(route.title);
            }}
            theme={{ ...theme, isSelected: selectedRoute === route.title }}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span>{route.title}</span>
          </Route>
        ))}
      </ContainerRoutes>
      <ContainerBottomRoutes
        theme={theme}
        className={containerBottomRoutesClassnames}
      >
        {bottomRoutes.map((route) => (
          <BottomRoute
            key={route.title}
            onClick={() => {
              goToRoute(route.path);
              setSelectedRoute(route.title);
            }}
            theme={{ ...theme, isSelected: selectedRoute === route.title }}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span>{route.title}</span>
          </BottomRoute>
        ))}
      </ContainerBottomRoutes>
    </ContainerSidebar>
  );
};

Sidebar.propTypes = {
  theme: PropTypes.object,
};

export default Sidebar;
