const { fetchGigs, fetchGigByID, deleteGigByID, postGig} = require("./fetch");

//tests


//test fetching all gigs
describe("fetchGigs", () => {
    it("returns all gigs", async () => {
        const gigsData = await fetchGigs();
        expect(gigsData).toEqual(
            [{
            name: "Ane Brun",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ane_Brun_2012-03-29_003.jpg/500px-Ane_Brun_2012-03-29_003.jpg",
            description: "Folk singer-songwriter",
            date: "2025-06-01T00:00:00.000Z",
            location: "The Town Hall, Accrington",
            id: 1,
            },
            {
            name: "Radiohead",
            image: "https://cdn.britannica.com/98/162198-050-6452139D/Radiohead-business-models-British-performers-innovator-Internet-2012.jpg?w=300",
            description: "Alternative",
            date: "2025-06-14T00:00:00.000Z",
            location: "The O2, Bristol",
            id: 2,
            },
            {
            name: "LCD Soundsystem",
            image: "https://magazine-resources.tidal.com/uploads/2017/09/LCD_1200.jpg",
            description: "Art-rock, electronic experimentalism, proto-punk fusion",
            date: "2025-07-12T00:00:00.000Z",
            location: "Millenium Stadium, Cardiff",
            id: 3,
            }]
        );
    });
    // how to throw an error when invalid response from server - mocking?
});

// test fetching one gig by matching ID in url
describe("fetchGigByID", () => {
    // returns correct gig 
    it("returns gig with matching id in the url", async () => {
        const gigData = await fetchGigByID(2);
        expect(gigData).toEqual(
            {
            name: "Radiohead",
            image: "https://cdn.britannica.com/98/162198-050-6452139D/Radiohead-business-models-British-performers-innovator-Internet-2012.jpg?w=300",
            description: "Alternative",
            date: "2025-06-14T00:00:00.000Z",
            location: "The O2, Bristol",
            id: 2,
            }
        );
    });
    // returns correct message when 404 response
    it("returns error message when 404 response", async () => {
        await expect(fetchGigByID(100)).rejects.toThrow("Gig not found");
    });
    // how to throw an error when invalid response from server - mocking?
});

// test deleting one gig by matching ID in url
describe("deleteGigByID", () => {
    // returns correct gig 
    it("deletes gig and returns required message", async () => {
        const deleteData = await deleteGigByID(1);
        expect(deleteData).toEqual({message: "Successfully deleted gig", 
            gigs: [
            {
            name: "Radiohead",
            image: "https://cdn.britannica.com/98/162198-050-6452139D/Radiohead-business-models-British-performers-innovator-Internet-2012.jpg?w=300",
            description: "Alternative",
            date: "2025-06-14T00:00:00.000Z",
            location: "The O2, Bristol",
            id: 2,
            },
            {
            name: "LCD Soundsystem",
            image: "https://magazine-resources.tidal.com/uploads/2017/09/LCD_1200.jpg",
            description: "Art-rock, electronic experimentalism, proto-punk fusion",
            date: "2025-07-12T00:00:00.000Z",
            location: "Millenium Stadium, Cardiff",
            id: 3,
            }]}
        );
    });
    // returns correct message when 404 response
    it("returns error message when 404 response", async () => {
        await expect(deleteGigByID(100)).rejects.toThrow("Gig not found");
    });
    // how to throw an error when invalid response from server - mocking?
});


// test post new gig
describe("postGig", () => {
    // returns correct gig 
    it("posts gig and returns required message", async () => {
        //gig date to be posted
        const data = {
            name: "Bjork",
            image: "https://magazine-resources.tidal.com/uploads/2017/09/LCD_1200.jpg",
            description: "Art-house experimental Icelandic legend",
            date: new Date("2025-10-12T00:00:00.000Z"),
            location: "Barbican Centre, London",
            id: 4,
        };
        // post the data using postData()
        const postData = await postGig(data);
        // expect correct result
        expect(postData).toEqual({message: "Successfully posted new gig", 
            gigs: [
            {
            name: "Radiohead",
            image: "https://cdn.britannica.com/98/162198-050-6452139D/Radiohead-business-models-British-performers-innovator-Internet-2012.jpg?w=300",
            description: "Alternative",
            date: "2025-06-14T00:00:00.000Z",
            location: "The O2, Bristol",
            id: 2,
            },
            {
            name: "LCD Soundsystem",
            image: "https://magazine-resources.tidal.com/uploads/2017/09/LCD_1200.jpg",
            description: "Art-rock, electronic experimentalism, proto-punk fusion",
            date: "2025-07-12T00:00:00.000Z",
            location: "Millenium Stadium, Cardiff",
            id: 3,
            },
            {
            name: "Bjork",
            image: "https://magazine-resources.tidal.com/uploads/2017/09/LCD_1200.jpg",
            description: "Art-house experimental Icelandic legend",
            date: "2025-10-12T00:00:00.000Z",
            location: "Barbican Centre, London",
            id: 4,
            }]}
        );
    });
    // how to throw an error when invalid response from server - mocking?
});