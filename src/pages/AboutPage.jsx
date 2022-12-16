import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div className="about">About</div>
      <h1>This is app for giving feedback</h1>
      <p>
        <Link to="/">Back to Home page</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
