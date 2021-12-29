import styled from "styled-components";

const color = {
    White: '#ffffff',
    LightGray: '#ebebeb',
    Background: '#f2f2f2'
};

export const Container = styled.div`
  padding: 0 2rem;
  background-color: ${color.Background}
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
  border-top: 1px solid ${color.LightGray};
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
  justify-content: flex-start;
  align-items: center;
`

export const MainGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
`

export const MainCard = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${color.LightGray};
  border-radius: 10px;
  background-color: ${color.White};
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 484px;
  min-height: 170px;

  &:hover {
    box-shadow: 0 0 6px 3px ${color.LightGray};
  }
`

export const FilterContainer = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid ${color.LightGray};
  border-radius: 10px;
  background-color: ${color.White};
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadMoreContainer = styled.div`
  width: 100%;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
