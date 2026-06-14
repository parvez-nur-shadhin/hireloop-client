import { getUser } from '@/lib/core/session';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react';

const ApplyPage = async({params}) => {
    const {id} = params;

    const session = await getUser();
    const user = session?.user;

    if(!user) {
        redirect(`/auth/sign-in?redirect=/jobs/${id}/apply`);
    }

    return (
        <div className='min-h-screen'>
            <h1>Hello</h1>
        </div>
    );
};

export default ApplyPage;