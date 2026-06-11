import DashboardStats from '@/Components/dashboard/DashboardStats';
import DashboardTable from '@/Components/dashboard/DashboardTable';
import React from 'react';

const RecruitersPage = () => {
    return (
        <div>
            <DashboardStats />
            <div className='p-4'>
                <DashboardTable />
            </div>
        </div>
    );
};

export default RecruitersPage;