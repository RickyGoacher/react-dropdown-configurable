# React Dropdown Component

React dropdown button with styling and icon config.

## How it works

- The `<Dropdown>` acts as a wrapper for each link or element and allows styles and icon to be set.

## How to use

### Install

Installation: `npm install react-dropdown-configurable`

### Usage

Import the package into your app:

`import { Dropdown } from "react-dropdown-configurable";`

#### Component Example:
```
        <Dropdown
            buttonText="Click Button" 
            buttonStyles={{padding: "1rem 2rem", backgroundColor: "#2C514C", color: "white", border: "0", borderRadius: "4px"}}
            icon={Chevron} 
            iconStyles={{width: "12px", height: "12px"}}
            contentStyles={{backgroundColor: "white", top: "102%", borderRadius: "2px", padding: "1rem", gap: "6px"}}
        >
          <span> Element </span>
          <span> Element Two </span>
    </Dropdown>   
```
### Component Options:

    -  `buttonText="Click Button"`
        [Required] Text for the dropdown button.

    -  `buttonStyles`
        [Required] Button styles, takes react css properties.

    -   `icon={Chevron}` 
        [Required] Takes image import.
 
    -  `iconStyles`
        [Required]Icon styles, takes react css properties.

    -  `contentStyles`
        [Required] Dropdown content styles, takes react css properties.

    -  `iconAlt`
        [Optional] Image alt for icon.