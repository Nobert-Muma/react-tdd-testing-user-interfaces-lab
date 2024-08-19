import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

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

})