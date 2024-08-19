import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";
import userEvent from "@testing-library/user-event";

// Your tests here
test("component renders the homepage of a portfolio site based on the provided wireframe", ()=>{
    render(<App/>);
    const topLevelHeading=screen.getByRole("heading", {
        name:/hi, i'm/i,
        exact:false,
        level:1
    });
    expect(topLevelHeading).toBeInTheDocument();

    const profileImage=screen.getByRole("img");
    expect(profileImage).toHaveAttribute("alt", "A picture of Nobert at work");
    
    const levelTwoHeading=screen.getByRole("heading", {
        name:/about me/i,
        exact:true,
        level:2
    });
    expect(levelTwoHeading).toBeInTheDocument();

    const paragraph=screen.getByText((content, element)=>{
        return element.tagName.toLowerCase()==='p'&&content.trim()!=='';
    });
    expect(paragraph).toBeInTheDocument();

    const gitHubLink=screen.getByRole("link", {
        name:/GitHub/i,
        exact:false
    })
    expect(gitHubLink).toHaveAttribute("href", "https://github.com/Nobert-Muma");
    const linkedInLink=screen.getByRole("link", {
        name:/LinkedIn/,
        exact:false
    })
    expect(linkedInLink).toHaveAttribute("href", "https://www.linkedin.com/in/nobert-muma-46a58b312/");
});
// Initial state
test("displays a text input field for the user to enter their username", ()=>{
    render(<App/>);
    const usernameInputField=screen.getByLabelText(/username/i);
    expect(usernameInputField).toBeInTheDocument();
})
test("displays an input field for the user to enter their email address", ()=>{
    render(<App/>);
    const emailInputField=screen.getByPlaceholderText(/enter your email address/i);
    expect(emailInputField).toBeInTheDocument();
})
test("displays a set of checkboxes for the users to select their interests", ()=>{
    render(<App/>);
    const interestsCheckboxes=screen.getAllByRole("checkbox");
    expect(interestsCheckboxes.length).toBeGreaterThan(0);
    interestsCheckboxes.forEach(checkbox=>{
        expect(checkbox).toBeInTheDocument();
    })
})
test("displays a button to submit the form", ()=>{
    render(<App/>);
    const submitButton=screen.getByRole("button", {
        name:/submit/i
    });
    expect(submitButton).toBeInTheDocument();
});
// Simulating user events
test("displays the username the user types into the form", ()=>{
    render(<App/>);
    const usernameInputField=screen.getByLabelText(/username/i);
    userEvent.type(usernameInputField, "Herbert Omwenga");
    expect(usernameInputField).toHaveValue("Herbert Omwenga");
})
test("displays the email the user types into the form", ()=>{
    render(<App/>);
    const emailInputField=screen.getByLabelText(/email/i);
    userEvent.type(emailInputField, "xyz@gmail.com");
    expect(emailInputField).toHaveValue("xyz@gmail.com");
})
test("checkboxes", ()=>{
    render(<App/>)
    const travelCheckbox = screen.getByLabelText(/travel/i);
    const danceCheckbox = screen.getByLabelText(/dance/i);
    
    // Initial state: check that checkboxes are unchecked
    expect(travelCheckbox).not.toBeChecked();
    expect(danceCheckbox).not.toBeChecked();
    
    // Simulate user checking the checkboxes
    userEvent.click(travelCheckbox);
    userEvent.click(danceCheckbox);
    
    // Check if checkboxes are checked
    expect(travelCheckbox).toBeChecked();
    expect(danceCheckbox).toBeChecked();
    
    // Simulate user unchecking the checkboxes
    userEvent.click(travelCheckbox);
    userEvent.click(danceCheckbox);
    
    // Check if checkboxes are unchecked
    expect(travelCheckbox).not.toBeChecked();
    expect(danceCheckbox).not.toBeChecked();
})
test("clicking the 'Submit' button", ()=>{
    render(<App/>);
    userEvent.click(screen.getByRole("button", {name:/submit/i}));
    expect(screen.getByText(/newsletter received successfully/i)).toBeInTheDocument();
})
