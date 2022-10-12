import { useLoaderData } from 'react-router-dom';
import Graph from '../Graph/Graph'
const Statistics = () => {

    const loader = useLoaderData()
    const data = [loader]
    return (
        <div>
            {
                data.map(data => <Graph data={data}></Graph>)
            }
        </div>
    )
};

export default Statistics;