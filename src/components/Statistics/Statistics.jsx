import React, { useContext } from 'react';
import { TopicsContext } from '../../Layout/Main';
import TopicDetails from '../TopicDetails/TopicDetails';

const Statistics = () => {
    const [statisticsData] = useContext(TopicsContext)
    const {data} = statisticsData
    // console.log(data);
    return (
        <div className='w-10/12 mx-auto my-10'>
            <h1>Questions Statistics</h1>
            {
                data.map(topics => <TopicDetails key={topics.id} topics={topics}/>)
            }
        </div>
    );
};

export default Statistics;
