import React from 'react';
import SidlabTable from '../../shared/table/SidlabTable';

const chartInfo = {
            key: 'áy7aga',
            type: 'Line',
            title: '',
            showTitle: boolean,
            legendPosition: 'top or bottom',
            showLegend: boolean,
            color:'',
            markerWidth: '',
            markerHeight: '',
            markerShape: '',
            dataSource: [
                { x: 1, y1: 15},
                { x: 2, y1: 20},
                { x: 3, y1: 35},
                { x: 4, y1: 40},
                { x: 5, y1: 80},
                { x: 6, y1: 70},
                { x: 7, y1: 65},
                { x: 8, y1: 55},
                { x: 9, y1: 50},
                { x: 10, y1: 30},
                { x: 11, y1: 35},
                { x: 12, y1: 35}
            ],
            dashArray: '5,5 or 0',
            name: 'China',
            xName: 'x', 
            width: 3,
            yName: 'y1',
            primaryxAxis = {
                title: xLabel,
                valueType: 'Category',
                interval: 1,
            },
            primaryyAxis = {
                title: yLabel,
                minimum: 0,
                maximum: maxY,
                interval: 10,
                labelFormat: '{value}°F',
            },
}

const License = () => {
    return (
        <div>
            <SidlabTable/>
        </div>
    )
}

export default License
