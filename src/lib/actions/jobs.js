const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const addJobs = async(newJob) => {
    const res = await fetch(`${baseURL}/api/jobs`, {
        method: 'POST',
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(newJob)
    });

    return res.json();
}