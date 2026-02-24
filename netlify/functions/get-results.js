require('dotenv').config();
const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    // Simple check for Netlify Identity (optional but recommended)
    // const { user } = context.clientContext || {};
    // if (!user) return { statusCode: 401, body: "Unauthorized" };

    const NETLIFY_SITE_ID = process.env.NETLIFY_SITE_ID;
    const AUTH_TOKEN = process.env.AUTH_TOKEN;

    if (!NETLIFY_SITE_ID || !AUTH_TOKEN) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "NETLIFY_SITE_ID or NETLIFY_AUTH_TOKEN not set in environment variables" })
        };
    }

    // Simplified: Get all submissions for the site
    try {
        const response = await fetch(`https://api.netlify.com/api/v1/sites/${NETLIFY_SITE_ID}/submissions`, {
            headers: { Authorization: `Bearer ${AUTH_TOKEN}` }
        });

        if (!response.ok) {
            const errorText = await response.text();
            return { statusCode: response.status, body: errorText };
        }

        const submissions = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(submissions)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
