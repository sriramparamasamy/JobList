import {combineReducers} from 'redux';
import postjobsreducers from './postjobsreducers';

import activepostjobsreducers from './activepostjobsreducers';


const allReducers = combineReducers ({
    postjobs: postjobsreducers,
    activePostjobs: activepostjobsreducers

});

export default allReducers;