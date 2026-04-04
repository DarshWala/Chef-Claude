import { InferenceClient } from '@huggingface/inference';

const hf = new InferenceClient(import.meta.env.VITE_HF_KEY);

export async function GetRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    
    // Log this to your browser console to verify the key is loading
    console.log("Using Key:", import.meta.env.VITE_HF_KEY ? "Key Found!" : "KEY MISSING!");

    try {
        const response = await hf.chatCompletion({
            // Switching to a more stable, smaller model for testing
            model: "HuggingFaceH4/zephyr-7b-beta", 
            messages: [
                { 
                    role: "user", 
                    content: `I have ${ingredientsString}. Give me a short recipe in markdown.` 
                },
            ],
            max_tokens: 500,
        });
        return response.choices[0].message.content;
    } catch (err) {
        console.error("The exact error is:", err.message);
        return "I couldn't get a recipe right now. Please check the console.";
    }
}