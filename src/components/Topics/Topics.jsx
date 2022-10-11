import React, { useContext } from 'react';
import { TopicsContext } from '../../Layout/Main';
import Cards from '../Cards/Cards';


const Topics = () => {
    const allData = useContext(TopicsContext)
    const {data} = allData[0];
    console.log(data);
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 ">
            {
                data.map(question => <Cards key={question.id} data={question}/>)
            }
        </div>
    );
};

export default Topics;




