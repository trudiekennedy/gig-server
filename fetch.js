// File: fetch.js


// fetchGigs() ----> returns gigs
const fetchGigs = async () => {
    try {
        // fetch url of server
        const response = await fetch("http://localhost:3000/gigs");
        // custom error handling/
        if (!response.ok) { 
            //handle response not being valid here
            throw new Error("Invalid response from server");
        }
        // get server response data
        const gigsData = await response.json(); 
        return gigsData;

    } catch(error) {
        throw(error);
    }
};

// fetchGigByID() ----> returns gig with rel id
const fetchGigByID = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/gigs/${id}`);
        // error handle - incl 404 response if index out of range
        if(response.status === 404) { 
            throw new Error("Gig not found"); 
        } else if (!response.ok) {
            throw new Error("Invalid response from server");
        }
        // get server response data
        const gigData = await response.json(); 
        return gigData;

    } catch(error) {
        throw(error);
    }
};


// deleteGigByID() ----> deletes gig and returns message
const deleteGigByID = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/gigs/${id}`, {
                                    method: 'DELETE'
                                });
        // error handle - incl 404 response if index out of range
        if(response.status === 404) { 
            throw new Error("Gig not found"); 
        } else if (!response.ok) {
            throw new Error("Invalid response from server");
        }
        // get server response data
        const deleteData = await response.json(); 
        return deleteData;

    } catch(error) {
        throw(error);
    }
};

// postGig ----> posts gig and returns message
const postGig = async (gigData) => {
    try {
        const response = await fetch(`http://localhost:3000/gigs/`, {
                                    method: 'POST',
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify({ gig: gigData })
                                });
        // error handle - incl 404 response if index out of range
    if (!response.ok) {
            throw new Error("Invalid response from server");
        }
        // get server response data
        const postData = await response.json(); 
        return postData;

    } catch(error) {
        throw(error);
    }
};
//Exports
module.exports = {fetchGigs, fetchGigByID, deleteGigByID, postGig};