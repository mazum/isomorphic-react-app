import React from 'react';
import { connect } from 'react-redux';
import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';
import {
    Route,
    Link
} from 'react-router-dom';

const AppDisplay =  ()=>(
    <div>
        <h1>
            <Link to={`/`}>
                Isomorphic React
            </Link>
        </h1>
        <div>
            <Route exact path='/' render={()=><QuestionList />}/>
            <Route exact path='/questions/:id' render={({match})=><QuestionDetail question_id={match.params.id}/>}/>
        </div>
    </div>
);

const mapStateToProps = (state,ownProps)=>{
    return {
        ...state
    }
};

export default connect(mapStateToProps)(AppDisplay);