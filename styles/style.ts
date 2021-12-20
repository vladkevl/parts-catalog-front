import styled from "styled-components";

const color = {
    LightGray: '#ebebeb'
};

export const Container = styled.div`
  padding: 0 2rem;
`

export const Navigation = styled.header`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid ${color.LightGray};
  box-shadow: 0 0 6px 3px ${color.LightGray};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
`

export const NavigationContainer = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1024px;
`

export const NavigationList = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const NavigationListItem = styled.div`
  padding: 10px;
  font-size: large;
  text-transform: uppercase;
  text-align: center;
  color: #303030;
  white-space: nowrap;
  list-style-type: none;
  cursor: pointer;
`
export const FooterContainer = styled.footer`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterLogo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`

export const Main = styled.main`
  min-height: 100vh;
  padding: 80px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`

export const MainCard = styled.div`
  margin: 1rem;
  padding: 1rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 360px;
  min-height: 170px;

  &:hover {
    box-shadow: 0 0 6px 3px ${color.LightGray};
  }
`
