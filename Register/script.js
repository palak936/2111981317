const url = "http://20.244.56.144/test/register";
const pay = {
    companyName: "goMart",
    ownerName: "Rahul",
    rollNo: "1",
    ownerEmail: "rahul@abc.edu",
    accessCode: "zWpata",
    clientID: "37bb493c-73d3-47ea-8675-21f66ef9b735",
    clientSecret: "XOyo1ORPasKWODAN",

};
async function register() {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pay)
        });

        if (response.ok) {
            const registration = await response.json();
            console.log("successful");
            console.log("Save details:", registration);
        } else {
            console.log("Registration failed", response.status);
        }
    }
    register();
async function getAuthToken() {
    try {
        const response = await fetch(authUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authPayload)
        });

        if (response.ok) {
            const authDetails = await response.json();
            console.log("Authorization successful!");
            console.log("Token details:", authDetails);
        } else {
            console.log("Authorization failed with status code:", response.status);
            const errorDetails = await response.text();
            console.log("Response:", errorDetails);
        }
    } catch (error) {
        console.error("Error occurred:", error);
    }
}
getAuthToken();
