// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");

// jest.mock("./models/index", () => ({create: jest.fn()}));

describe('./musicians endpoint', () => {
    // Write your tests here
    test("Testing musicians endpoint", async () => {
        // Sends request to `/muscisians` endpoint
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
    })
    test("Testing musicians PUT", async () => {
        const id = 1;
        const updatedDetails = { instrument: "Bass" }; 
    
        const response = await request(app).put(`/musicians/${id}`).send(updatedDetails);
    
        const updatedMusician = response.body;
    
        expect(response.status).toBe(200);
        expect(updatedMusician.instrument).toBe("Bass");
    });
    test("Testing musicians POST", async () => {
        const newDetails = 
        { name: "Eli", 
        instrument: "Bass" 
        }; 
        // Musician.create.mockResolvedValue(newDetails);
        const response = await request(app).post("/musicians").send(newDetails);
    
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ musician: newDetails.name});
    });
    test("Testing musicians DELETE", async () => {
        const id = 4;
        const response = await request(app).delete(`/musicians/${id}`)
    
        expect(response.status).toBe(200);
        expect(response.body.name).toEqual("Eli");
        //other test
        // expect(response.body).toMatchObject({ name: "Eli", instrument: "Bass" });
    });
    
    
})