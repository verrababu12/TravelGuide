import styled from 'styled-components'

export const TravelGuideContainer = styled.div`
  background-color: #eef4f7;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 120px;
  padding-right: 120px;
`

export const Heading = styled.h1`
  color: #334155;
  font-size: 20px;
  text-align: center;
  font-family: 'Consolas';
  border-bottom: solid 2px #52bbf0;
  width: 150px;
  padding-bottom: 10px;
`

export const PackagesContainer = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80vw;
  list-style-type: none;
`

export const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
