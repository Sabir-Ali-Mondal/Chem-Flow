const express = require('express');
const cors = require('cors');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 3000;

const GEMINI_API_KEY = 'AIzaSyDy8lURXC3_ajHJl_Ct4OesZgxgbxVt-KA';

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static('public'));

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

app.post('/api/server', async (req, res) => {
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

        res.json({ text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ 
            error: 'AI processing failed',
            details: error.message 
        });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
