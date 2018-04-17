export const selectJobs = (user) => {
    console.log("You clicked on user:", user.Title);
    return {
        type: "JOBS_SELECTED",
        payload: user
    }
};