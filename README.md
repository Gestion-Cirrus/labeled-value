
# My Components Library Documentation

Welcome to the Our Components Library documentation. This guide provides detailed information on the usage and capabilities of the different components available in the library. The components are designed to facilitate the display and interaction with various data types in a React application.

# Storybook:

[Link](https://gestion-cirrus.github.io/labeled-value/?path=/story/basic-media-labeledaudio--default)

## External Dependencies

To use the components from this library effectively, there are external dependencies that are not bundled with the library but must be included in your application environment. This section outlines these dependencies and provides guidance on how to include them in your project.

### Core Dependencies

1. **React and ReactDOM**
   - The components are built using React and therefore require `react` and `react-dom` to be present in your project.
   - These dependencies should be installed using npm or yarn:
     ```bash
     npm install react react-dom
     ```
     or
     ```bash
     yarn add react react-dom
     ```

### Specialized Dependencies

1. **OpenLayers (ol)**
   - The `LabeledGeoJson` component utilizes OpenLayers to render geographical data.
   - If your application intends to use the `LabeledGeoJson` component, you must include OpenLayers in your project. Install it using npm or yarn:
     ```bash
     npm install ol
     ```
     or
     ```bash
     yarn add ol
     ```

Please ensure these dependencies are correctly installed and imported as required to avoid any runtime errors in your application.


## Table of Contents

1. [Overview](#overview)
2. [Component Categories](#component-categories)
   - [Basic Components](#basic-components)
   - [Automatic Value Routing Components](#automatic-value-routing-components)
   - [Independent Components](#independent-components)
3. [Usage Examples](#usage-examples)
4. [Development](#development)
5. [Contributing](#contributing)

## Overview

This library is built to support a wide range of data types through specialized components, each designed to handle specific types of data effectively. From displaying primitive types like strings and numbers to handling complex data structures like JSON or geographic data, the library offers a robust set of tools for developers.

## Component Categories

### Basic Components

These components are directly tied to specific data types and require explicit usage based on the data they are meant to display:

- **LabeledString**
- **LabeledNumber**
- **LabeledDate**
- **LabeledBoolean**
- **LabeledEmail**
- **LabeledImage**
- **LabeledVideo**
- **LabeledAudio**
- **LabeledFile**
- **LabeledColor**
- **LabeledGeoJson**

### Automatic Value Routing Components

These components automatically determine which component to use based on the data type or structure of the input data. They are designed to simplify the process of integrating diverse data types into a user interface without requiring manual component selection:

- **LabeledValue**: Routes data to the appropriate component based on its type.
- **LabeledTree**: Displays hierarchical data structures, automatically nesting components as needed.

### Independent Components

Independent components offer specialized functionalities that are not directly tied to a specific data type but provide enhanced features for complex use cases:

- **LabeledRaw**: Displays raw data with optional formatting.
- **LabeledLink**: Renders hyperlinks with additional functionalities such as copying to clipboard.
- **LabeledCurrency**: Displays monetary values with currency formatting.
- **LabeledPercentage**: Shows numerical values as percentages.
- **LabeledRating**: Provides a visual representation of ratings using stars or similar icons.

## Usage Examples

Here are a few examples of how to use the components in your React application:

```jsx
import React from 'react';
import { LabeledString, LabeledNumber, LabeledValue } from 'my-components-library';

const App = () => (
  <div>
    <LabeledString label="Name" value="John Doe" />
    <LabeledNumber label="Age" value={30} />
    <LabeledValue label="Data" value={{ key: 'value' }} />
  </div>
);

export default App;
```

## Development

Details about setting up the development environment, running tests, and building the project.

## Contributing

Guidelines on how to contribute to the project, including coding standards, commit message guidelines, and the pull request process.
