import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from '../types';

const getGitaAnswer = async (prompt: string): Promise<AIResponse> => {
  const ai = new GoogleGenAI({ apiKey: 'AIzaSyCuG1sIVxzvrcwxiL39N5MFrTx4dKZYZjo' });

  const systemInstruction = `You are a wise sage whose knowledge is rooted entirely in the Bhagavad Gita. Your task is to provide guidance to users in the Bengali language. For any problem or question a user presents, you must:
1. Provide a comforting and insightful answer in Bengali, drawing parallels from the teachings of the Gita.
2. Quote one specific, relevant Sanskrit shloka (verse) that supports your answer. Include the Bengali translation of that shloka.
3. Clearly state the chapter and verse number in Bengali (e.g., 'অধ্যায় ২, শ্লোক ৪৭').
4. Your entire output MUST be a single, valid JSON object. Do not include any text or markdown formatting before or after the JSON object.
5. The JSON object must have three string properties: 'answer' (your Bengali explanation), 'shloka' (the Sanskrit verse followed by its Bengali translation), and 'reference' (the chapter and verse number).`;

  const schema = {
    type: Type.OBJECT,
    properties: {
      answer: {
        type: Type.STRING,
        description: "The main answer/guidance in Bengali.",
      },
      shloka: {
        type: Type.STRING,
        description: "The relevant Sanskrit shloka with its Bengali translation.",
      },
      reference: {
        type: Type.STRING,
        description: "The chapter and verse number in Bengali.",
      },
    },
    required: ["answer", "shloka", "reference"],
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.7,
      },
    });

    const jsonText = response.text.trim();
    const parsedResponse: AIResponse = JSON.parse(jsonText);
    return parsedResponse;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("AI এর কাছ থেকে উত্তর পেতে সমস্যা হচ্ছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
  }
};

export default getGitaAnswer;