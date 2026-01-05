const { GoogleGenerativeAI } = require('@google/generative-ai');

const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { prompt, systemInstruction, image } = req.body;

        if (!prompt && !image) {
            return res.status(400).json({ error: 'Prompt or image required' });
        }

        const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            systemInstruction: systemInstruction || 'You are a helpful assistant.'
        });

        let result;
        
        if (image) {
            const imageParts = [{
                inlineData: {
                    data: image,
                    mimeType: 'image/jpeg'
                }
            }];
            
            result = await model.generateContent([prompt, ...imageParts]);
        } else {
            result = await model.generateContent(prompt);
        }

        const response = await result.response;
        const text = response.text();

        res.status(200).json({ text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ 
            error: 'AI processing failed',
            details: error.message 
        });
    }
};
