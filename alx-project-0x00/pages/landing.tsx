import React from "react";
import Card from "../components/Card";
import Button from "@/components/Button"; // Correct import path using the alias

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Landing Page</h1>
      
      {/* Existing Card component */}
      <Card />

      {/* New section for displaying different button instances */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Button Examples</h2>
      <div className="flex flex-wrap items-center gap-4">
        {/* Buttons with different sizes */}
        <Button title="Small" styles="px-2 py-1 text-sm" />
        <Button title="Medium" styles="px-4 py-2 text-base" />
        <Button title="Large" styles="px-6 py-3 text-lg" />

        {/* Buttons with different shapes */}
        <Button title="Rounded Small" styles="rounded-sm" />
        <Button title="Rounded Medium" styles="rounded-md" />
        <Button title="Rounded Large" styles="rounded-lg" />
        <Button title="Rounded Full" styles="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
