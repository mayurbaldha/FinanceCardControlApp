import React from 'react';
import Card from '../molecules/Card';
import BottomContainer from '../organisms/BottomContainer';
import ListItems from '../organisms/ListItems';
import ProgressArea from '../organisms/ProgressArea';
import TopContainer from '../organisms/TopContainer';

const OverlappingContainers = () => {
 return (
    <>
      <TopContainer/>
      <BottomContainer>
        <Card />
        <ProgressArea />
        <ListItems />
      </BottomContainer>
    </>

  )
 }
export default OverlappingContainers;