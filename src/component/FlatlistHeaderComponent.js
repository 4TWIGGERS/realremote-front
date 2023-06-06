import React from 'react';
import { Platform } from 'react-native';

import MobBasicCategories from '../components/MobBasicCategories';
import { useResponsive } from '../stores/index';
import ChooseCategoryTitle from './ChooseCategoryTitle';
import Intro from './Intro';
import JobsCheck from './JobsCheck';
import NotSuccessful from './NotSuccessful';
import Subscribe from './Subscribe';
import TopBackgroundImg from './TopBackgroundImg';
import WebBasicCategories from './WebBasicCategories';
import WebTitle from './WebTitle';

const FlatHeader = ({
   check,
   setCheck,
   successful,
   jobs,
   setSelectedCategories,
   selectedCategories,
   setPage,
}) => {
   const { isDesktop } = useResponsive();
   const BasicCategories = isDesktop ? WebBasicCategories : MobBasicCategories;
   return (
      <>
         {isDesktop && (
            <>
               <TopBackgroundImg />
               <WebTitle />
            </>
         )}
         {Platform.OS === 'web' && <Subscribe />}

         {isDesktop && <Intro />}

         {!isDesktop && <ChooseCategoryTitle />}

         <BasicCategories
            {...{
               setSelectedCategories,
               selectedCategories,
               setPage,
            }}
         />

         <JobsCheck {...{ check, setCheck, setPage }} />
         {successful && !jobs.length && <NotSuccessful />}
      </>
   );
};

export default FlatHeader;
