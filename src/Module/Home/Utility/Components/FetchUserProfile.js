import hafizoddinImage from "../../../../assets/images/hafizoddin.jpeg";

// Mock function to simulate fetching user profile data
const FetchUserProfile = async () => {
    try {
        // Return the user profile data
        return {
            name: "Muhammad Hafizoddin",
            firstName: "Hafizoddin",
            title: "Assistant Vice President | Senior Backend Engineer | Java / Spring Boot Specialist",
            image: hafizoddinImage,
        };
    } catch (error) {
        console.error("Fetching user profile failed:", error);
    }
};

export default FetchUserProfile;
