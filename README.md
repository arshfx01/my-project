# Getting Started with Next.js and Tailus UI

This README provides step-by-step instructions to set up a Next.js project with Tailwind CSS and integrate Tailus UI components.

## Prerequisites

* Node.js (version 16.8 or later recommended)
* npm or yarn

## Instructions

1.  **Clone or Create a Next.js Project (without Tailwind CSS):**

    You have two options to start:

    * **Clone an existing Next.js project (ensure it doesn't have Tailwind CSS configured):**
        ```bash
        git clone <repository-url>
        cd <project-directory>
        ```
    * **Create a new Next.js project without Tailwind CSS:**
        ```bash
        npx create-next-app@latest --no-tailwind
        # or
        yarn create next-app --no-tailwind
        cd <project-name>
        ```

2.  **Install Tailwind CSS and PostCSS:**

    Follow the official Tailwind CSS installation guide to install Tailwind CSS and its peer dependencies (PostCSS and Autoprefixer). You can find the guide on the official Tailwind CSS website ([https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)).

    Typically, this involves running commands similar to:

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    # or
    yarn add -D tailwindcss postcss autoprefixer
    ```

    Then, initialize your Tailwind CSS configuration file:

    ```bash
    npx tailwindcss init -p
    # or
    yarn tailwindcss init -p
    ```

    This will create `tailwind.config.js` and `postcss.config.js` files in your project root.

3.  **Install Tailus Themer:**

    Install the `tailus-themer` package:

    ```bash
    npm install tailus-themer
    # or
    yarn add tailus-themer
    ```

4.  **Clone `lib/utils.ts` and `tailwind.config.ts` from Tailus Themer:**

    Navigate to the `node_modules/tailus-themer` directory within your project. Locate the `lib/utils.ts` file and the `tailwind.config.js` file.

    * **Create a `lib` folder** in the root of your Next.js project if it doesn't already exist.
    * **Copy `utils.ts`** from `node_modules/tailus-themer/lib` to your project's `lib` folder.
    * **Copy `tailwind.config.js`** from `node_modules/tailus-themer` to the root of your Next.js project.

5.  **Rename `tailwind.config.js` to `tailwind.config.ts`:**

    Rename the Tailwind configuration file you just copied:

    ```bash
    mv tailwind.config.js tailwind.config.ts
    ```

6.  **Create a `components` Folder:**

    If you don't have one already, create a `components` folder in the root of your Next.js project:

    ```bash
    mkdir components
    ```

7.  **Copy Tailus UI Components:**

    Navigate back to the `node_modules/tailus-themer` directory. Inside, you'll find a `components` folder. **Copy the entire `components` folder** from `node_modules/tailus-themer` into the `components` folder you created in your project.

8.  **Use Tailus UI Components:**

    Now you can import and use the Tailus UI components in your Next.js application. For example, to use a button component (assuming there's a `Button.tsx` in the copied `components` folder):

    ```tsx
    import Button from '@/components/Button';

    export default function Home() {
      return (
        <div>
          <h1>Welcome to my Next.js App with Tailus UI</h1>
          <Button primary>Click Me</Button>
        </div>
      );
    }
    ```

    Remember to configure your `globals.css` or a similar global stylesheet to include the Tailwind CSS directives:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    You can then import this global stylesheet in your `_app.tsx` file.

That's it! You've now set up a Next.js project with Tailwind CSS and integrated the Tailus UI components. You can start exploring and using the various components provided by Tailus UI in your application.