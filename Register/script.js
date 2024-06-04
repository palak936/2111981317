const url = "http://20.244.56.144/test/register";
const pay = {
    companyName: "goMart",
    ownerName: "Rahul",
    rollNo: "1",
    ownerEmail: "rahul@abc.edu",
    accessCode: "FKDLjg"
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
