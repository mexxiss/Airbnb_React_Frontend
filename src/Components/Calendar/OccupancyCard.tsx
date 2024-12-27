import { PieChart } from '@mui/x-charts/PieChart';
import { getMonthName } from '../../utils/common';

interface IOccupancyCard {
    percentage: number;
    month: number;
}

const OccupancyCard = ({percentage, month}: IOccupancyCard) => {
    const data = [
        { id: 0, value: percentage, color: '#bb9e6c' },
        { id: 1, value: 100 - percentage, color: '#e0e0e0' },
    ];

    return (
        <div className="flex flex-col" style={{ width: '100%' }}>
            <div className="text-sm sm:text-base text-primary bg-primary bg-opacity-20 py-2 text-center">
                {getMonthName(month)}
            </div>
            <div className="text text-center mt-2 text-gray-600">{percentage}%</div>
            <div className="mt-4">
                <PieChart
                    series={[
                        {
                            data: data,
                        },
                    ]}
                    width={400}
                    height={200}
                />
            </div>
        </div>
    );
};


export default OccupancyCard;
