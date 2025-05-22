const request = require("supertest");
const app = require("./app.js");

describe("/gigs", () => {
    test("GET- responds with list of gig data", async () => { 
        const response = await request.get("/gigs");
        expect(response.body).toEqual([{
            name: "Ane Brun",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ane_Brun_2012-03-29_003.jpg/500px-Ane_Brun_2012-03-29_003.jpg",
            description: "Folk singer-songwriter",
            date: "2025/06/01",
            location: "The Town Hall, Accrington",
            id: 1,
            },
            {
            name: "Radiohead",
            image: "https://cdn.britannica.com/98/162198-050-6452139D/Radiohead-business-models-British-performers-innovator-Internet-2012.jpg?w=300",
            description: "Alternative",
            date: "2025/06/14",
            location: "The O2, Bristol",
            id: 2,
            },
            {
            name: "LCD Soundsystem",
            image: "https://magazine-resources.tidal.com/uploads/2017/09/LCD_1200.jpg",
            description: "Art-rock, electronic experimentalism, proto-punk fusion",
            date: "2025/07/12",
            location: "Millenium Stadium, Cardiff",
            id: 3,
            }])
        expect(response.status).toBe(200)   
    });

});