import hafizoddinImage from "../../../../assets/images/hafizoddin.jpeg";

// Mock function to simulate fetching user profile data
const FetchUserProfile = async () => {
    try {

        // Return the mock user profile data
        return {
            name: "Hafizoddin",
            image: hafizoddinImage,
            // Add more user details as needed
        };
    } catch (error) {
        console.error("Fetching user profile failed:", error);
    }
};

export default FetchUserProfile;