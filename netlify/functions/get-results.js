require('dotenv').config();
const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    // Simple check for Netlify Identity (optional but recommended)
    // const { user } = context.clientContext || {};
    // if (!user) return { statusCode: 401, body: "Unauthorized" };

    const SITE_ID = process.env.SITE_ID;
    const AUTH_TOKEN = process.env.NETLIFY_AUTH_TOKEN;

    if (!SITE_ID || !AUTH_TOKEN) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "SITE_ID or NETLIFY_AUTH_TOKEN not set in environment variables" })
        };
    }

    // 1. Get Form ID first
    try {
        const formsResponse = await fetch(`https://api.netlify.com/api/v1/sites/${SITE_ID}/forms`, {
            headers: { Authorization: `Bearer ${AUTH_TOKEN}` }
        });
        const forms = await formsResponse.json();
        const surveyForm = forms.find(f => f.name === 'survey-results');

        if (!surveyForm) {
            return { statusCode: 404, body: JSON.stringify({ error: "Form not found" }) };
        }

        // 2. Get Submissions
        const submissionsResponse = await fetch(`https://api.netlify.com/api/v1/forms/${surveyForm.id}/submissions`, {
            headers: { Authorization: `Bearer ${AUTH_TOKEN}` }
        });
        const submissions = await submissionsResponse.json();

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
